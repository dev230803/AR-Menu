# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when someone submits the contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Submission - OrderIn3D

**Body:**

```
Hello,

You have received a new contact form submission from your website:

Email: {{user_email}}
Message: {{message}}

Time: {{time}}

Best regards,
OrderIn3D Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: "your_actual_service_id_here",
  templateId: "your_actual_template_id_here",
  publicKey: "your_actual_public_key_here",
};
```

## Step 6: Test the Form

1. Start your development server
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the notification

## How It Works

- When someone submits the form, EmailJS will send an email to your configured email address
- You'll receive instant notifications on your phone if you have email notifications enabled
- The form includes loading states, error handling, and success messages
- No backend required - everything works from the frontend

## Troubleshooting

- **Form not sending**: Check that all three IDs are correct in the config file
- **Email not received**: Check your spam folder and verify the service is properly connected
- **Template variables not working**: Make sure the form field names match the template variables

## Security Note

- The public key is safe to expose in frontend code
- EmailJS handles the security on their end
- Consider rate limiting if needed for production use
