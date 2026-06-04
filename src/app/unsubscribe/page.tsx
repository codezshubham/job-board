"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "success">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/unsubscribe/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStep("otp");
      } else {
        setError(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/unsubscribe/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStep("success");
      } else {
        setError(data.error || "Invalid OTP.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

   return (
    <div className="relative flex overflow-hidden bg-background px-6 pt-3 pb-5 md:pt-5 md:pb-8">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute -right-40 bottom-10 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden w-full lg:flex lg:w-1/2 flex-col items-center justify-start gap-10">

          {/* IMAGE ONLY - NO BACKGROUND/OVERLAY */}
          <div className="relative max-w-[480px] w-full">
            <Image
              src="/notifyme.png"
              alt="Unsubscribe illustration"
              width={520}
              height={520}
              className="w-full h-auto object-contain drop-shadow-xl lg:-mt-20 rotate-[-3deg]"
              priority
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex w-full justify-center lg:w-1/2">

          <div className="w-full max-w-md">

            {/* HEADER */}
            <div className="mb-10 text-center space-y-3">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-2 bg-muted/50 hover:bg-muted px-3 py-1.5 rounded-full"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to jobs
              </Link>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                Un<span className="text-red-500">subscribe</span>
              </h1>

              <p className="text-base text-muted-foreground">
                Stop receiving daily job alerts anytime with a quick verification.
              </p>
            </div>

            {/* CARD */}
            <div className="border border-border/50 rounded-3xl bg-card/80 backdrop-blur-xl shadow-2xl shadow-red-500/5 p-8 relative overflow-hidden">
              {/* TOP DECORATIVE STRIP */}
              <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-red-500/40 via-red-500 to-red-500/40 left-0" />

              {/* EMAIL STEP */}
              {step === "email" && (
                <form onSubmit={handleRequestOtp} className="space-y-6 mt-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3.5 border border-border/50 rounded-xl bg-background/50 focus:bg-background focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                      {error}
                    </div>
                  )}

                  <button
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-red-500 text-white font-semibold shadow-lg shadow-red-500/20 hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:pointer-events-none disabled:opacity-70"
                  >
                    {loading ? "Sending OTP..." : "Continue"}
                  </button>

                  <p className="text-sm text-center text-muted-foreground mt-4">
                    Secure verification required to protect your account
                  </p>
                </form>
              )}

              {/* OTP STEP */}
              {step === "otp" && (
                <form onSubmit={handleVerifyOtp} className="space-y-6 mt-2">
                  <div className="flex flex-col items-center justify-center space-y-2 mb-4">
                    <div className="bg-red-500/10 p-3 rounded-full mb-1 border border-red-500/20">
                       <ShieldAlert className="h-6 w-6 text-red-500" />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      We've sent a code to <br/><b className="text-foreground">{email}</b>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder="• • • • • •"
                      className="w-full text-center tracking-[0.5em] text-2xl py-3 border border-border/50 rounded-xl bg-background/50 focus:bg-background focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-foreground"
                    />
                  </div>

                  {error && (
                    <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center">
                      {error}
                    </div>
                  )}

                  <button
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-red-500 text-white font-semibold shadow-lg shadow-red-500/20 hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:pointer-events-none disabled:opacity-70"
                  >
                    {loading ? "Verifying..." : "Confirm Unsubscribe"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="w-full text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
                  >
                    Change email address
                  </button>
                </form>
              )}

              {/* SUCCESS STEP */}
              {step === "success" && (
                <div className="text-center space-y-6 py-6">
                  <div className="relative inline-flex items-center justify-center">
                     <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                     <CheckCircle2 className="h-16 w-16 text-green-500 relative z-10" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">
                      You're unsubscribed
                    </h2>
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">{email}</span> has been removed successfully.
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="inline-block w-full mt-4 py-3.5 rounded-xl border border-border/50 bg-background hover:bg-muted font-semibold shadow-sm hover:-translate-y-0.5 transition-all"
                  >
                    Return Home
                  </Link>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
