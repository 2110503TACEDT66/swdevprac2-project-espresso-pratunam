import React from "react";
import Link from "next/link";

interface MenuPopupProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const Menu = ({ isMenuOpen, onMenuClose }: MenuPopupProps) => {
  return (
    <div
      className={`absolute w-screen h-screen top-full right-0  bg-opacity-100 backdrop-blur-[16px] shadow-md rounded-lg transition-transform  duration-1000 ${
        isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-80"
      }`}
    >
      <ul className="py-32 px-4 text-white font-normal">
        <li className="flex justify-center relative text-center w-full mb-4 translate-y-0 translate-x-0">
          <Link href="/carlist" className={`transition-all duration-[1500ms] ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <span className={`text-9xl text-inherit ml-[200px] inline-block transition-all duration-[400ms] hover:text-[#004bfa] hover:font-semibold`}>
                <span className="text-4xl">01</span> Car Rental
            </span>
            </Link>
        </li>
        <li className="flex justify-center relative text-center w-full mb-4 translate-y-0 translate-x-0">
          <Link href="/bookinglist " className={`transition-all duration-[2000ms] ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <span className={`text-9xl text-inherit ml-[-200px] inline-block duration-[400ms]  hover:text-[#004bfa] hover:font-semibold`}>
                Booking List  <span className="text-4xl">02</span>
            </span>
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
