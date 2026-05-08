import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
  "https://bookshop-rouge.vercel.app",
});

export const { signIn, signOut, signUp, useSession } = authClient;
