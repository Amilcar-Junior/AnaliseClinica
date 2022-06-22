import {
  CREATE_RESULTADO,
  RETRIEVE_RESULTADOS,
  UPDATE_RESULTADO,
  DELETE_RESULTADO,
} from "./actionTypes";

import { toast } from "react-toastify";
import ResultadosService from "./resultadosService";

export const createResultado =
  (
    hematologia_rdw_cv,
    hematologia_eritrocitos,
    hematologia_hemoglobina,
    hematologia_hematocrito,
    hematologia_vgm,
    hematologia_hgm,
    hematologia_chgm,
    hematologia_paquetas,
    hematologia_leucocitos,
    hematologia_neutrofilos,
    hematologia_eosinofilos,
    hematologia_basofilos,
    hematologia_linfocitos,
    hematologia_monocitos,
    hematologia_bandas,
    hematologia_a_globulos_v,
    hematologia_a_hemoglobina,
    hematologia_a_hematocrito,
    hematologia_a_vgm,
    hematologia_a_hgm,
    hematologia_a_chgm,
    hematologia_a_globulos_b,
    hematologia_a_neutrofilos,
    hematologia_a_eosinofilos,
    hematologia_a_basofilos,
    hematologia_a_linfocitos,
    hematologia_a_monocitos,
    hematologia_a_bandas,
    hematologia_a_paquetas,
    hematologia_b_tp,
    hematologia_b_inr,
    hematologia_b_pesq,
    bioquimica_i_glicose,
    bioquimica_i_ureia,
    bioquimica_i_acido_u,
    bioquimica_i_creatinina,
    bioquimica_i_got,
    bioquimica_i_gpt,
    bioquimica_ii_ldh,
    bioquimica_ii_cpk,
    bioquimica_ii_ck_mb,
    bioquimica_ii_troponina_i,
    bioquimica_iii_sodio,
    bioquimica_iii_potassio,
    imunoserologia_vdrl,
    imunoserologia_widal,
    imunoserologia_a_pcr,
    urina_ii_glicosuria,
    urina_ii_proteinuria,
    urina_ii_cetonuria,
    urina_ii_sangue,
    urina_ii_nitrito,
    urina_ii_ph,
    urina_ii_densidade,
    urina_ii_celulas,
    urina_ii_leucocitos,
    urina_ii_eritrocitos,
    observacao,
    paciente
  ) =>
  async (dispatch) => {
    try {
      const res = await ResultadosService.create({
        hematologia_rdw_cv,
        hematologia_eritrocitos,
        hematologia_hemoglobina,
        hematologia_hematocrito,
        hematologia_vgm,
        hematologia_hgm,
        hematologia_chgm,
        hematologia_paquetas,
        hematologia_leucocitos,
        hematologia_neutrofilos,
        hematologia_eosinofilos,
        hematologia_basofilos,
        hematologia_linfocitos,
        hematologia_monocitos,
        hematologia_bandas,
        hematologia_a_globulos_v,
        hematologia_a_hemoglobina,
        hematologia_a_hematocrito,
        hematologia_a_vgm,
        hematologia_a_hgm,
        hematologia_a_chgm,
        hematologia_a_globulos_b,
        hematologia_a_neutrofilos,
        hematologia_a_eosinofilos,
        hematologia_a_basofilos,
        hematologia_a_linfocitos,
        hematologia_a_monocitos,
        hematologia_a_bandas,
        hematologia_a_paquetas,
        hematologia_b_tp,
        hematologia_b_inr,
        hematologia_b_pesq,
        bioquimica_i_glicose,
        bioquimica_i_ureia,
        bioquimica_i_acido_u,
        bioquimica_i_creatinina,
        bioquimica_i_got,
        bioquimica_i_gpt,
        bioquimica_ii_ldh,
        bioquimica_ii_cpk,
        bioquimica_ii_ck_mb,
        bioquimica_ii_troponina_i,
        bioquimica_iii_sodio,
        bioquimica_iii_potassio,
        imunoserologia_vdrl,
        imunoserologia_widal,
        imunoserologia_a_pcr,
        urina_ii_glicosuria,
        urina_ii_proteinuria,
        urina_ii_cetonuria,
        urina_ii_sangue,
        urina_ii_nitrito,
        urina_ii_ph,
        urina_ii_densidade,
        urina_ii_celulas,
        urina_ii_leucocitos,
        urina_ii_eritrocitos,
        observacao,
        paciente,
      });

      dispatch({
        type: CREATE_RESULTADO,

        payload: res.data,
      });

      toast.success("Resultado adicionado com sucesso!");
      return Promise.resolve(res.data);
      alert("a");
    } catch (err) {
      toast.error("Resultado não adicionado!");
      return Promise.reject(err);
      alert("a");
    }
  };

export const retrieveResultados = () => async (dispatch) => {
  try {
    const res = await ResultadosService.getAll();

    dispatch({
      type: RETRIEVE_RESULTADOS,

      payload: res.data,
    });
  } catch (err) {
    toast.error("Resultado não encontrado!");
    console.log(err);
  }
};

export const updateResultado = (id, data) => async (dispatch) => {
  try {
    const res = await ResultadosService.update(id, data);

    dispatch({
      type: UPDATE_RESULTADO,

      payload: res.data,
    });

    toast.success("Resultado foi alterado com sucesso!");
    return Promise.resolve(res.data);
  } catch (err) {
    toast.error("Resultado não foi alterado!");
    return Promise.reject(err);
  }
};

export const deleteResultado = (id) => async (dispatch) => {
  try {
    await ResultadosService.delete(id);

    dispatch({
      type: DELETE_RESULTADO,

      payload: { id },
    });

    toast.success("Resultado Deletado com sucesso!");
  } catch (err) {
    toast.error("Resultado não foi Deletado!");
    console.log(err);
  }
};
