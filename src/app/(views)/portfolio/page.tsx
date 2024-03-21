'use client';
import { ButtonMenu } from "@/app/components";
import useDarModeStore from "@/app/store/switchStore";
import Image from "next/image";
import { useEffect } from "react";
import { FiYoutube } from "react-icons/fi";


const PortfolioPage = () => {

    const isDarkMode = useDarModeStore((state) => state.isDarkMode);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div
        id="portfolio"
        className={`${ isDarkMode ? 'bg-darkModePrimary' : 'bg-[#f0f0f0]' } py-10 px-6
        md:w-[70%] md:rounded-tr-3xl md:rounded-br-3xl`}
      >
       <div className="bg-orange-300D flex flex-col justify-center items-center gap-10 
        md:w-full md:pb-20 md:gap-15 md:flex md:overflow-y-auto md:h-full 
        xl:pt-[12rem]">
         <div className="flex flex-col items-center justify-center mb-14 md:mb-8 md:pt-[31rem] xl:pt-0">
            <span className="text-xl text-[#BD34FE] font-bold mb-3">Portafolio</span>
            <h1 className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-4xl font-semibold mb-6`}>Mis proyectos</h1>
            <p  className={`${ isDarkMode ? 'text-white' : 'text-gray-500' } text-center text-sm` }>Te presento lo que he logrado realizar hasta el día de hoy</p>
          </div>
          {/* Aquí las tarjetas */}
          <div className="grid grid-cols-1 gap-8 w-full xl:flex">
            {/* Tarjeta 1 - izquierda*/}
            <div className="relative overflow-hidden bg-white w-full py-20 px-8 rounded-3xl shadow-lg md:px-14">
              <div className="absolute inset-0">
                <Image src="/icons/pi.png" layout="fill" objectFit="cover" alt="pi"/>
              </div>
              <div className="relative z-10 text-white">
                <h2 className="text-sm text-red-500 font-bold mb-2">Youtube</h2>
                <h1 className="text-lg font-semibold mb-2">Pokemon App</h1>
                <p className="text-sm text-gray-400 mb-4 w-3/4 md:w-1/2">
                  <b>Tecnologías usadas:</b> React, Redux-toolkit, Sass, Bootstrap, Node.js, Express, y PostgreSQL
                </p>
                <a href="https://pokemon-app-jorge.vercel.app" target="_blank" className="bg-orange-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
                  Ver Proyecto
                </a>
              </div>
            </div>
            {/* Tarjeta 2 - derecha*/}
            <div className="relative overflow-hidden bg-white w-full py-20 px-8 rounded-3xl shadow-lg md:px-14">
              <div className="absolute inset-0">
                <Image src="/icons/fe.png" layout="fill" objectFit="cover" alt="pf"/>
              </div>
              <div className="relative z-10 text-white flex flex-col justify-center items-end w-full">
                <a href="https://www.youtube.com/watch?v=ME_E3ZCshj0&t=27s"  target="_blank" className=" bg-red-500 px-3 py-2 text-sm text-white font-bold mb-2 rounded-xl"><FiYoutube size={25}/></a>
                <h1 className="text-lg font-bold mb-2">Food Express App</h1>
                <p className="text-white text-sm mb-4 w-3/4 text-end md:w-1/2">
                  <b>Tecnologías usadas:</b> React, Redux, Bootstrap, Node.js, Express y PostgreSQL
                </p>
                <a href="https://foodexpress-alpha.vercel.app" target="_blank" 
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
                  Ver Proyecto
                </a>
              </div>
            </div>

          </div>
       </div>
       <ButtonMenu />
      </div>
    );
  };

  export default PortfolioPage;
  