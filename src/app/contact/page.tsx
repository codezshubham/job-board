import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | RojgarSync",
  description: "Get in touch with the RojgarSync team for support, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question, feedback, or want to partner with us? We'd love to hear from you. 
          Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-xl inline-flex items-baseline justify-center">Email Support</CardTitle>
            <CardDescription className="text-base mt-2">
              For general inquiries, job postings, or technical support, drop us an email.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pt-4">
            <a href="mailto:rojgarsync@gmail.com" className="text-lg font-medium text-primary hover:underline">
              rojgarsync@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Social Media</CardTitle>
            <CardDescription className="text-base mt-2">
              Follow us for daily job updates and announcements. Send us a DM!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-6 pt-4">
             <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
             </Link>
             <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
             </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center bg-gray-50 dark:bg-zinc-900/50 rounded-3xl p-8 border border-border/50">
        <h2 className="text-2xl font-bold mb-4">Why Reach Out?</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-muted-foreground mt-8">
          <div>
            <span className="block font-bold text-foreground mb-2">Job Seekers</span>
            Having trouble applying or need career guidance? Let us know.
          </div>
          <div>
            <span className="block font-bold text-foreground mb-2">Employers</span>
            Want to post an urgent opening or feature your company?
          </div>
          <div>
            <span className="block font-bold text-foreground mb-2">Partnerships</span>
            Interested in collaborating with the RojgarSync platform?
          </div>
        </div>
      </div>
    </div>
  );
}
