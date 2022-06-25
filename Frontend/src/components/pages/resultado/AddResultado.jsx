import React, { Component } from "react";
import { connect } from "react-redux";
import { createResultado } from "../../../conection/resultados/actions";
import { createLog } from "../../../conection/logs/actions";
import { retrieveProfile } from "../../../conection/profile/actions";
import { Redirect, Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import moment from "moment";

class AddResultado extends Component {
  constructor(props) {
    super(props);

    this.onChangehematologia_rdw_cv =
      this.onChangehematologia_rdw_cv.bind(this);
    this.onChangehematologia_eritrocitos =
      this.onChangehematologia_eritrocitos.bind(this);
    this.onChangehematologia_hemoglobina =
      this.onChangehematologia_hemoglobina.bind(this);
    this.onChangehematologia_hematocrito =
      this.onChangehematologia_hematocrito.bind(this);
    this.onChangehematologia_vgm = this.onChangehematologia_vgm.bind(this);
    this.onChangehematologia_hgm = this.onChangehematologia_hgm.bind(this);
    this.onChangehematologia_chgm = this.onChangehematologia_chgm.bind(this);
    this.onChangehematologia_paquetas =
      this.onChangehematologia_paquetas.bind(this);
    this.onChangehematologia_leucocitos =
      this.onChangehematologia_leucocitos.bind(this);
    this.onChangehematologia_neutrofilos =
      this.onChangehematologia_neutrofilos.bind(this);
    this.onChangehematologia_eosinofilos =
      this.onChangehematologia_eosinofilos.bind(this);
    this.onChangehematologia_basofilos =
      this.onChangehematologia_basofilos.bind(this);
    this.onChangehematologia_linfocitos =
      this.onChangehematologia_linfocitos.bind(this);
    this.onChangehematologia_monocitos =
      this.onChangehematologia_monocitos.bind(this);
    this.onChangehematologia_bandas =
      this.onChangehematologia_bandas.bind(this);
    this.onChangehematologia_a_globulos_v =
      this.onChangehematologia_a_globulos_v.bind(this);
    this.onChangehematologia_a_hemoglobina =
      this.onChangehematologia_a_hemoglobina.bind(this);
    this.onChangehematologia_a_hematocrito =
      this.onChangehematologia_a_hematocrito.bind(this);
    this.onChangehematologia_a_vgm = this.onChangehematologia_a_vgm.bind(this);
    this.onChangehematologia_a_hgm = this.onChangehematologia_a_hgm.bind(this);
    this.onChangehematologia_a_chgm =
      this.onChangehematologia_a_chgm.bind(this);
    this.onChangehematologia_a_globulos_b =
      this.onChangehematologia_a_globulos_b.bind(this);
    this.onChangehematologia_a_neutrofilos =
      this.onChangehematologia_a_neutrofilos.bind(this);
    this.onChangehematologia_a_eosinofilos =
      this.onChangehematologia_a_eosinofilos.bind(this);
    this.onChangehematologia_a_basofilos =
      this.onChangehematologia_a_basofilos.bind(this);
    this.onChangehematologia_a_linfocitos =
      this.onChangehematologia_a_linfocitos.bind(this);
    this.onChangehematologia_a_monocitos =
      this.onChangehematologia_a_monocitos.bind(this);
    this.onChangehematologia_a_bandas =
      this.onChangehematologia_a_bandas.bind(this);
    this.onChangehematologia_a_paquetas =
      this.onChangehematologia_a_paquetas.bind(this);
    this.onChangehematologia_b_tp = this.onChangehematologia_b_tp.bind(this);
    this.onChangehematologia_b_inr = this.onChangehematologia_b_inr.bind(this);
    this.onChangehematologia_b_pesq =
      this.onChangehematologia_b_pesq.bind(this);
    this.onChangebioquimica_i_glicose =
      this.onChangebioquimica_i_glicose.bind(this);
    this.onChangebioquimica_i_ureia =
      this.onChangebioquimica_i_ureia.bind(this);
    this.onChangebioquimica_i_acido_u =
      this.onChangebioquimica_i_acido_u.bind(this);
    this.onChangebioquimica_i_creatinina =
      this.onChangebioquimica_i_creatinina.bind(this);
    this.onChangebioquimica_i_got = this.onChangebioquimica_i_got.bind(this);
    this.onChangebioquimica_i_gpt = this.onChangebioquimica_i_gpt.bind(this);
    this.onChangebioquimica_ii_ldh = this.onChangebioquimica_ii_ldh.bind(this);
    this.onChangebioquimica_ii_cpk = this.onChangebioquimica_ii_cpk.bind(this);
    this.onChangebioquimica_ii_ck_mb =
      this.onChangebioquimica_ii_ck_mb.bind(this);
    this.onChangebioquimica_ii_troponina_i =
      this.onChangebioquimica_ii_troponina_i.bind(this);
    this.onChangebioquimica_iii_sodio =
      this.onChangebioquimica_iii_sodio.bind(this);
    this.onChangebioquimica_iii_potassio =
      this.onChangebioquimica_iii_potassio.bind(this);
    this.onChangeimunoserologia_vdrl =
      this.onChangeimunoserologia_vdrl.bind(this);
    this.onChangeimunoserologia_widal =
      this.onChangeimunoserologia_widal.bind(this);
    this.onChangeimunoserologia_a_pcr =
      this.onChangeimunoserologia_a_pcr.bind(this);
    this.onChangeurina_ii_glicosuria =
      this.onChangeurina_ii_glicosuria.bind(this);
    this.onChangeurina_ii_proteinuria =
      this.onChangeurina_ii_proteinuria.bind(this);
    this.onChangeurina_ii_cetonuria =
      this.onChangeurina_ii_cetonuria.bind(this);
    this.onChangeurina_ii_sangue = this.onChangeurina_ii_sangue.bind(this);
    this.onChangeurina_ii_nitrito = this.onChangeurina_ii_nitrito.bind(this);
    this.onChangeurina_ii_ph = this.onChangeurina_ii_ph.bind(this);
    this.onChangeurina_ii_densidade =
      this.onChangeurina_ii_densidade.bind(this);
    this.onChangeurina_ii_celulas = this.onChangeurina_ii_celulas.bind(this);
    this.onChangeurina_ii_leucocitos =
      this.onChangeurina_ii_leucocitos.bind(this);
    this.onChangeurina_ii_eritrocitos =
      this.onChangeurina_ii_eritrocitos.bind(this);
    this.onChangeobservacao = this.onChangeobservacao.bind(this);
    this.onChangedata = this.onChangedata.bind(this);
    this.onChangeRecolha = this.onChangeRecolha.bind(this);

    this.saveResultado = this.saveResultado.bind(this);
    this.saveLog = this.saveLog.bind(this);

    this.state = {
      hematologia_rdw_cv: "0",
      hematologia_eritrocitos: "0",
      hematologia_hemoglobina: "0",
      hematologia_hematocrito: "0",
      hematologia_vgm: "0",
      hematologia_hgm: "0",
      hematologia_chgm: "0",
      hematologia_paquetas: "0",
      hematologia_leucocitos: "0",
      hematologia_neutrofilos: "0",
      hematologia_eosinofilos: "0",
      hematologia_basofilos: "0",
      hematologia_linfocitos: "0",
      hematologia_monocitos: "0",
      hematologia_bandas: "0",
      hematologia_a_globulos_v: "0",
      hematologia_a_hemoglobina: "0",
      hematologia_a_hematocrito: "0",
      hematologia_a_vgm: "0",
      hematologia_a_hgm: "0",
      hematologia_a_chgm: "0",
      hematologia_a_globulos_b: "0",
      hematologia_a_neutrofilos: "0",
      hematologia_a_eosinofilos: "0",
      hematologia_a_basofilos: "0",
      hematologia_a_linfocitos: "0",
      hematologia_a_monocitos: "0",
      hematologia_a_bandas: "0",
      hematologia_a_paquetas: "0",
      hematologia_b_tp: "0",
      hematologia_b_inr: "0",
      hematologia_b_pesq: "0",
      bioquimica_i_glicose: "0",
      bioquimica_i_ureia: "0",
      bioquimica_i_acido_u: "0",
      bioquimica_i_creatinina: "0",
      bioquimica_i_got: "0",
      bioquimica_i_gpt: "0",
      bioquimica_ii_ldh: "0",
      bioquimica_ii_cpk: "0",
      bioquimica_ii_ck_mb: "0",
      bioquimica_ii_troponina_i: "0",
      bioquimica_iii_sodio: "0",
      bioquimica_iii_potassio: "0",
      imunoserologia_vdrl: "",
      imunoserologia_widal: "",
      imunoserologia_a_pcr: "0",
      urina_ii_glicosuria: "0",
      urina_ii_proteinuria: "0",
      urina_ii_cetonuria: "0",
      urina_ii_sangue: "0",
      urina_ii_nitrito: "0",
      urina_ii_ph: "0",
      urina_ii_densidade: "0",
      urina_ii_celulas: "0",
      urina_ii_leucocitos: "0",
      urina_ii_eritrocitos: "0",
      observacao: "",
      data: "",
      paciente: "",
      pacientes: "",
      recolha: "",

      hematologia: false,
      heamatologia_a: false,
      hematologia_b: false,
      bioquimica_i: false,
      bioquimica_ii: false,
      bioquimica_iii: false,
      imunoserologia: false,
      urina_ii: false,
      imunoserologia_a: false,

      selectOptionsRecolha: [],
      id_recolha: "",

      paciente_nome: "",
      paciente_endereco: "",
      paciente_sexo: "",
      paciente_telefone: "",
      paciente_data_nascimento: "",

      redirect: false,
      user: null,
    };
  }

  async getOptionsRecolha() {
    const recolha = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/recolhas"
    )

    const data = recolha.data;

    const options = data.filter((item) => item.resultado == null).map((e) => ({
      value: e.id,
      label: e.id,
      paciente: e.paciente,
      hematologia: e.hematologia,
      heamatologia_a: e.heamatologia_a,
      hematologia_b: e.hematologia_b,
      bioquimica_i: e.bioquimica_i,
      bioquimica_ii: e.bioquimica_ii,
      bioquimica_iii: e.bioquimica_iii,
      imunoserologia: e.imunoserologia,
      urina_ii: e.urina_ii,
      imunoserologia_a: e.imunoserologia_a,
    }));

    this.setState({ selectOptionsRecolha: options });
  }

  onChangeRecolha(e) {
    console.log(e.value);
    this.setState({
      recolha: e.value,
      id_recolha: e.label,
      pacientes: e.paciente,
      paciente: e.paciente.id,
      hematologia: e.hematologia,
      heamatologia_a: e.heamatologia_a,
      hematologia_b: e.hematologia_b,
      bioquimica_i: e.bioquimica_i,
      bioquimica_ii: e.bioquimica_ii,
      bioquimica_iii: e.bioquimica_iii,
      imunoserologia: e.imunoserologia,
      urina_ii: e.urina_ii,
      imunoserologia_a: e.imunoserologia_a,
    });
    console.log(e);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.props.retrieveProfile();
    this.getOptionsRecolha();
  }

  onChangehematologia_rdw_cv(e) {
    this.setState({
      hematologia_rdw_cv: e.target.value,
    });
  }
  onChangehematologia_eritrocitos(e) {
    this.setState({
      hematologia_eritrocitos: e.target.value,
    });
  }
  onChangehematologia_hemoglobina(e) {
    this.setState({
      hematologia_hemoglobina: e.target.value,
    });
  }
  onChangehematologia_hematocrito(e) {
    this.setState({
      hematologia_hematocrito: e.target.value,
    });
  }
  onChangehematologia_vgm(e) {
    this.setState({
      hematologia_vgm: e.target.value,
    });
  }
  onChangehematologia_hgm(e) {
    this.setState({
      hematologia_hgm: e.target.value,
    });
  }
  onChangehematologia_chgm(e) {
    this.setState({
      hematologia_chgm: e.target.value,
    });
  }
  onChangehematologia_paquetas(e) {
    this.setState({
      hematologia_paquetas: e.target.value,
    });
  }
  onChangehematologia_leucocitos(e) {
    this.setState({
      hematologia_leucocitos: e.target.value,
    });
  }
  onChangehematologia_neutrofilos(e) {
    this.setState({
      hematologia_neutrofilos: e.target.value,
    });
  }
  onChangehematologia_eosinofilos(e) {
    this.setState({
      hematologia_eosinofilos: e.target.value,
    });
  }
  onChangehematologia_basofilos(e) {
    this.setState({
      hematologia_basofilos: e.target.value,
    });
  }
  onChangehematologia_linfocitos(e) {
    this.setState({
      hematologia_linfocitos: e.target.value,
    });
  }
  onChangehematologia_monocitos(e) {
    this.setState({
      hematologia_monocitos: e.target.value,
    });
  }
  onChangehematologia_bandas(e) {
    this.setState({
      hematologia_bandas: e.target.value,
    });
  }
  onChangehematologia_a_globulos_v(e) {
    this.setState({
      hematologia_a_globulos_v: e.target.value,
    });
  }
  onChangehematologia_a_hemoglobina(e) {
    this.setState({
      hematologia_a_hemoglobina: e.target.value,
    });
  }
  onChangehematologia_a_hematocrito(e) {
    this.setState({
      hematologia_a_hematocrito: e.target.value,
    });
  }
  onChangehematologia_a_vgm(e) {
    this.setState({
      hematologia_a_vgm: e.target.value,
    });
  }
  onChangehematologia_a_hgm(e) {
    this.setState({
      hematologia_a_hgm: e.target.value,
    });
  }
  onChangehematologia_a_chgm(e) {
    this.setState({
      hematologia_a_chgm: e.target.value,
    });
  }
  onChangehematologia_a_globulos_b(e) {
    this.setState({
      hematologia_a_globulos_b: e.target.value,
    });
  }
  onChangehematologia_a_neutrofilos(e) {
    this.setState({
      hematologia_a_neutrofilos: e.target.value,
    });
  }
  onChangehematologia_a_eosinofilos(e) {
    this.setState({
      hematologia_a_eosinofilos: e.target.value,
    });
  }
  onChangehematologia_a_basofilos(e) {
    this.setState({
      hematologia_a_basofilos: e.target.value,
    });
  }
  onChangehematologia_a_linfocitos(e) {
    this.setState({
      hematologia_a_linfocitos: e.target.value,
    });
  }
  onChangehematologia_a_monocitos(e) {
    this.setState({
      hematologia_a_monocitos: e.target.value,
    });
  }
  onChangehematologia_a_bandas(e) {
    this.setState({
      hematologia_a_bandas: e.target.value,
    });
  }
  onChangehematologia_a_paquetas(e) {
    this.setState({
      hematologia_a_paquetas: e.target.value,
    });
  }
  onChangehematologia_b_tp(e) {
    this.setState({
      hematologia_b_tp: e.target.value,
    });
  }
  onChangehematologia_b_inr(e) {
    this.setState({
      hematologia_b_inr: e.target.value,
    });
  }
  onChangehematologia_b_pesq(e) {
    this.setState({
      hematologia_b_pesq: e.target.value,
    });
  }
  onChangebioquimica_i_glicose(e) {
    this.setState({
      bioquimica_i_glicose: e.target.value,
    });
  }
  onChangebioquimica_i_ureia(e) {
    this.setState({
      bioquimica_i_ureia: e.target.value,
    });
  }
  onChangebioquimica_i_acido_u(e) {
    this.setState({
      bioquimica_i_acido_u: e.target.value,
    });
  }
  onChangebioquimica_i_creatinina(e) {
    this.setState({
      bioquimica_i_creatinina: e.target.value,
    });
  }
  onChangebioquimica_i_got(e) {
    this.setState({
      bioquimica_i_got: e.target.value,
    });
  }
  onChangebioquimica_i_gpt(e) {
    this.setState({
      bioquimica_i_gpt: e.target.value,
    });
  }
  onChangebioquimica_ii_ldh(e) {
    this.setState({
      bioquimica_ii_ldh: e.target.value,
    });
  }
  onChangebioquimica_ii_cpk(e) {
    this.setState({
      bioquimica_ii_cpk: e.target.value,
    });
  }
  onChangebioquimica_ii_ck_mb(e) {
    this.setState({
      bioquimica_ii_ck_mb: e.target.value,
    });
  }
  onChangebioquimica_ii_troponina_i(e) {
    this.setState({
      bioquimica_ii_troponina_i: e.target.value,
    });
  }
  onChangebioquimica_iii_sodio(e) {
    this.setState({
      bioquimica_iii_sodio: e.target.value,
    });
  }
  onChangebioquimica_iii_potassio(e) {
    this.setState({
      bioquimica_iii_potassio: e.target.value,
    });
  }
  onChangeimunoserologia_vdrl(e) {
    this.setState({
      imunoserologia_vdrl: e.target.value,
    });
  }
  onChangeimunoserologia_widal(e) {
    this.setState({
      imunoserologia_widal: e.target.value,
    });
  }
  onChangeimunoserologia_a_pcr(e) {
    this.setState({
      imunoserologia_a_pcr: e.target.value,
    });
  }
  onChangeurina_ii_glicosuria(e) {
    this.setState({
      urina_ii_glicosuria: e.target.value,
    });
  }
  onChangeurina_ii_proteinuria(e) {
    this.setState({
      urina_ii_proteinuria: e.target.value,
    });
  }
  onChangeurina_ii_cetonuria(e) {
    this.setState({
      urina_ii_cetonuria: e.target.value,
    });
  }
  onChangeurina_ii_sangue(e) {
    this.setState({
      urina_ii_sangue: e.target.value,
    });
  }
  onChangeurina_ii_nitrito(e) {
    this.setState({
      urina_ii_nitrito: e.target.value,
    });
  }
  onChangeurina_ii_ph(e) {
    this.setState({
      urina_ii_ph: e.target.value,
    });
  }
  onChangeurina_ii_densidade(e) {
    this.setState({
      urina_ii_densidade: e.target.value,
    });
  }
  onChangeurina_ii_celulas(e) {
    this.setState({
      urina_ii_celulas: e.target.value,
    });
  }
  onChangeurina_ii_leucocitos(e) {
    this.setState({
      urina_ii_leucocitos: e.target.value,
    });
  }
  onChangeurina_ii_eritrocitos(e) {
    this.setState({
      urina_ii_eritrocitos: e.target.value,
    });
  }
  onChangeobservacao(e) {
    this.setState({
      observacao: e.target.value,
    });
  }
  onChangedata(e) {
    this.setState({
      data: e.target.value,
    });
  }

  async saveResultado() {
    const {
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
      data,
      paciente,
      recolha,
    } = this.state;
    console.log(this.state);

    this.props
      .createResultado(
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
        data,
        [paciente],
        [recolha]
      )
      .then(() => {
        this.saveLog();
        this.setState({
          hematologia_rdw_cv: "0",
          hematologia_eritrocitos: "0",
          hematologia_hemoglobina: "0",
          hematologia_hematocrito: "0",
          hematologia_vgm: "0",
          hematologia_hgm: "0",
          hematologia_chgm: "0",
          hematologia_paquetas: "0",
          hematologia_leucocitos: "0",
          hematologia_neutrofilos: "0",
          hematologia_eosinofilos: "0",
          hematologia_basofilos: "0",
          hematologia_linfocitos: "0",
          hematologia_monocitos: "0",
          hematologia_bandas: "0",
          hematologia_a_globulos_v: "0",
          hematologia_a_hemoglobina: "0",
          hematologia_a_hematocrito: "0",
          hematologia_a_vgm: "0",
          hematologia_a_hgm: "0",
          hematologia_a_chgm: "0",
          hematologia_a_globulos_b: "0",
          hematologia_a_neutrofilos: "0",
          hematologia_a_eosinofilos: "0",
          hematologia_a_basofilos: "0",
          hematologia_a_linfocitos: "0",
          hematologia_a_monocitos: "0",
          hematologia_a_bandas: "0",
          hematologia_a_paquetas: "0",
          hematologia_b_tp: "0",
          hematologia_b_inr: "0",
          hematologia_b_pesq: "0",
          bioquimica_i_glicose: "0",
          bioquimica_i_ureia: "0",
          bioquimica_i_acido_u: "0",
          bioquimica_i_creatinina: "0",
          bioquimica_i_got: "0",
          bioquimica_i_gpt: "0",
          bioquimica_ii_ldh: "0",
          bioquimica_ii_cpk: "0",
          bioquimica_ii_ck_mb: "0",
          bioquimica_ii_troponina_i: "0",
          bioquimica_iii_sodio: "0",
          bioquimica_iii_potassio: "0",
          imunoserologia_vdrl: "",
          imunoserologia_widal: "",
          imunoserologia_a_pcr: "0",
          urina_ii_glicosuria: "0",
          urina_ii_proteinuria: "0",
          urina_ii_cetonuria: "0",
          urina_ii_sangue: "0",
          urina_ii_nitrito: "0",
          urina_ii_ph: "0",
          urina_ii_densidade: "0",
          urina_ii_celulas: "0",
          urina_ii_leucocitos: "0",
          urina_ii_eritrocitos: "0",
          observacao: "",
          data: "",
          paciente: "",
          pacientes: "",
          recolha: "",

          id_recolha: "",
          id_paciente: "",

          // type: false,

          /* redirect: true, */
        });
      })
      .catch((err) => console.log(err.response));
  }

  async saveLog() {
    const data = new Date();
    //+1 dia porque o strapi remove 1 dia bug da verção do strapi
    data.setDate(data.getDate() + 1);
    const tipo = "adicionar resultado";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/list-resultado" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-resultado`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="end" />
              <form>
                <div className="submit-form">
                  <div className="ask-inputs">
                    <div className="row">
                      <h5 style={{ color: "#0EC69A" }}>Adicionar Resultado</h5>

                      <div className="col-lg-12">
                        <h6>
                          Recolha <strong style={{ color: "red" }}>*</strong>
                        </h6>
                        <Select
                          options={this.state.selectOptionsRecolha}
                          onChange={this.onChangeRecolha}
                        />
                      </div>

                      <div className="end" />
                      <div className="col-lg-9">
                        <h6>Nome Paciente</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            this.state.pacientes && this.state.pacientes.name
                          }
                          disabled
                        />
                      </div>
                      {/* <div className="col-lg-9">
                        <h6>Idade</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={moment().diff(
                            this.state.pacientes && this.state.pacientes.data_nascimento,
                            "years"
                          )}
                          disabled
                          
                        />
                      </div> */}
                      <div className="col-lg-3">
                        <h6>Sexo</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            this.state.pacientes && this.state.pacientes.sexo
                          }
                          disabled
                        />
                      </div>
                      <div className="col-lg-9">
                        <h6>Residência</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            this.state.pacientes &&
                            this.state.pacientes.endereco
                          }
                          disabled
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6>Contacto</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={
                            this.state.pacientes &&
                            this.state.pacientes.telefone
                          }
                          disabled
                        />
                      </div>
                      <div className="col-lg-9">
                        <h6>Observacão</h6>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.observacao}
                          onChange={this.onChangeobservacao}
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6>
                          Data <strong style={{ color: "red" }}>*</strong>
                        </h6>
                        <input
                          type="datetime-local"
                          className="form-control"
                          value={this.state.data}
                          onChange={this.onChangedata}
                        />
                      </div>

                      {this.state.hematologia ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Hematologia</strong></h6>
                          <div className="col-lg-3">
                            <h6>hematologia_rdw_cv</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_rdw_cv}
                              onChange={this.onChangehematologia_rdw_cv}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_eritrocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_eritrocitos}
                              onChange={this.onChangehematologia_eritrocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_hemoglobina</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_hemoglobina}
                              onChange={this.onChangehematologia_hemoglobina}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_hematocrito</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_hematocrito}
                              onChange={this.onChangehematologia_hematocrito}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_vgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_vgm}
                              onChange={this.onChangehematologia_vgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_hgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_hgm}
                              onChange={this.onChangehematologia_hgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_chgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_chgm}
                              onChange={this.onChangehematologia_chgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_paquetas</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_paquetas}
                              onChange={this.onChangehematologia_paquetas}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_leucocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_leucocitos}
                              onChange={this.onChangehematologia_leucocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_neutrofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_neutrofilos}
                              onChange={this.onChangehematologia_neutrofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_eosinofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_eosinofilos}
                              onChange={this.onChangehematologia_eosinofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_basofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_basofilos}
                              onChange={this.onChangehematologia_basofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_linfocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_linfocitos}
                              onChange={this.onChangehematologia_linfocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_monocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_monocitos}
                              onChange={this.onChangehematologia_monocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_bandas</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_bandas}
                              onChange={this.onChangehematologia_bandas}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {this.state.heamatologia_a ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Hematologia A</strong></h6>
                          <div className="col-lg-3">
                            <h6>hematologia_a_globulos_v</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_globulos_v}
                              onChange={this.onChangehematologia_a_globulos_v}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_hemoglobina</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_hemoglobina}
                              onChange={this.onChangehematologia_a_hemoglobina}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_hematocrito</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_hematocrito}
                              onChange={this.onChangehematologia_a_hematocrito}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_vgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_vgm}
                              onChange={this.onChangehematologia_a_vgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_hgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_hgm}
                              onChange={this.onChangehematologia_a_hgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_chgm</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_chgm}
                              onChange={this.onChangehematologia_a_chgm}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_globulos_b</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_globulos_b}
                              onChange={this.onChangehematologia_a_globulos_b}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_neutrofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_neutrofilos}
                              onChange={this.onChangehematologia_a_neutrofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_eosinofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_eosinofilos}
                              onChange={this.onChangehematologia_a_eosinofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_basofilos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_basofilos}
                              onChange={this.onChangehematologia_a_basofilos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_linfocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_linfocitos}
                              onChange={this.onChangehematologia_a_linfocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_monocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_monocitos}
                              onChange={this.onChangehematologia_a_monocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_bandas</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_bandas}
                              onChange={this.onChangehematologia_a_bandas}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_a_paquetas</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_a_paquetas}
                              onChange={this.onChangehematologia_a_paquetas}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.hematologia_b ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Hematologia B</strong></h6>
                          <div className="col-lg-3">
                            <h6>hematologia_b_tp</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_b_tp}
                              onChange={this.onChangehematologia_b_tp}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_b_inr</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_b_inr}
                              onChange={this.onChangehematologia_b_inr}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>hematologia_b_pesq</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.hematologia_b_pesq}
                              onChange={this.onChangehematologia_b_pesq}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.bioquimica_i ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Bioquimica i</strong></h6>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_glicose</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_glicose}
                              onChange={this.onChangebioquimica_i_glicose}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_ureia</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_ureia}
                              onChange={this.onChangebioquimica_i_ureia}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_acido_u</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_acido_u}
                              onChange={this.onChangebioquimica_i_acido_u}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_creatinina</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_creatinina}
                              onChange={this.onChangebioquimica_i_creatinina}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_got</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_got}
                              onChange={this.onChangebioquimica_i_got}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_i_gpt</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_i_gpt}
                              onChange={this.onChangebioquimica_i_gpt}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.bioquimica_ii ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Bioquimica ii</strong></h6>
                          <div className="col-lg-3">
                            <h6>bioquimica_ii_ldh</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_ii_ldh}
                              onChange={this.onChangebioquimica_ii_ldh}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_ii_cpk</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_ii_cpk}
                              onChange={this.onChangebioquimica_ii_cpk}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_ii_ck_mb</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_ii_ck_mb}
                              onChange={this.onChangebioquimica_ii_ck_mb}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_ii_troponina_i</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_ii_troponina_i}
                              onChange={this.onChangebioquimica_ii_troponina_i}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.bioquimica_iii ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Bioquimica iii</strong></h6>
                          <div className="col-lg-3">
                            <h6>bioquimica_iii_sodio</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_iii_sodio}
                              onChange={this.onChangebioquimica_iii_sodio}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>bioquimica_iii_potassio</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.bioquimica_iii_potassio}
                              onChange={this.onChangebioquimica_iii_potassio}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.imunoserologia ? (
                        <>
                        <h6 style={{ color: "red" }}><strong>Imunoserologia</strong></h6>
                          <div className="col-lg-3">
                            <h6>imunoserologia_vdrl</h6>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.imunoserologia_vdrl}
                              onChange={this.onChangeimunoserologia_vdrl}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>imunoserologia_widal</h6>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.imunoserologia_widal}
                              onChange={this.onChangeimunoserologia_widal}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {this.state.imunoserologia_a ? (
                        <>
                          <h6 style={{ color: "red" }}><strong>Imunoserologia A</strong></h6>
                          <div className="col-lg-3">
                            <h6>imunoserologia_a_pcr</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.imunoserologia_a_pcr}
                              onChange={this.onChangeimunoserologia_a_pcr}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {this.state.urina_ii ? (
                        <>
                          <h6 style={{ color: "red" }}><strong>Urina II</strong></h6>
                          <div className="col-lg-3">
                            <h6>urina_ii_glicosuria</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_glicosuria}
                              onChange={this.onChangeurina_ii_glicosuria}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_proteinuria</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_proteinuria}
                              onChange={this.onChangeurina_ii_proteinuria}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_cetonuria</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_cetonuria}
                              onChange={this.onChangeurina_ii_cetonuria}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_sangue</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_sangue}
                              onChange={this.onChangeurina_ii_sangue}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_nitrito</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_nitrito}
                              onChange={this.onChangeurina_ii_nitrito}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_ph</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_ph}
                              onChange={this.onChangeurina_ii_ph}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_densidade</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_densidade}
                              onChange={this.onChangeurina_ii_densidade}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_celulas</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_celulas}
                              onChange={this.onChangeurina_ii_celulas}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_leucocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_leucocitos}
                              onChange={this.onChangeurina_ii_leucocitos}
                            />
                          </div>
                          <div className="col-lg-3">
                            <h6>urina_ii_eritrocitos</h6>
                            <input
                              type="number"
                              className="form-control"
                              value={this.state.urina_ii_eritrocitos}
                              onChange={this.onChangeurina_ii_eritrocitos}
                            />
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      <div className="col-lg-12">
                        <div className="center">
                          <Link
                            onClick={this.saveResultado}
                            className="btn-second"
                          >
                            Adicionar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="end" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, {
  createResultado,
  createLog,
  retrieveProfile,
})(AddResultado);
