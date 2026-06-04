import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import PendingSubscriber from '@/models/PendingSubscriber';
import { sendEmail } from '@/lib/brevo';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    await connectDB();

    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() });

    if (existingSubscriber?.isVerified) {
      return NextResponse.json({ error: 'This email is already subscribed' }, { status: 409 });
    }

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    // Log OTP to terminal for easy testing
    console.log("=== GENERATED OTP FOR TESTING ===", otp);
    // Expiration: 10 minutes from now
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP in a temporary verification record until the user confirms it.
    await PendingSubscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      { otp, otpExpiresAt },
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
      await PendingSubscriber.deleteOne({ email: email.toLowerCase() });
      return NextResponse.json({ error: 'Failed to send OTP email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Request OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
