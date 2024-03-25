import React from "react";
import Link from "next/link";

interface MenuPopupProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const Menu = ({ isMenuOpen, onMenuClose }: MenuPopupProps) => {
  return (
    <div
      className={`absolute w-screen h-screen top-full right-0  bg-opacity-90 backdrop-blur-md shadow-md rounded-lg transition-transform  duration-1000 ${
        isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-80"
      }`}
    >
      <ul className="py-32 px-4 text-white font-normal">
        <li className="flex justify-center relative text-center w-full mb-4 translate-y-0 translate-x-0">
          <Link href="/menu-item-1">
            <span className="text-9xl text-inherit ml-[80px] inline-block transition-all duration-500 hover:text-[#004bfa] hover:font-semibold">
                Menu Item 1
            </span>
            </Link>
        </li>
        <li className="flex justify-center relative text-center w-full mb-4 translate-y-0 translate-x-0">
          <Link href="/menu-item-2">
            <span className="text-9xl text-inherit ml-[-200px] inline-block transition-all duration-500 hover:text-[#004bfa] hover:font-semibold">
                Menu Item 2
            </span>
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
