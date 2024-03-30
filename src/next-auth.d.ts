import NextAuth from "next-auth";

// Define Interfaces
interface UserType {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin' | 'provider';
  password: string;
  createdAt: string;
  __v: number;
}

import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
      user?: {
        name: ReactNode;
        success: boolean;
        user: UserType;
        token: string;
      }
    }
}