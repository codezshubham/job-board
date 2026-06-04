import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import PendingSubscriber from '@/models/PendingSubscriber';

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    await connectDB();

    const pendingSubscriber = await PendingSubscriber.findOne({ email: email.toLowerCase() });

    if (!pendingSubscriber) {
      return NextResponse.json({ error: 'No pending verification found for this email' }, { status: 404 });
    }

    if (pendingSubscriber.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    if (new Date() > new Date(pendingSubscriber.otpExpiresAt)) {
      return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
    }

    await Subscriber.findOneAndUpdate(
      { email: email.toLowerCase() },
      {
        $set: { email: email.toLowerCase(), isVerified: true },
        $unset: { otp: "", otpExpiresAt: "" },
      },
      { upsert: true, returnDocument: 'after' }
    );

    await PendingSubscriber.deleteOne({ _id: pendingSubscriber._id });

    return NextResponse.json({ message: 'Successfully subscribed to job notifications!' }, { status: 200 });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
