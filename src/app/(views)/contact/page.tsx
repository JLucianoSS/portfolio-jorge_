

import { ButtonMenu, Form, MoreInfo } from "../../components";

const ContactPage = () => {
  return (
    <div
      id="contact"
      className=" bg-white flex flex-col justify-center items-center pb-28 px-6 
      md:w-[70%] md:rounded-tr-3xl md:rounded-br-3xl
      xl:py-0
      "
    >

      {/* CONTENIDO CONTACTO */}
      <div 
        className="bg-white flex flex-col justify-center items-center w-full rounded-3xl 
        md:pt-[30rem] md:overflow-y-auto 
        xl:flex-row xl:pt-0
        "
        
      >
        <Form />
        <MoreInfo />
      </div>

      <ButtonMenu />

    </div>
  );
};


export default ContactPage;
