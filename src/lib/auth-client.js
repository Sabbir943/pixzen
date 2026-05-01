import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL, // ✅ NEXT_PUBLIC_ for client side
});

export const { signIn, signUp, useSession } = authClient;