import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Job from '@/models/Job';
import Subscriber from '@/models/Subscriber';
import { sendEmail } from '@/lib/brevo';

export async function GET(request: Request) {
  // Validate standard Vercel CRON secret if available
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    // 1. Get today's jobs
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Start of tomorrow

    const newJobs = await Job.find({
      createdAt: { $gte: today, $lt: tomorrow }
    });

    if (newJobs.length === 0) {
      return NextResponse.json({ message: 'No new jobs today. Skipping emails.' }, { status: 200 });
    }

    // 2. Fetch all VERIFIED subscribers
    const subscribers = await Subscriber.find({ isVerified: true });

    if (subscribers.length === 0) {
      return NextResponse.json({ message: 'No verified subscribers found.' }, { status: 200 });
    }

    // 3. Construct Email Template
    let jobsListHtml = newJobs.map(job => `
      <div style="padding: 10px; border-bottom: 1px solid #ddd;">
        <h3>${job.title} at ${job.company}</h3>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/jobs/${job.slug}" style="display:inline-block; padding: 8px 15px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;">View Job</a>
      </div>
    `).join('');

    const subject = `${newJobs.length} New Job Postings Today!`;

    // 4. Send Emails securely using a loop (batch sending in Brevo) or one-by-one
    // For smaller lists, one by one is fine. For larger, look into Brevo's bulk email API.
    for (const sub of subscribers) {
      const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/subscribe/unsubscribe?email=${encodeURIComponent(sub.email)}`;
      
      const htmlContent = `
        <h2>Here are today's job updates!</h2>
        ${jobsListHtml}
        <br/><br/>
        <hr/>
        <p style="font-size: 12px; color: #666;">
          You are receiving this because you subscribed to daily job alerts. 
          <a href="${unsubscribeUrl}">Unsubscribe</a>
        </p>
      `;

      await sendEmail(sub.email, subject, htmlContent);
    }

    // 5. Clean up old jobs (older than 5 days)
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    
    await Job.deleteMany({
      createdAt: { $lt: fiveDaysAgo }
    });

    return NextResponse.json({ 
      message: 'Emails sent successfully and old jobs cleaned up',
      emailsSent: subscribers.length,
      jobsIncluded: newJobs.length
    }, { status: 200 });

  } catch (error) {
    console.error('CRON Daily Jobs Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
