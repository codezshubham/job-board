"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz");
    }
  };

  return (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background-gray-100 px-4">

    {/* Login Card */}
    <Card className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-background/80 shadow-2xl backdrop-blur-xl">
      
      {/* Top Accent */}
      <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />

      <CardHeader className="space-y-3 text-center pb-2">
        
        {/* Logo / Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>

        <div className="space-y-1">
          <CardTitle className="text-3xl font-black tracking-tight">
            Admin Login
          </CardTitle>

          <CardDescription className="text-base">
            Sign in to access the admin dashboard.
          </CardDescription>
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-5 px-8 py-6">

          {/* Error */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-500 dark:border-red-900 dark:bg-red-950/40">
              {error}
            </div>
          )}

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium">
              Username
            </Label>

            <Input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="h-12 rounded-xl border-muted bg-background/60"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="h-12 rounded-xl border-muted bg-background/60"
            />
          </div>
        </CardContent>

        <CardFooter className="px-8 pb-8">
          <Button
            type="submit"
            className="h-12 w-full rounded-xl text-base font-semibold shadow-lg transition-all hover:scale-[1.02]"
          >
            Sign In
          </Button>
        </CardFooter>
      </form>
    </Card>
  </div>
);
}
