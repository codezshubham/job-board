import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz" className="font-bold text-xl">
            Admin Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className={buttonVariants({ variant: "ghost" })}>
              View Website
            </Link>
            {session && <LogoutButton />}
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
