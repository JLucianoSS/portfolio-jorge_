'use client';
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomeMe, Offcanvas } from ".";

export const ButtonMenu = () => {
  const [isOffcanvas1Open, setIsOffcanvas1Open] = useState<boolean>(false);

  return (
    <div className="fixed top-0 right-0 bg-purple-500 rounded-2xl w-12 flex items-center justify-end mr-2 mt-2 md:hidden z-50">
      {/* Boton para abrir el offcanvas */}
      <button
        onClick={() => setIsOffcanvas1Open(true)}
        className="flex items-center justify-center w-12 h-12 text-base text-white font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl  md:hidden"
      >
        <GiHamburgerMenu />
      </button>
      {/* Offcanvas */}
      <Offcanvas
        isOpen={isOffcanvas1Open}
        onClose={() => setIsOffcanvas1Open(false)}
        title=""
      >
        <HomeMe />
      </Offcanvas>
    </div>
  );
};