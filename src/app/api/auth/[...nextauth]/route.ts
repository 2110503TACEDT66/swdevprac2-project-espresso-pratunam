import userLogIn from "@/libs/userlogin";
import { UserType } from "@/next-auth";
import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/libs/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
