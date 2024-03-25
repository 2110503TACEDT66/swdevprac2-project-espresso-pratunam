import React from "react";
import Link from "next/link";

interface MenuPopupProps {
    isMenuOpen: boolean;
    onMenuClose: () => void;
  }

const Menu = ({ isMenuOpen, onMenuClose }: MenuPopupProps) => {
    return (
        <div
        className={`absolute w-screen h-screen top-full right-0 bg-black bg-opacity-70 backdrop-blur-md backdrop-brightness-[70%] shadow-md transition-transform transition-opacity duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <ul className="py-2 px-4 text-white">
          <li>
            <Link href="/menu-item-1">Menu Item 1</Link>
          </li>
          <li>
            <Link href="/menu-item-2">Menu Item 2</Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Menu;