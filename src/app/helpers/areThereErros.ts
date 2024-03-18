/* Comprueba si existen errores */
export const areThereErrors = (objeto: Record<string, string>): boolean => {
    for (let propiedad in objeto) {
      if (objeto.hasOwnProperty(propiedad) && objeto[propiedad] !== "") {
        return false;
      }
    }
    return true; // Todas las propiedades tienen el valor ""
  };