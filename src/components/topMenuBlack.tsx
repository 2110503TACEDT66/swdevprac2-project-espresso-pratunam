'use client'
import React, { useState } from "react";
import Link from "next/link";
import Menu from "./menuPopup";
import Image from "next/image";

const TopMenuBlack = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-black w-screen h-20 fixed top-0 z-[1] flex justify-between${
      isMenuOpen ? "" : ""
    }`}>
      <div className="w-[20%] flex items-center text-white font-bold justify-start px-10 transition duration-500 ease-in-out ">
        <button className={`transition duration-500 ease-in-out 
        ${  isMenuOpen ? "transform rotate-180" : ""}`} type="button" onClick={toggleMenu} >
        {isMenuOpen ? (
          <svg
          className="w-8 h-8 fill-current text-white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
        </svg>
        ) : (
          <svg
            className="w-8 h-8 fill-current text-white hover:text-gray-400 transition duration-500 ease-in-out "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6 10a1 1 0 011-1h8a1 1 0 110 2H7a1 1 0 01-1-1zM5 15a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
        </button>
      </div>
      <div className="h-full w-[20%] flex items-center justify-center">
        <Link href="/">
          <Image
            src="/img/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center w-[20%] justify-center relative">
      <Link href="/premium" className="px-3 py-2.5 text-white font-bold transition duration-500 ease-in-out rounded-lg hover:bg-white hover:bg-opacity-10">
          Premium
        </Link>
        <Link
          href="/profile"
          className="ml-5 hover:bg-white hover:bg-opacity-10 px-2 py-2 rounded-lg transition duration-500 ease-in-out"
        >
          <Image
            src="/img/user.png"
            width={30}
            height={30}
            alt="userImage"
          />
        </Link>
      </div>

      <Menu isMenuOpen={isMenuOpen} onMenuClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default TopMenuBlack;
