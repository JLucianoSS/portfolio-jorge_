

// py-40 xl:px-60 lg:px-40 md:px-20 sm:px-10  px-5

import Image from "next/image"

export const Presentation = () => {


  return (
    <div id="presentation" 
      className="bg-orange-500D flex flex-col-reverse justify-center items-center h-uto py-20 gap-y-7 px-6 pt-20
      md:px-20  md:flex-row md:justify-between md:gap-7 md:h-screen
      lg:px-40 
      xl:px-60 
    ">

      <div className="bg-red-500D flex flex-col justify-center items-center md:items-start">
        <div className="bg-orange-200D mb-10 flex flex-col justify-center items-center w-full md:items-start">
          <span className="text-lg font-bold text-gray-600 xl:text-2xl">Hola soy</span>
          <h1 className="text-3xl font-bold mb-3 mt-1 text-gray-600 xl:text-5xl">Jorge Luciano</h1>
          <h5 className="text-xl font-bold mb-3 text-gray-600 xl:text-2xl">Desarrollador Full Stack </h5>
          <p className="mb-5 text-center text-gray-500 text-sm md:text-left xl:text-base">Bachiller en Ing. Informática con soluciones <br/> innovadoras y eficaces</p>
          <div className="flex space-x-3">
            <Image src="/icons/ln.png" alt="gihub" className="w-10 h-10" width={50} height={50}/>
            <Image src="/icons/github.png" alt="linkedin" width={50} height={50} className="bg-black w-10 h-10 rounded-full border-2 border-solid border-black" />
          </div>
        </div>

        <div className="bg-green-500D space-x-5">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
            Descargar CV
          </button>
          <a href="#about">
            <button className="bg-indigo-950 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
              Sobre mí
            </button>
          </a>
        </div>
      </div>

      {/* COntenedor relativo */}
      <div className="bg-white relative">
      <Image 
          className="relative w-[12rem] h-[13rem] rounded-3xl object-cover *
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

// export const Presentation = () => {
//   return (
//     <div className="bg-orange-500 flex justify-between items-center h-[100vh]  ">

//       <div className="bg-red-500">
//         <div className="bg-orange-200D mb-10">
//           <span className="text-3xl font-bold">Hola soy</span>
//           <h1 className="text-6xl font-bold mb-5 mt-3">Jorge Luciano</h1>
//           <h5 className="text-xl font-bold mb-4">Desarrollador Full Stack </h5>
//           <p className=" mb-4">Bachiller en Ing. Informática con soluciones innovadoras y eficaces</p>
//           <div className="flex space-x-3">
//             <img src="/icons/ln.png" alt="gihub" className="w-10 h-10"/>
//             <img src="/icons/github.png" alt="linkedin" className="bg-black w-10 h-10 rounded-full border-2 border-solid border-black" />
//           </div>
//         </div>

//         <div className="bg-green-500D space-x-5">
//           <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
//             Descargar CV
//           </button>
//           <a href="#about">
//             <button className="bg-[#0A66C2] hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out">
//               Sobre mí
//             </button>
//           </a>
//         </div>
//       </div>

//       {/* COntenedor relativo */}
//       <div className="bg-white relative">
//         <img 
//             className="absolute w-20 h-20 rounded-xl object-cover top-[-30px] left-[-50px]"
//             src="/icons/wordpress.png" 
//             alt="wordpress" 
//           />
//         <img 
//           className="w-[23rem] h-[28rem] rounded-3xl object-cover"
//           src="/icons/jorge.jpeg" 
//           alt="mi-foto" 
//         />
//       </div>

//     </div>
//   )
// }
