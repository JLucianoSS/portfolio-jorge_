"use client";
import { ButtonMenu, CardProject } from "@/app/components";
import useDarModeStore from "@/app/store/switchStore";
import { useEffect } from "react";


const PortfolioPage = () => {
  const isDarkMode = useDarModeStore((state) => state.isDarkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="portfolio"
      className={`${
        isDarkMode ? "bg-darkModePrimary" : "bg-[#f0f0f0]"
      } py-10 px-6
        md:w-[70%] md:rounded-tr-3xl md:rounded-br-3xl`}
    >
      <div
        className="bg-orange-300D flex flex-col gap-10 
        md:w-full md:pb-20 md:gap-15 md:flex md:overflow-y-auto md:h-full 
"
      >
        <div className="flex flex-col items-center justify-center mb-14 md:mb-8 ">
          <span className="text-xl text-[#BD34FE] font-bold mb-3">
            Portafolio
          </span>
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-gray-700"
            } text-4xl font-semibold mb-6`}
          >
            Mis proyectos
          </h1>
          <p
            className={`${
              isDarkMode ? "text-white" : "text-gray-500"
            } text-center text-sm`}
          >
            Te presento lo que he logrado realizar hasta el día de hoy
          </p>
        </div>
        {/* Aquí las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

          {/* Tarjetas*/}

          <CardProject
            imgUrl="/icons/quiz.png"
            title="Anato Plus"
            subtitle="Aura Digital"
            techs="React, Next.js, Tailwind, NestJS, y PostgreSQL."
            description="Gestión de preguntas y redimiento para estudiantes"
            redirectPageUrl="https://quiz-and-membership-py-front.vercel.app"
          />

          <CardProject
            imgUrl="/icons/carrenta.png"
            title="Auto Alquiler"
            subtitle="Aura Digital"
            description="Gestión de reservas y autos"
            techs="React, NextJS, Tailwind, Node.js, y PostgreSQL. "
            redirectPageUrl="#"
            justifyContent="left"
          />

          <CardProject
            imgUrl="/icons/pi.png"
            title="Pokemon"
            subtitle="Personal"
            description="Interfaz, filtrado y creación"
            techs="React, Redux-toolkit, Sass, Node.js, Express, y PostgreSQL. "
            redirectPageUrl="https://pokemon-app-jorge.vercel.app"
          />
         

          <CardProject
            imgUrl="/icons/fe.png"
            title="Food Express"
            subtitle="Ecommerce"
            description="Interfaz, filtrado y creación"
            youtubeLink="Tienda para un restaurant"
            techs="React, Redux, Bootstrap, Node.js, Express y PostgreSQL. "
            redirectPageUrl="https://foodexpress-alpha.vercel.app"
            justifyContent="left"
          />
        </div>
      </div>
      <ButtonMenu />
    </div>
  );
};

export default PortfolioPage;
