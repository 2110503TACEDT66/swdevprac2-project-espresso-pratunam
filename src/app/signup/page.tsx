"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa6";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup okay", response.data);
    } catch (error: any) {
      console.log("Failed to sign up the user", error.message);
    } finally {
      setLoading(false);
      router.push("/signin");
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
      <h1 className="mb-6 text-4xl text-white font-bold">
        {loading ? "Processing..." : "Sign Up"}
      </h1>
      <form className="w-[30vw] h-[30vw] flex flex-col justify-evenly items-center shadow-[0_0_60px_20px_rgba(0,255,255,0.1)] rounded-2xl py-5 bg-neutral-950">
        <input
          type="text"
          id="username"
          value={user.username}
          placeholder="Enter your username..."
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
        />
        <input
          type="email"
          id="email"
          value={user.email}
          placeholder="Enter your email..."
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
        />
        <input
          type="password"
          id="password"
          value={user.password}
          placeholder="Enter your password..."
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="text-xl w-[80%] pl-2 border-2 border-white rounded-lg py-2 bg-black text-white"
        />

        {buttonDisabled ? (
          <button
            disabled={buttonDisabled}
            className="text-white text-xl px-4 py-2 hover:shadow-[0_0_60px_20px_rgba(255,0,0,0.1)] rounded-lg"
          >
            Please provide your information.
          </button>
        ) : (
          <button
            onClick={onSignUp}
            disabled={buttonDisabled}
            className="text-white text-xl px-4 py-2 hover:text-green-600 rounded-lg hover:shadow-[0_0_40px_10px_rgba(0,255,255,0.1)]"
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
}
