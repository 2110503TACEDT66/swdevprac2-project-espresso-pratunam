import userLogIn from "@/libs/userlogin";
import { UserType } from "@/next-auth";
import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from 'dotenv';
dotenv.config();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "string", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Perform login", credentials)
        if (!credentials) return null;
        const user = await userLogIn(credentials.email, credentials.password);
        console.log(user)
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/SignIn",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // console.log("----- session ------")
      // console.log(session)
      console.log("----- token ------")
      console.log(token)
      const user = token.user as UserType
      session.user._id = user._id as any;
      session.user.name = user.name as any;
      session.user.email = user.email as any;
      session.user.phone = user.phone as any;
      session.user.role = user.role as any;
      session.user.createdAt = user.createdAt;
      session.user.token = token.token as any;
      console.log("----- modified session ------")
      console.log(session)
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
