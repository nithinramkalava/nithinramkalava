import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { rateLimit } from './rate-limit';

// Define the contact message type
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Constants for validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 10000;

// Google Sheets setup
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || '';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '';

// Email configuration
const GMAIL_USER = process.env.GMAIL_USER || '';
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || '';
const CONTACT_FORM_ADMIN_EMAIL = process.env.CONTACT_FORM_ADMIN_EMAIL || '';

// Apply rate limiting - 5 requests per hour
const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 500, // Max 500 users per hour
});

// Function to format date in IST
function formatDateToIST(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting based on IP
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    try {
      await limiter.check(5, ip); // 5 requests per hour per IP
    } catch {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse the request body
    const { name, email, subject, message } = await request.json();
    
    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Validate data lengths
    if (name.length > MAX_NAME_LENGTH ||
        email.length > MAX_EMAIL_LENGTH ||
        subject.length > MAX_SUBJECT_LENGTH ||
        message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: 'One or more fields exceed maximum length' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: name.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      email: email.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      subject: subject.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      message: message.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
    };
    
    // Create a contact message object with IST timestamp
    const contactMessage: ContactMessage = {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      timestamp: formatDateToIST(new Date())
    };
    
    // Save to Google Sheet
    await saveToGoogleSheet(contactMessage);
    
    // Send email notification
    await sendEmailNotification(contactMessage);
    
    return NextResponse.json(
      { success: true, message: 'Contact message saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

// Function to save the message to a Google Sheet
async function saveToGoogleSheet(message: ContactMessage) {
  try {
    // Skip if Google credentials are not configured
    if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.warn('Google Sheets credentials not configured. Skipping Google Sheets integration.');
      return;
    }
    
    console.log('Attempting to save to Google Sheet...');
    
    // Create JWT for authentication
    const jwt = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Initialize the Google Sheet
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, jwt);
    await doc.loadInfo();
    console.log('Google Sheet loaded:', doc.title);
    
    // Get the first sheet or create it if it doesn't exist
    let sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      console.log('Creating new sheet...');
      sheet = await doc.addSheet({
        title: 'Contact Messages',
        headerValues: ['Timestamp', 'Name', 'Email', 'Subject', 'Message']
      });
    } else {
      console.log('Using existing sheet:', sheet.title);
      
      // Update headers if they don't match
      const rows = await sheet.getRows();
      if (rows.length === 0 || !Object.prototype.hasOwnProperty.call(rows[0], 'Timestamp')) {
        await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
      }
    }
    
    // Add the row to the sheet with proper column mapping
    await sheet.addRow({
      Timestamp: message.timestamp,
      Name: message.name,
      Email: message.email,
      Subject: message.subject,
      Message: message.message
    });
    
    console.log('Message successfully saved to Google Sheet');
    
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    // Don't throw the error, just log it - we still want the local log to work
  }
}

// Function to send email notification
async function sendEmailNotification(message: ContactMessage) {
  try {
    // Skip if email credentials are not configured
    if (!GMAIL_USER || !GMAIL_PASSWORD || !CONTACT_FORM_ADMIN_EMAIL) {
      console.warn('Email credentials not configured. Skipping email notification.');
      return;
    }
    
    console.log('Attempting to send email notification...');
    
    // Create a transporter with secure TLS settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD,
      }
    });
    
    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${GMAIL_USER}>`,
      to: CONTACT_FORM_ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${message.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <p><strong>Date:</strong> ${message.timestamp}</p>
          <p><strong>Name:</strong> ${message.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${message.email}">${message.email}</a></p>
          <p><strong>Subject:</strong> ${message.subject}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="white-space: pre-line;">${message.message}</p>
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0; padding-top: 10px;">
            <p>This is an automated email from your portfolio website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Date: ${message.timestamp}
Name: ${message.name}
Email: ${message.email}
Subject: ${message.subject}

Message:
${message.message}

This is an automated email from your portfolio website contact form.
      `,
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email notification sent:', info.messageId);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw the error, just log it - we still want the other methods to work
  }
} 