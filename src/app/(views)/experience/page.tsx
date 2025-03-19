
'use client';
import { FaProjectDiagram, FaWordpress } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { ButtonMenu, Studies } from "../../components";
import useDarModeStore from "@/app/store/switchStore";
import { useEffect } from "react";


const ExperiencePage = () => {

  const isDarkMode = useDarModeStore((state) => state.isDarkMode);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="experience"
      className={` ${ isDarkMode ? 'bg-darkModePrimary' : 'bg-[#f0f0f0]' } py-10 px-6 flex justify-center items-center
      md:w-[70%] md:rounded-tr-3xl md:rounded-br-3xl`}
    >
      <div className="bg-orange-300D flex flex-col gap-10 
        md:w-full md:pb-20 md:gap-15 md:flex md:overflow-y-auto md:h-full md:px-12">
        <div className="flex flex-col items-center justify-center mb-14 md:mb-8 md:mt-[50rem] xl:mt-0">
          <span className="text-xl font-bold text-[#BD34FE] mb-3">
            Experiencia
          </span>
          <h1 className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-4xl font-semibold mb-6`}>Mi travesía </h1>
          <p className={`${ isDarkMode ? 'text-white' : 'text-gray-500' } text-gray-500 text-center text-sm`}>
            Te cuento lo que he realizado en mi trayectoria como desarrollador
          </p>
        </div>
        <div
          className="bg-gray-600D flex flex-col justify-center items-center gap-16
          md:gap-10
          xl:flex-row xl:gap-10
        
        
        ">
          {/* Tercera Experiencia */}
          <div className="">
            <div className="flex justify-between">
              <div className="">
                {/* <span className="text-[#BD34FE] text-sm font-bold">2020 - 2023</span> */}
                <h1 className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-2xl font-bold mt-1 mb-2`}>WordPress</h1>
              </div>
              <FaWordpress className={`${ isDarkMode ? 'text-white' : 'text-gray-700' }`} size={50} />
            </div>
            <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
            <p className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-gray-600 text-sm text-justify`}>
              He desarrollado tiendas online para automatizar las ventas de pequeños negocios, brindando soporte técnico, resolviendo problemas con plugins y creando soluciones personalizadas con código para mejorar la funcionalidad.
            </p>
        
          </div>
          {/* Segunda Experiencia */}
          <div className="">
            <div className="flex justify-between">
              <div className="">
                {/* <span className="text-[#BD34FE] text-sm font-bold">Jun - 30 Oct / 2023</span> */}
                <h1 className={` ${ isDarkMode ? 'text-white' : 'text-gray-700' } text-2xl font-bold mt-1 mb-2`}>Food Express</h1>
              </div>
              <IoFastFood className={`${ isDarkMode ? 'text-white' : 'text-gray-700' }`} size={50} />
            </div>
            <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
            <p className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-gray-600 text-sm text-justify`}>
              Participé en la creación de una plataforma para explorar menús, realizar pedidos personalizados y asegurar pagos seguros, optimizando la experiencia del cliente y las herramientas administrativas.
            </p>
        
          </div>
          {/* Primera Experiencia */}
          <div className="">
            <div className="flex justify-between">
              <div className="">
                {/* <span className="text-[#BD34FE] text-sm font-bold">11 Nov - 15 Dic / 2023</span> */}
                <h1 className={` ${ isDarkMode ? 'text-white' : 'text-gray-700' } text-2xl font-bold mt-1 mb-2`}>Aura Digital</h1>
              </div>
              <FaProjectDiagram className={`${ isDarkMode ? 'text-white' : 'text-gray-700' }` } size={50}/>
            </div>
            <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
            <p className={`${ isDarkMode ? 'text-white' : 'text-gray-700' } text-gray-600 text-sm text-justify`}>
              Colaboré en el desarrollo de una plataforma de alquiler de autos y una plataforma educativa. Además, integré la API de WooCommerce para una aplicación móvil y construí la interfaz de una web para una exposición de arte moderno. También gestioné la publicación de la aplicación en Google Play y App Store.
            </p>
        
          </div>
        </div>
        <Studies/>
      </div>
      <ButtonMenu />

    </div>
  );
};


export default ExperiencePage