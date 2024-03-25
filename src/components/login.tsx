'use client'
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";

type Props = {
    className? : string
    callbackURL? : string
}

const Login = (props:Props) => {
  const email= useRef("");
  const password = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await signIn("credentials",{
        email: email.current,
        password: password.current,
        redirect: true,
        callbackUrl: props.callbackURL ?? "http://localhost:3000"
    })
  }

  return (
    <div className="text-slate-200 h-screen w-screen flex items-center justify-center">
        <form onSubmit={onSubmit} className="h-[50%] w-[30%] bg-neutral-950 flex flex-col justify-center px-20 pb-10 shadow-[0_0_200px_20px_rgba(0,0,255,0.15)] rounded-2xl">
            <div className="flex items-center justify-center text-2xl font-semibold">
                <h1>Espresso Pratunam</h1>
                
            </div>
            <div className="flex items-center justify-center mb-7 text-lg">
                 <h3>Log In</h3> 
                 </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2 block w-full shadow-sm sm:text-md border-black bg-black rounded-md text-slate-200 mb-3"
                    onChange={(e) => (email.current = e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2 block w-full shadow-sm sm:text-md border-black bg-black rounded-md text-slate-200"
                    onChange={(e) => (password.current = e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10"
            >
                Sign in
            </button>
        </form>
    </div>
);
};

export default Login;
