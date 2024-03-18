export const Studies = () => {
  return (
    <>
      <div className="py-5 w-full flex flex-col justify-center  mt-9">
        <span className="text-xl font-bold text-orange-500 mb-3 text-center">
          Formación académica
        </span>
        <hr className="border-t-1 border-gray-400 mb-8 mt-8 md:mt-4" />

        <div 
          className="bg-slate-500D flex flex-col gap-5 w-full  
          md:  md:flex-row md:gap-7 
        "
        >
          <div className="md:w-1/2 flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-1 mr-4 text-whi bg-white rounded-full dark:text-orange-100 ">
              <img className="w-10 h-10" src="/icons/unp.png" alt="unp" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Universidad Nacional de Piura
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Bach. Ing. Informática
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-1 mr-4  ">
              <img className="w-10 h-10" src="/icons/henry.png" alt="unp" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Soy Henry Bootcamp
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
