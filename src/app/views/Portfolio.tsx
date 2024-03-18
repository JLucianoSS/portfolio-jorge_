export const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-gray-100 p-8 flex flex-col justify-center items-center py-20 px-6 md:gap-7
      lg:px-40  
      xl:px-60"
    >
      <div className="flex flex-col items-center justify-center mb-14">
        <span className="text-xl text-orange-500 font-bold mb-3">Portafolio</span>
        <h1 className="text-4xl font-semibold mb-6">Mis proyectos</h1>
        <p  className="text-gray-500 text-center text-sm">Te presento lo que he logrado realizar hasta el día de hoy</p>
      </div>

      {/* Aquí las tarjetas */}
      <div className="grid grid-cols-1 gap-8 w-full">


        {/* Tarjeta 1 - izquierda*/}
        <div className="relative overflow-hidden bg-white w-full py-20 px-8 rounded-3xl shadow-lg md:px-14">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-50 rounded-3xl transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/icons/pi.png')`,
            }}
          ></div>
          <div className="relative z-10 text-white">
            <h2 className="text-sm text-red-500 font-bold mb-2">Youtube</h2>
            <h1 className="text-lg font-semibold mb-2">Pokemon App</h1>
            <p className="text-sm text-gray-400 mb-4 w-3/4 md:w-1/2">
              <b>Tecnoligías usadas:</b> React, Redux-toolkit, Sass, Bootstrap, Node.js, Express, y PostgreSQL
            </p>
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
              Ver Proyecto
            </button>
          </div>
        </div>

        {/* Tarjeta 2 - derecha*/}
        <div className="relative overflow-hidden bg-white w-full py-20 px-8 rounded-3xl shadow-lg md:px-14">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-50 rounded-3xl transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url('/icons/fe.png')`,
            }}
          ></div>
          <div className="relative z-10 text-white flex flex-col justify-center items-end w-full">
            <h2 className="text-sm text-red-500 font-bold mb-2">Youtube</h2>
            <h1 className="text-lg font-bold mb-2">Food Express App</h1>
            <p className="text-white text-sm mb-4 w-3/4 text-end md:w-1/2">
              <b>Tecnoligías usadas:</b> React, Redux, Bootstrap, Node.js, Express y PostgreSQL
            </p>
            <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
              Ver Proyecto
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};
