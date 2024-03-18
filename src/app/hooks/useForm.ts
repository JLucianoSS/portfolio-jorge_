

import { useEffect, useState, ChangeEvent } from "react";

interface FormState {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

export const useForm = (initialForm: FormState = {}) => {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
    setErrors((prevErrors) => validate({ ...formState, [name]: value }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  useEffect(() => {
    setErrors(validate(formState));
  }, [formState]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    errors,
  };
};

/* VALIDACIONES PARA EL FORMULARIO */
const validate = (inputForm: FormState): Errors => {
  const errors: Errors = {};

  if ("nombre" in inputForm) {
    if (inputForm.nombre.trim() === "") {
      errors.nombre = "*Campo obligatorio";
    }
  }

  if ("correo" in inputForm) {
    const correoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputForm.correo.trim() === "") {
      errors.correo = "*Campo obligatorio";
    } else if (!correoPattern.test(inputForm.correo)) {
      errors.correo = "Correo no válido";
    }
  }

  if ("asunto" in inputForm) {
    if (inputForm.asunto.trim() === "") {
      errors.asunto = "*Campo obligatorio";
    }
  }

  if ("mensaje" in inputForm) {
    if (inputForm.mensaje.trim() === "") {
      errors.mensaje = "*Campo obligatorio";
    }
  }

  return errors;
};