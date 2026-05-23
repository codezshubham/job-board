import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await connectDB();

    // Remove or mark unverified
    await Subscriber.findOneAndDelete({ email: email.toLowerCase() });

    // You can redirect to a nice UI page instead of JSON, but for now simple text
    return new NextResponse(`
      <html>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>Unsubscribed</h1>
          <p>You have been successfully unsubscribed from daily job alerts.</p>
        </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' }});
  } catch (error) {
    console.error('Unsubscribe Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
