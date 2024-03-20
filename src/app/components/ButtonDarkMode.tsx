'use client';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useDarModeStore from "../store/switchStore";

export const ButtonDarkMode = () => {

  const isDarkMode = useDarModeStore((state) => state.isDarkMode);
  const changeMode = useDarModeStore((state) => state.changeMode);

  const onChangeTheme = () => {
    changeMode();
  };

  return (
    <div className={`${ isDarkMode ? 'bg-darkModeSecondary md:bg-darkModePrimary' : 'bg-[#f0f0f0] md:bg-[#f0f0f0]' } 
        flex justify-center items-center w-14 h-12 rounded-2xl
        md:flex md:justify-center md:items-center
        md:gap-5 md:relative md:top-12 md:right-36 md:left-[93.5%] 
        md:w-0 md:h-12 md:flex-col md:rounded-2xl md:px-6`} 
        style={{ boxShadow: '2px 4px 15px rgba(0, 0, 0, 0.1)' }}
    >
      <button onClick={onChangeTheme} className="text-gray-500">
        {!isDarkMode ? <MdDarkMode size={25} /> : <MdLightMode size={25} className="text-white" />}
      </button>
    </div>
  );
};
