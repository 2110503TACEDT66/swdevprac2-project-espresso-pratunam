import NextAuth from "next-auth";

// Define Interfaces
export interface UserType {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin' | 'provider';
  password: string;
  createdAt: string;
  __v: number;
}


interface SessionInfer extends UserType {
  success: boolean,
  token: string
}
import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
      user: SessionInfer
    }
}