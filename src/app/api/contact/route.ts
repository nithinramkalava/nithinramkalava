import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Define the contact message type
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Google Sheets setup
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || '';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '';

// Debug log for credentials
console.log('Google Sheet ID:', GOOGLE_SHEET_ID ? 'Configured' : 'Missing');
console.log('Google Service Account Email:', GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'Configured' : 'Missing');
console.log('Google Private Key:', GOOGLE_PRIVATE_KEY ? 'Configured (length: ' + GOOGLE_PRIVATE_KEY.length + ')' : 'Missing');

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json();
    
    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Create a contact message object with timestamp
    const contactMessage: ContactMessage = {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };
    
    // Save to local log file
    await saveToLogFile(contactMessage);
    
    // Save to Google Sheet
    await saveToGoogleSheet(contactMessage);
    
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

// Function to save the message to a log file
async function saveToLogFile(message: ContactMessage) {
  const logDir = path.join(process.cwd(), 'logs');
  const logFile = path.join(logDir, 'contact-messages.json');
  
  // Create logs directory if it doesn't exist
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  // Read existing messages or create empty array
  let messages: ContactMessage[] = [];
  if (fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile, 'utf8');
    messages = JSON.parse(data);
  }
  
  // Add new message
  messages.push(message);
  
  // Write back to file
  fs.writeFileSync(logFile, JSON.stringify(messages, null, 2));
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
      sheet = await doc.addSheet({ title: 'Contact Messages', headerValues: ['Timestamp', 'Name', 'Email', 'Subject', 'Message'] });
    } else {
      console.log('Using existing sheet:', sheet.title);
    }
    
    // Add the row to the sheet
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