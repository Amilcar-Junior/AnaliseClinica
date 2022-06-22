import {

    CREATE_RESULTADO,
   
    RETRIEVE_RESULTADOS,
   
    UPDATE_RESULTADO,
   
    DELETE_RESULTADO,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function resultadoReducer(resultados = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_RESULTADO:
   
        return [...resultados, payload];
   
      case RETRIEVE_RESULTADOS:
   
        return payload;
   
      case UPDATE_RESULTADO:
   
        return resultados.map((resultado) => {
   
          if (resultado.id === payload.id) {
   
            return {
   
              ...resultado,
   
              ...payload,
   
            };
   
          } else {
   
            return resultado;
   
          }
   
        });
   
      case DELETE_RESULTADO:
   
        return resultados.filter(({ id }) => id !== payload.id);
   
      default:
   
        return resultados;
   
    }
   
   }
   
   export default resultadoReducer;