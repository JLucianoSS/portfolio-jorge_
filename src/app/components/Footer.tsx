'use client';

import useDarModeStore from "../store/switchStore";

export const Footer = () => {
  const isDarkMode  = useDarModeStore((state) => state.isDarkMode);
  return (
    <div className={`${ isDarkMode ? 'bg-darkModePrimary' : 'bg-[#f0f0f0]' } w-full h-36 flex items-center justify-center`}>
        <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-gray-500 text-sm">© 2024 - Jorge Luciano</span>
            <p className="text-white"></p>
        </div>
    </div>
  )
}
