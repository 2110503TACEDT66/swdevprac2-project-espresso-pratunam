'use client'
import React, { useState } from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import userLogIn from "../libs/userlogin";
import { useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const  TopMenu = async() => {
  const [showBox, setShowBox] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const session = await getServerSession(authOptions)

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const handleLogin = () => {
    // Perform login actions here
    setIsLoggedIn(true);
    setShowBox(false)
  };

  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false);
  };

  return (
    <div className="w-screen h-20 backdrop-blur-md backdrop-brightness-[70%] fixed top-0 z-[1] flex justify-between">
      <div className="w-[20%] flex items-center text-white font-bold justify-start px-10">Menu</div>
      <div className="h-full w-[20%] flex items-center justify-center">
        <Image
          src="/img/logo.png"
          width={50}
          height={50}
          objectFit="cover"
          alt="logo"
        />
      </div>
      <div className="flex items-center w-[20%] justify-center relative">
        <button
          className="px-3 py-2.5 text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10"
        >
          Premium
        </button>
        <Link
          href="/profile"
          className="ml-5 hover:bg-white hover:bg-opacity-10 px-2 py-2 rounded-lg"
          onClick={toggleBox}
        >
          <Image
            src="/img/user.png"
            width={30}
            height={30}
            objectFit="cover"
            alt="userImage"
          />
        </Link>
        
      </div>
    </div>
    
  );
};

export default TopMenu;
