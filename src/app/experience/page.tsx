
import { FaProjectDiagram, FaWordpress } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { Studies } from "../components";


const ExperiencePage = () => {
  return (
    <div
      id="experience"
      className="bg-orange-200D h-auto flex flex-col justify-center items-center py-10 pb-20 px-6 md:px-20 md:gap-7
      lg:px-40  
      xl:px-60 ">
      <div className="flex flex-col items-center justify-center mb-14">
        <span className="text-xl font-bold text-[#BD34FE] mb-3">
          Experiencia
        </span>
        <h1 className="text-4xl font-semibold mb-6">Mi travesía </h1>
        <p className="text-gray-500 text-center text-sm">
          Te cuento lo que he realizado en mi trayectoria como desarrollador
        </p>
      </div>

      <div 
        className="bg-gray-600D flex flex-col justify-center items-center gap-16
        md:flex-row 
      
      
      ">
        {/* Tercera Experiencia */}
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <span className="text-[#BD34FE] text-sm font-bold">2020 - 2023</span>
              <h1 className="text-2xl font-bold mt-1 mb-2">WordPress</h1>
            </div>
            <FaWordpress size={50} />
          </div>
          <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
          <p className="text-gray-600 text-sm text-justify">
            He creado tiendas onlines para ayudar a negocios pequeños a
            automatizar las ventas. Asi como también he realizado soporte
            técnico a webs de clientes, resuelto problemas
            y he hallado soluciones con pluguins y código.
          </p>
          
        </div>

        {/* Segunda Experiencia */}
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <span className="text-[#BD34FE] text-sm font-bold">Jun - 30 Oct / 2023</span>
              <h1 className="text-2xl font-bold mt-1 mb-2">Proyectos</h1>
            </div>
            <FaProjectDiagram size={50}/>
          </div>
          <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
          <p className="text-gray-600 text-sm text-justify">
            Realicé una aplicación que muestra, filtra, busca detalles y crea su
            propia lista personalizada de Pokémon. También hice una web para
            buscar, filtrar, guardar personajes favoritos, esto usando la API de
            Rick and Morty.
          </p>
          
        </div>

        {/* Primera Experiencia */}
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <span className="text-[#BD34FE] text-sm font-bold">11 Nov - 15 Dic / 2023</span>
              <h1 className="text-2xl font-bold mt-1 mb-2">Food Express</h1>
            </div>
            <IoFastFood size={50} />
          </div>
          <hr className="border-t-1 border-gray-400 mb-8 mt-8" />
          <p className="text-gray-600 text-sm text-justify">
            Participé en la creación de una plataforma para explorar menús,
            hacer pedidos personalizados y asegurar pagos seguros, facilitando
            la interacción del cliente y brindando herramientas administrativas.
          </p>
          
        </div>
      </div>
      <Studies/>

    </div>
  );
};


export default ExperiencePage