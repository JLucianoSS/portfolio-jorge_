import Image from "next/image";
import Link from "next/link";

const icons: String[] = [
  "html.png",
  "css.png",
  "js.png",
  "typescript.png",
  "react.png",
  "redux.png",
  "next.png",
  "bootstrap.png",
  "tailwind.png",
  "sass.png",
  "nodejs.png",
  "posgres.png",
];



export const About = () => {
  return (
    <div
      id="about"
      className="bg-white  py-10 px-6
        md:w-[70%] md:rounded-tr-3xl md:rounded-br-3xl
      
      "
    >

      <div 
        className="bg-orange-300D flex flex-col justify-center items-center gap-16 
        md:w-full md:pb-20 md:gap-15 md:flex md:overflow-y-auto md:h-full md:px-12
        xl:flex xl:flex-row  xl:gap-16

      ">
        
        {/* SOBRE MI */}
        <div className="md:w-full xl:w-1/2">
          <h1 className="text-[#BD34FE] text-lg font-bold mb-4 md:pt-[6rem] xl:pt-0">Acerca de mí</h1>
          <h2 className="text-xl font-bold mb-4">Soy Desarrollador</h2>
          <p className="text-gray-700 mb-4 text-justify text-sm">
            Cuento con experiencia en desarrollo web, WordPress y tecnologías
            modernas, con participación clave en la creación exitosa de un sistema
            llamado
            <span className="text-[#BD34FE] font-bold"> Food Express</span>,
            buscando ampliar habilidades hacia el desarrollo móvil y aportar a
            equipos innovadores.
          </p>
          <p className="text-gray-700 text-sm">
            Echa un vistazo a mi portafolio para conocer más sobre mis proyectos.
          </p>
          <Link href="/portfolio">
            <button className="mt-8 bg-[#BD34FE] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Ver Portafolio
            </button>
          </Link>
        </div>

        {/* Teconologias */}
        <div
          className="border border-solid border-gray-400 h-80 rounded-3xl relative w-full
          md:w-full
          xl:w-1/2
        ">
          {/* TITULO */}
          <div className="bg-white absolute top-[-18px] left-[25px] py-1 px-4 rounded-xl">
            <span className="text-gray-600 text-sm font-bold">Tecnologías que domino</span>
          </div>
          {/* TECNOLOGIA RESALTADA */}
          {/* <div className={`absolute top-[300px] left-[150px] right-[20px] border border-solid border-gray-300 bg-white flex justify-center p-4 rounded-3xl h-30 w-30
            xl:top-[300px] xl:left-[250px] xl:right-[20px]
          `}>
            <Image src="/icons/react.png" alt="tec-resaltada" width={150} height={150} />
          </div> */}
          {/* MÁS TECNOLOGIAS */}
          <div className="bg-green-400D grid grid-cols-3 gap-2 place-items-center h-full p-5 md:grid-cols-4 xl:grid-cols-3">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`border border-solid border-gray-300 bg-white flex justify-center items-center p-2 rounded-3xl w-20`}
              >
                <Image className="w-8 h-8" src={`/icons/${icon}`} alt={`${icon}`} width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


