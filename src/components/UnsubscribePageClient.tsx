"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function UnsubscribePageClient() {
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
    } catch {
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
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex overflow-hidden bg-background px-6 pt-3 pb-5 md:pt-5 md:pb-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="hidden w-full flex-col items-center justify-start gap-10 lg:flex lg:w-1/2">
          <div className="relative w-full max-w-[480px]">
            <Image
              src="/notifyme.png"
              alt="Unsubscribe illustration"
              width={520}
              height={520}
              className="h-auto w-full rotate-[-3deg] object-contain drop-shadow-xl lg:-mt-20"
              priority
            />
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-10 space-y-3 text-center">
              <Link
                href="/"
                className="mb-2 inline-flex items-center rounded-full bg-muted/50 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to jobs
              </Link>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                Un<span className="text-red-500">subscribe</span>
              </h1>

              <p className="text-base text-muted-foreground">
                Stop receiving daily job alerts anytime with a quick
                verification.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 shadow-2xl shadow-red-500/5 backdrop-blur-xl">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-red-500/40 via-red-500 to-red-500/40" />

              {step === "email" && (
                <form onSubmit={handleRequestOtp} className="mt-2 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border/50 bg-background/50 py-3.5 pr-4 pl-12 outline-none transition-all focus:border-red-500 focus:bg-background focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
                      {error}
                    </div>
                  )}

                  <button
                    disabled={loading}
                    className="w-full rounded-xl bg-red-500 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:pointer-events-none disabled:opacity-70"
                  >
                    {loading ? "Sending OTP..." : "Continue"}
                  </button>

                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Secure verification required to protect your account
                  </p>
                </form>
              )}

              {step === "otp" && (
                <form onSubmit={handleVerifyOtp} className="mt-2 space-y-6">
                  <div className="mb-4 flex flex-col items-center justify-center space-y-2">
                    <div className="mb-1 rounded-full border border-red-500/20 bg-red-500/10 p-3">
                      <ShieldAlert className="h-6 w-6 text-red-500" />
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      We&apos;ve sent a code to <br />
                      <b className="text-foreground">{email}</b>
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
                      className="w-full rounded-xl border border-border/50 bg-background/50 py-3 text-center text-2xl font-medium tracking-[0.5em] text-foreground outline-none transition-all focus:border-red-500 focus:bg-background focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>

                  {error && (
                    <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-500">
                      {error}
                    </div>
                  )}

                  <button
                    disabled={loading}
                    className="w-full rounded-xl bg-red-500 py-3.5 font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:pointer-events-none disabled:opacity-70"
                  >
                    {loading ? "Verifying..." : "Confirm Unsubscribe"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="w-full text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Change email address
                  </button>
                </form>
              )}

              {step === "success" && (
                <div className="space-y-6 py-6 text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl" />
                    <CheckCircle2 className="relative z-10 h-16 w-16 text-green-500" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">
                      You&apos;re unsubscribed
                    </h2>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">{email}</span>{" "}
                      has been removed successfully.
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="mt-4 inline-block w-full rounded-xl border border-border/50 bg-background py-3.5 font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
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
