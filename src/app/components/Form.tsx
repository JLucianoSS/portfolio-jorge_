"use client";
import { useForm } from "../hooks";
import { areThereErrors } from "../helpers";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import useDarModeStore from "../store/switchStore";

export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const isDarkMode = useDarModeStore((state) => state.isDarkMode);

  const { formState, onInputChange, onResetForm, errors } = useForm({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (areThereErrors(errors)) {
      try {
        // Mostrar el toast de carga mientras se procesa la promesa
        const promise = emailjs.sendForm(
          "service_n9vhm3n",
          "template_z8krgps",
          form.current!,
          "gJXE1l38bsv4rUp9i"
        );
        toast.promise(promise, {
          loading: "Enviando mensaje...",
          success: "¡El mensaje se ha enviado!",
          error: (error) => `Error al enviar el mensaje: ${error}`,
        });

        const result = await promise;
        console.log(result.text);
        onResetForm();
      } catch (error) {
        console.error(String(error));
      }
    }
  };

  return (
    <>
      <div className="bg-gray-100D flex flex-col items-center w-full p-10 xl:w-1/2 md:items-start ">

        <span className="text-[#BD34FE] text-xl font-bold mb-3">Contacto</span>
        <h1 className={`${ isDarkMode ? 'text-white': 'text-gray-700' } text-2xl font-semibold mb-8`}>Envíame un mensaje</h1>
        
        <form ref={form} onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formState.nombre}
            onChange={onInputChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.nombre && <p className="text-red-600 text-sm">{errors.nombre}</p>}
          <input
            type="email"
            placeholder="Correo"
            name="correo"
            value={formState.correo}
            onChange={onInputChange}
            className="w-full py-2 px-4 mt-5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.correo && <p className="text-red-600 text-sm">{errors.correo}</p>}
          <input
            type="text"
            placeholder="Asunto"
            name="asunto"
            value={formState.asunto}
            onChange={onInputChange}
            className="w-full py-2 px-4 mt-5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.asunto && <p className="text-red-600 text-sm">{errors.asunto}</p>}
          <textarea
            placeholder="Mensaje"
            name="mensaje"
            value={formState.mensaje}
            onChange={onInputChange}
            className="w-full py-8 px-4 mt-5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.mensaje && <p className="text-red-600 text-sm">{errors.mensaje}</p>}
          <button
            type="submit"
            disabled={!areThereErrors(errors)}
            className={`w-full py-2 px-4 rounded-md mt-5 text-white ${
              !areThereErrors(errors)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 text-gray-500"
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
      <Toaster />
    </>
  );
};
