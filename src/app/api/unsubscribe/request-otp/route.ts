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

    const subscriber = await Subscriber.findOne({ email: email.toLowerCase() });

    if (!subscriber) {
      return NextResponse.json({ error: 'Email not found in our subscriber list' }, { status: 404 });
    }

    if (!subscriber.isVerified) {
      return NextResponse.json({ error: 'Only verified subscribers can request an unsubscribe OTP' }, { status: 403 });
    }

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    console.log("=== GENERATED UNSUBSCRIBE OTP FOR TESTING ===", otp);
    // Expiration: 10 minutes from now
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP to existing subscriber
    await Subscriber.updateOne(
      { _id: subscriber._id },
      { $set: { otp, otpExpiresAt } }
    );

    // Send OTP via Brevo
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Unsubscribe from Job Notifications</h2>
        <p>Your one-time password (OTP) to unsubscribe is: <strong>${otp}</strong></p>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      </div>
    `;

    const emailResponse = await sendEmail(email, "Your OTP to Unsubscribe", htmlContent);

    if (!emailResponse.success) {
      return NextResponse.json({ error: 'Failed to send OTP email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Request Unsubscribe OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
