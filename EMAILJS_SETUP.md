# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails directly to your Gmail account.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (naymulislamnay@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Portfolio Contact: {{subject}}

**Body:**
```
New message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Environment Variables

1. Create a `.env.local` file in your project root
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_CONTACT_EMAIL=naymulislamnay@gmail.com
```

## Step 6: Update ContactSection Component

In `src/components/ContactSection.tsx`, update the EmailJS configuration:

```typescript
// Replace these lines in the handleSubmit function:
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// Uncomment the EmailJS send function:
await emailjs.send(
  serviceId,
  templateId,
  templateParams,
  publicKey
);
```

## Step 7: Test the Contact Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your Gmail inbox for the message

## Alternative: Current Implementation

The current implementation uses a `mailto:` link as a fallback, which opens the user's default email client with the message pre-filled. This works without any setup but requires the user to have an email client configured.

## Troubleshooting

- **CORS Issues**: Make sure your domain is added to EmailJS allowed origins
- **Template Variables**: Ensure template variable names match exactly
- **Gmail Security**: You might need to enable "Less secure app access" in Gmail settings
- **Rate Limits**: EmailJS free plan has monthly limits

## Security Note

EmailJS public keys are safe to expose in frontend code as they're designed for client-side use. However, consider implementing rate limiting to prevent spam.