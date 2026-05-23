import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import { sendEmail } from '@/lib/brevo';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    await connectDB();

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    // Log OTP to terminal for easy testing
    console.log("=== GENERATED OTP FOR TESTING ===", otp);
    // Expiration: 10 minutes from now
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save or update subscriber
    await Subscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      { otp, otpExpiresAt, isVerified: false }, // Reset verification until OTP is confirmed
      { upsert: true, returnDocument: 'after' }
    );

    // Send OTP via Brevo
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Verify your email for Job Notifications</h2>
        <p>Your one-time password (OTP) is: <strong>${otp}</strong></p>
        <p>This code will expire in 10 minutes.</p>
      </div>
    `;

    const emailResponse = await sendEmail(email, "Your OTP for Job Notifications", htmlContent);

    if (!emailResponse.success) {
      return NextResponse.json({ error: 'Failed to send OTP email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Request OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
