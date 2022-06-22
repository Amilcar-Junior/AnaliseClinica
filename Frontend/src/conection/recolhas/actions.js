import {
  CREATE_RECOLHA,
  RETRIEVE_RECOLHAS,
  UPDATE_RECOLHA,
  DELETE_RECOLHA,
} from "./actionTypes";

import { toast } from "react-toastify";
import RecolhasService from "./recolhasService";

export const createRecolha =
  (
    hematologia,
    heamatologia_a,
    hematologia_b,
    bioquimica_i,
    bioquimica_ii,
    bioquimica_iii,
    imunoserologia,
    urina_ii,
    imunoserologia_a,
    tipo,
    data,
    assinatura,
    outro,
    paciente
  ) =>
  async (dispatch) => {
    try {
      const res = await RecolhasService.create({
        hematologia,
        heamatologia_a,
        hematologia_b,
        bioquimica_i,
        bioquimica_ii,
        bioquimica_iii,
        imunoserologia,
        urina_ii,
        imunoserologia_a,
        tipo,
        data,
        assinatura,
        outro,
        paciente
      });

      dispatch({
        type: CREATE_RECOLHA,

        payload: res.data,
      });

      toast.success("Recolha adicionado com sucesso!");
      return Promise.resolve(res.data);
      alert("a");
    } catch (err) {
      toast.error("Recolha não adicionado!");
      return Promise.reject(err);
      alert("a");
    }
  };

export const retrieveRecolhas = () => async (dispatch) => {
  try {
    const res = await RecolhasService.getAll();

    dispatch({
      type: RETRIEVE_RECOLHAS,

      payload: res.data,
    });
  } catch (err) {
    toast.error("Recolha não encontrado!");
    console.log(err);
  }
};

export const updateRecolha = (id, data) => async (dispatch) => {
  try {
    const res = await RecolhasService.update(id, data);

    dispatch({
      type: UPDATE_RECOLHA,

      payload: res.data,
    });

    toast.success("Recolha foi alterado com sucesso!");
    return Promise.resolve(res.data);
  } catch (err) {
    toast.error("Recolha não foi alterado!");
    return Promise.reject(err);
  }
};

export const deleteRecolha = (id) => async (dispatch) => {
  try {
    await RecolhasService.delete(id);

    dispatch({
      type: DELETE_RECOLHA,

      payload: { id },
    });

    toast.success("Recolha Deletado com sucesso!");
  } catch (err) {
    toast.error("Recolha não foi Deletado!");
    console.log(err);
  }
};
