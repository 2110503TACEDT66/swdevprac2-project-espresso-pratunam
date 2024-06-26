"use client";
import React from "react";
import { useRouter } from "next/navigation";
import userRegister from "@/libs/userRegister";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    phone: "",
    createAt: new Date().toISOString(),
  });

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await userRegister(
        user.name,
        user.email,
        user.password,
        user.phone
      );

      alert("User registered successfully," + response.message);
      // case of success push to profile
      router.push("/profile");
    } catch (error: any) {
      alert("Failed to sign up the user" + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
      <h1 className="mb-6 text-4xl text-white font-bold mt-16">Signing Up</h1>
      <form
        onSubmit={onSignUp}
        className="w-[30vw] h-[30vw] flex flex-col justify-evenly items-center shadow-[0_0_60px_20px_rgba(0,255,255,0.1)] rounded-2xl py-5 bg-neutral-950"
      >
        <input
          type="text"
          id="username"
          value={user.name}
          placeholder="Enter your username..."
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
          required
        />
        <input
          type="email"
          id="email"
          value={user.email}
          placeholder="Enter your email..."
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
          required
        />
        <input
          type="phone"
          id="phone"
          value={user.phone}
          placeholder="Enter your phone..."
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
          required
        />
        <input
          type="password"
          id="password"
          value={user.password}
          placeholder="Enter your password..."
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
          required
        />

        <button
          type="submit"
          className="text-white text-xlflex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm font-medium hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        >
          Register
        </button>
      </form>
    </div>
  );
}
