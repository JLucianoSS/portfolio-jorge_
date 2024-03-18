

import { Form, MoreInfo } from "../components";

const ContactPage = () => {
  return (
    <div
      id="contact"
      className=" bg-orange-400D flex flex-col justify-center items-center py-10 px-6 md:px-20
      lg:px-40  
      xl:px-60 "
    >

      {/* CONTENIDO CONTACTO */}
      <div 
        className="bg-gray-200 shadow-xl flex flex-col justify-center items-center w-full rounded-3xl 
        xl:flex-row"
      >
        <Form />
        <MoreInfo />
      </div>


    </div>
  );
};


export default ContactPage;
