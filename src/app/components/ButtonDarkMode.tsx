"use client";

import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ButtonDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className=" fixed top-0 left-0
        md:flex md:justify-center md:items-center
        md:gap-5 md:relative md:top-12 md:right-36 md:left-[93.5%] 
        md:w-0 md:h-12 md:flex-col md:bg-white md:rounded-2xl md:px-6" 
    >
      <button onClick={onChangeTheme} className="text-gray-500">
        {isDark ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
      </button>
    </div>
  );
};
