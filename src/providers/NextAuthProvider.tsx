"use client";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({
  children,
  sessionAuth,
}: {
  children: React.ReactNode,
  sessionAuth: any
}): React.ReactNode {
  return <SessionProvider session={sessionAuth}>{children}</SessionProvider>;
}
