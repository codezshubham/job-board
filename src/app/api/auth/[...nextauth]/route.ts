import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        Object.assign(session.user, {
          id: typeof token.id === "string" ? token.id : undefined,
        });
      }
      return session;
    }
  },
  pages: {
    signIn: "/admin-x8k9p2m-vault-92hf7q-secure-core-a81mz/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
