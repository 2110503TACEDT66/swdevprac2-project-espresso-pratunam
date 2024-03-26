import NextAuth from "next-auth";
import type { DefaultSession } from "next-auth"; // Import the base Session type

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
        success: boolean;
        user: UserType;
        token: string;
      }
    }
}