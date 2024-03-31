"use client";
import { SignInResponse, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  callbackURL?: string;
};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signTheFUckIn = signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/profile",
      redirect: true,
    });
  };

  const session = useSession();
  useEffect(() => {
    console.log(session);
  });
  return (
    <div className="text-slate-200 h-screen w-screen flex items-center justify-center bg-black">
      {session.data?.user ? (
        <div className="text-center">
          <h1 className="mb-6 text-2xl">You Already Logged In Bro</h1>
          <button
            className="inline-block px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="h-[50%] w-[30%] bg-neutral-950 flex flex-col justify-center px-20 pb-10 shadow-[0_0_200px_20px_rgba(0,0,255,0.15)] rounded-2xl"
        >
          <div className="flex items-center justify-center text-2xl font-semibold mt-10">
            <h1>Espresso Pratunam</h1>
          </div>
          <div className="flex items-center justify-center mb-7 text-lg">
            <h3>Log In</h3>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2 block w-full shadow-sm sm:text-md border-black bg-black rounded-md text-slate-200 mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2 block w-full shadow-sm sm:text-md border-black bg-black rounded-md text-slate-200"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-white flex items-center mt-3">
            <p>haven't got account yet??</p>
            <Link href='/signup'>
             <p className="ml-1 text-blue-500 hover:text-blue-400  cursor-pointer">Sign up here</p>
            </Link>
           
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5"
          >
            Sign in
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
