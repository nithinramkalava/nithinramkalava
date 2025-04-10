"use client";

import { useState } from 'react';

// Validation constants
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  // Validate a single field
  const validateField = (field: string, value: string) => {
    switch(field) {
      case 'name':
        return value.length > MAX_NAME_LENGTH ? `Name exceeds ${MAX_NAME_LENGTH} character limit` : "";
      case 'email':
        return !EMAIL_REGEX.test(value) ? "Please enter a valid email address" : 
               value.length > MAX_EMAIL_LENGTH ? `Email exceeds ${MAX_EMAIL_LENGTH} character limit` : "";
      case 'subject':
        return value.length > MAX_SUBJECT_LENGTH ? `Subject exceeds ${MAX_SUBJECT_LENGTH} character limit` : "";
      case 'message':
        return value.length > MAX_MESSAGE_LENGTH ? `Message exceeds ${MAX_MESSAGE_LENGTH} character limit` : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Update form data - allow unlimited typing
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Update errors for the field
    setErrors(prev => ({
      ...prev,
      [id]: validateField(id, value)
    }));
  };

  const validateForm = () => {
    // Check if all required fields have values
    const hasValues = Boolean(formData.name && formData.email && formData.subject && formData.message);
    
    // Check all field validations
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    
    // Form is valid if all fields have values and no errors
    return hasValues && !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus({
        success: false,
        message: 'Please fix the form errors before submitting.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    // Sanitize inputs
    const sanitizedData = {
      name: formData.name.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      email: formData.email.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      subject: formData.subject.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
      message: formData.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    };
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully!'
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 shadow-sm">
      {submitStatus.message && (
        <div className={`mb-6 p-4 ${submitStatus.success ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'} rounded-md`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-[var(--border)]'} rounded-md bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
              placeholder="Your name"
              required
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-[var(--border)]'} rounded-md bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
              placeholder="Your email"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-[var(--border)]'} rounded-md bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
            placeholder="Subject"
            required
          />
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-[var(--border)]'} rounded-md bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
            placeholder="Your message"
            required
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-[var(--primary)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] disabled:opacity-70 disabled:cursor-not-allowed w-full"
        >
          {isSubmitting ? (
            <>
              <span className="mr-2">
                <svg className="animate-spin h-5 w-5 text-[var(--primary-foreground)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
} 