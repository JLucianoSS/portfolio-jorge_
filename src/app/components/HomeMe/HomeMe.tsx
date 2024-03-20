'use client';
import Image from "next/image"
import styles from './HomeMe.module.css';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import Link from "next/link";

export const HomeMe = () => {

  return (

      <div
        className={`${styles.containerProfile} h-[95vh] bg-orange-500D flex flex-col-reverse justify-center items-center gap-y-7 px-6
        md:px-10 md:h-full  md:w-[30%] md:rounded-tl-3xl md:rounded-bl-3xl`}
      >
        <span className=" hidden md:inline-block md:relative md:text-xs md:text-gray-200">© 2024 Jorge Luciano</span>
        <div className="bg-red-500D flex flex-col justify-center items-center
          relative "
        >
          <div
            className="bg-orange-200D mb-10 flex flex-col justify-center items-center w-full
            md:"
          >
            <span className="text-sm font-bold text-white md:text-base">Hola soy</span>
            <h1 className="text-xl font-bold mb-3 mt-1 text-white md:text-xl xl:text-3xl">Jorge Luciano</h1>
            <h5 className="text-base font-bold mb-3 text-white md:text-sm xl:text-lg">Desarrollador Full Stack </h5>
            <p className="mb-2 text-center flex gap-3 text-white text-xs md:text-xs xl:text-xs">
              <FaPhoneAlt />
              +51916325058
            </p>
            <p className="mb-5 text-center flex gap-3 text-white text-xs md:text-xs xl:text-xs">
              <FaMapMarkerAlt />
              Lima, Perú
            </p>
            <div className="flex space-x-3">
              <FaGithub color="white" size={40}  />
              <FaLinkedin color="white" size={40} />
            </div>
          </div>
          <div className="bg-green-500D space-x-5 md:flex">
            <a href="/jorge-cv.pdf" target="_blank" className="text-white font-bold py-2 px-4 text-sm rounded-full border border-white transition-all duration-300 ease-in-out">
              <button>Descargar CV</button>
            </a>
            <Link className="md:hidden" href="#about">
              <button className="bg-white hover:bg-white hover:text-black text-gray-600 text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
                Sobre mí
              </button>
            </Link>
          </div>
        </div>
        {/* COntenedor relativo */}
        <div className="bg-whiteD relative">
          <Image
              className="relative w-[10rem] h-[10rem] rounded-full border-4 border-solid border-white object-cover
              md:w-[12rem] md:h-[12rem]
              "
              src="/icons/jorge.jpeg"
              alt="mi-foto"
              width={300}
              height={300}
              priority
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