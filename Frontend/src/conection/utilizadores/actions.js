import {

    CREATE_UTILIZADOR,
   
    RETRIEVE_UTILIZADORES,
   
    UPDATE_UTILIZADOR,
   
    DELETE_UTILIZADOR,
   
   } from "./actionTypes";
   
   import UtilizadoresService from "./utilizadoresService";
   import { toast } from "react-toastify";
   
   export const createUtilizador =
   
    (username, email, password, confirmed, blocked, role, name, telefone, endereco, especialidade, foto ) => async (dispatch) => {
   
      try {
   
        const res = await UtilizadoresService.create({
   
        username,
   
         email,
   
         password,

         confirmed,

         blocked,

         role,

         name,

         telefone,
         
         endereco,
        
         especialidade,
         foto,
   
        });
   
        dispatch({
   
          type: CREATE_UTILIZADOR,
   
          payload: res.data,
   
        });
   
/*         toast.success('Utilizador foi adicionado com sucesso!');
 */        return Promise.resolve(res.data);

      } catch (err) {
        
/*         toast.error('Utilizador não adicionado!')
 */
        return Promise.reject(err);

      }
   
    };
   
   export const retrieveUtilizadores = () => async (dispatch) => {
   
    try {
      const res = await UtilizadoresService.getAll();
   
      dispatch({
   
        type: RETRIEVE_UTILIZADORES,
   
        payload: res.data,
   
      });
   
    } catch (err) {

/*       toast.error('Utilizadores não encontrado!');
 */
      console.log(err);

    }
   
   };
   
   export const updateUtilizador = (id, data) => async (dispatch) => {
   
    try {
   
      const res = await UtilizadoresService.update(id, data);
   
      dispatch({
   
        type: UPDATE_UTILIZADOR,
   
        payload: data,
   
      });
   
/*       toast.success('Utilizador foi alterado com sucesso!')
 */    return Promise.resolve(res.data);

  } catch (err) {
/*     toast.error('Utilizador não foi alterado!')
 */
    return Promise.reject(err);

  }
   
   };
   
   export const deleteUtilizador = (id) => async (dispatch) => {
   
    try {
   
      await UtilizadoresService.delete(id);
   
      dispatch({
   
        type: DELETE_UTILIZADOR,
   
        payload: { id },
   
      });
   
/*       toast.success('Utilizador eliminado com sucesso!')
 */
    } catch (err) {
/*       toast.error('Utilizador não foi eliminado!')
 */  
      console.log(err);
  
    }
   
   };