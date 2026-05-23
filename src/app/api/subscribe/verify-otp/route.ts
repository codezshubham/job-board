import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    await connectDB();

    const subscriber = await Subscriber.findOne({ email: email.toLowerCase() });

    if (!subscriber) {
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
    }

    if (subscriber.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    if (new Date() > new Date(subscriber.otpExpiresAt)) {
      return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
    }

    // Verify successfully
    await Subscriber.updateOne(
      { _id: subscriber._id },
      { 
        $set: { isVerified: true },
        $unset: { otp: "", otpExpiresAt: "" } 
      }
    );

    return NextResponse.json({ message: 'Successfully subscribed to job notifications!' }, { status: 200 });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
