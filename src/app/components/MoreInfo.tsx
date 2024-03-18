

export const MoreInfo = () => {
    return (
      <div className="bg-gray-100D p-10 flex flex-col xl:w-1/2 rounded-b-xl">

        <div className="flex flex-col gap-5 lg:flex-row  md:justify-between w-full">

          <div className="container  md:mb-0 bg-white rounded-lg p-4">
            <div className="mb-2 ">
              <strong className="text-gray-600">Email:</strong>
            </div>
            <span className=" text-sm font-semibold text-gray-600">jorgelss912345@gmail.com</span>
          </div>

          <div className="container bg-white rounded-lg p-4">
            <div className="mb-2">
              <strong className="text-gray-600">Teléfono:</strong>
            </div>
            <span className="text-sm font-semibold text-gray-600">+51 916 325 058</span>
          </div>

        </div>
  
        <div className="mt-5 rounded-s-md">
          <iframe
            className="w-full h-50 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5638659004208!2d-77.05476768946787!3d-12.073500388116026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e3131a9e67%3A0x7d197b6a331aeac6!2sAv.%20Brasil%201419%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015084!5e0!3m2!1ses-419!2spe!4v1703464832734!5m2!1ses-419!2spe"
            style={{ border: "0" }}
            loading="lazy"
          />
        </div>
      </div>
    );
  };