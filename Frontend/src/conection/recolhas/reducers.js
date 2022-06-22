import {

    CREATE_RECOLHA,
   
    RETRIEVE_RECOLHAS,
   
    UPDATE_RECOLHA,
   
    DELETE_RECOLHA,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function recolhaReducer(recolhas = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_RECOLHA:
   
        return [...recolhas, payload];
   
      case RETRIEVE_RECOLHAS:
   
        return payload;
   
      case UPDATE_RECOLHA:
   
        return recolhas.map((recolha) => {
   
          if (recolha.id === payload.id) {
   
            return {
   
              ...recolha,
   
              ...payload,
   
            };
   
          } else {
   
            return recolha;
   
          }
   
        });
   
      case DELETE_RECOLHA:
   
        return recolhas.filter(({ id }) => id !== payload.id);
   
      default:
   
        return recolhas;
   
    }
   
   }
   
   export default recolhaReducer;