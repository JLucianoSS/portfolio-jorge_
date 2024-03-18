import Image from "next/image"
import styles from './HomeMe.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const HomeMe = () => {

  return (
    <div className={`${styles.containerProfile} h-[95vh] bg-orange-500D flex flex-col-reverse justify-center items-center gap-y-7 px-6 md:px-20  md:flex-row md:justify-between md:gap-7 md:h-screen lg:px-40 xl:px-60`} >

      <div className="bg-red-500D flex flex-col justify-center items-center md:items-start relative">
        <div className="bg-orange-200D mb-10 flex flex-col justify-center items-center w-full md:items-start">
          <span className="text-sm font-bold text-white xl:text-2xl">Hola soy</span>
          <h1 className="text-xl font-bold mb-3 mt-1 text-white xl:text-5xl">Jorge Luciano</h1>
          <h5 className="text-base font-bold mb-3 text-white xl:text-2xl">Desarrollador Full Stack </h5>
          <p className="mb-5 text-center text-white text-xs md:text-left xl:text-base">Bachiller en Ing. Informática con soluciones <br/> innovadoras y eficaces</p>
          <div className="flex space-x-3">
            <FaGithub color="white" size={40}  />            
            <FaLinkedin color="white" size={40} />
          </div>
        </div>

        <div className="bg-green-500D space-x-5">
          <button className="text-white font-bold py-2 px-4 text-sm rounded-full border border-white transition-all duration-300 ease-in-out">
            Descargar CV
          </button>
          <a href="#about">
            <button className="bg-white hover:bg-white hover:text-black text-gray-600 text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Sobre mí
            </button>
          </a>
        </div>
      </div>

      {/* COntenedor relativo */}
      <div className="bg-whiteD relative">
      <Image 
          className="relative w-[10rem] h-[10rem] rounded-full border-4 border-solid border-white object-cover
          md:w-[22rem] md:h-[24rem]
          "
          src="/icons/jorge.jpeg" 
          alt="mi-foto" 
          width={300} 
          height={300}
        />
        {/* <div className="bg-black absolute w-10 h-10 rounded-xl object-cover top-[100px] left-[190px] shadow-md flex justify-end items-center pr-2">
          <img
              className="w-6 h-6"
              src="/icons/react.png"
              alt="wordpress"
            />
        </div> */}
       
      </div>

    </div>
  )
}