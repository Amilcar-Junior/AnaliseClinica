import {


  RETRIEVE_PROFILE,

  UPDATE_PROFILE,


} from "./actionTypes";

import ProfileService from "./profileService";
import { toast } from "react-toastify";


export const addUser = (user) => dispatch => {
  dispatch(
    {
      type: RETRIEVE_PROFILE,
      payload: user,
    }
  )
};

export const retrieveProfile = () => async (dispatch) => {

  try {

    const res = await ProfileService.get();
    dispatch({

      type: RETRIEVE_PROFILE,
      payload: res.data,

    });

  } catch (err) {

/*     toast.error('As suas informações não foram encontradas!');
 */
    console.log(err);

  }

};

export const updateProfile = (id, data) => async (dispatch) => {

  try {

    const res = await ProfileService.update(id, data);
    console.log(res.data)
    dispatch({

      type: UPDATE_PROFILE,

      payload: res.data,

    });

/*     toast.success('As suas informações foram alteradas com sucesso!')
 */    return Promise.resolve(res.data);

  } catch (err) {
/*     toast.error('As suas informações não foram alteradas!')
 */
    return Promise.reject(err);

  }

};
