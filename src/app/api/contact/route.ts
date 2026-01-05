import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, we'll use a simple approach with mailto
    // In production, you would integrate with a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - EmailJS

    // Create email content
    const emailContent = {
      to: 'naymulislamnay@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      body: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `.trim()
    };

    // Log the contact form submission (in production, you'd send the actual email)
    console.log('Contact form submission:', emailContent);

    // For demonstration, we'll return success
    // In production, replace this with actual email sending logic
    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        data: { name, email, subject }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}