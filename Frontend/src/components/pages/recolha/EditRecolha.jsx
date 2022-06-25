import React, { Component } from "react";

import { connect } from "react-redux";

import { updateRecolha } from "../../../conection/recolhas/actions";
import { createLog } from "../../../conection/logs/actions";
import { retrieveProfile } from "../../../conection/profile/actions";

import { Redirect, Link } from "react-router-dom";

import RecolhasService from "../../../conection/recolhas/recolhasService";
import Select from "react-select";
import axios from "axios";
import moment from "moment";

class EditRecolha extends Component {
  constructor(props) {
    super(props);

    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeHematologia = this.onChangeHematologia.bind(this);
    this.onChangeHeamatologia_a = this.onChangeHeamatologia_a.bind(this);
    this.onChangeHematologia_b = this.onChangeHematologia_b.bind(this);
    this.onChangeBioquimica_i = this.onChangeBioquimica_i.bind(this);
    this.onChangeBioquimica_ii = this.onChangeBioquimica_ii.bind(this);
    this.onChangeBioquimica_iii = this.onChangeBioquimica_iii.bind(this);
    this.onChangeImunoserologia = this.onChangeImunoserologia.bind(this);
    this.onChangeUrina_ii = this.onChangeUrina_ii.bind(this);
    this.onChangeImunoserologia_a = this.onChangeImunoserologia_a.bind(this);
    this.onChangeAssinatura = this.onChangeAssinatura.bind(this);
    this.onChangeOutro = this.onChangeOutro.bind(this);
    this.onChangePaciente = this.onChangePaciente.bind(this);
    this.onChangeDados_clinicos = this.onChangeDados_clinicos.bind(this);

    this.saveRecolha = this.saveRecolha.bind(this);
    this.saveLog = this.saveLog.bind(this);

    this.state = {
      currentRecolha: {
        hematologia: false,
        heamatologia_a: false,
        hematologia_b: false,
        bioquimica_i: false,
        bioquimica_ii: false,
        bioquimica_iii: false,
        imunoserologia: false,
        urina_ii: false,
        imunoserologia_a: false,
        tipo: "",
        data: "",
        assinatura: "",
        outro: "",
        paciente: "",
        dados_clinicos: "",
      },
      selectOptionsTipo: [],
      name_tipo: "",

      selectOptionsPaciente: [],
      nome_paciente: "",
      endereco_paciente: "",
      sexo_paciente: "",
      telefone_paciente: "",
      data_nascimento_paciente: "",

      redirect: false,
      user: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.props.retrieveProfile();
    this.getOptionsPaciente();
    this.getOptionsTipo();
    this.getRecolha(window.location.pathname.replace("/edit-recolha/", ""));
  }

  async getOptionsPaciente() {
    const paciente = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/pacientes"
    );

    const data = paciente.data;

    const options = data.map((e) => ({
      value: e.id,
      label: e.name,
      endereco: e.endereco,
      sexo: e.sexo,
      telefone: e.telefone,
      data_nascimento: e.data_nascimento,
    }));

    this.setState({ selectOptionsPaciente: options });
  }
  onChangePaciente(e) {
    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          paciente: e.value,
        },
        nome_paciente: e.label,
        endereco_paciente: e.endereco,
        sexo_paciente: e.sexo,
        telefone_paciente: e.telefone,
        data_nascimento_paciente: e.data_nascimento,
      };
    });
  }

  async getOptionsTipo() {
    const options = [
      { label: "URGENTE", value: "URGENTE" },
      { label: "AMBULATÓRIO", value: "AMBULATÓRIO" },
    ];

    this.setState({ selectOptionsTipo: options });
  }
  onChangeTipo(e) {
    const tipo = e.value;
    const nome_tipo = e.label;
    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          tipo: tipo,
        },
        nome_tipo: nome_tipo,
      };
    });
  }
  onChangeData(e) {
    const data = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          data: data,
        },
      };
    });
  }
  onChangeDados_clinicos(e) {
    const dados_clinicos = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          dados_clinicos: dados_clinicos,
        },
      };
    });
  }
  onChangeAssinatura(e) {
    const assinatura = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          assinatura: assinatura,
        },
      };
    });
  }
  onChangeOutro(e) {
    const outro = e.target.value;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          outro: outro,
        },
      };
    });
  }

  onChangeHematologia(e) {
    const hematologia = !this.state.currentRecolha.hematologia;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          hematologia: hematologia,
        },
      };
    });
    console.log(this.state.currentRecolha.hematologia);
  }
  onChangeHeamatologia_a(e) {
    const heamatologia_a = !this.state.currentRecolha.heamatologia_a;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          heamatologia_a: heamatologia_a,
        },
      };
    });
    console.log(this.state.currentRecolha.heamatologia_a);
  }
  onChangeHematologia_b(e) {
    const hematologia_b = !this.state.currentRecolha.hematologia_b;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          hematologia_b: hematologia_b,
        },
      };
    });
    console.log(this.state.currentRecolha.hematologia_b);
  }
  onChangeBioquimica_i(e) {
    const bioquimica_i = !this.state.currentRecolha.bioquimica_i;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          bioquimica_i: bioquimica_i,
        },
      };
    });
    console.log(this.state.currentRecolha.bioquimica_i);
  }
  onChangeBioquimica_ii(e) {
    const bioquimica_ii = !this.state.currentRecolha.bioquimica_ii;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          bioquimica_ii: bioquimica_ii,
        },
      };
    });
    console.log(this.state.currentRecolha.bioquimica_ii);
  }
  onChangeBioquimica_iii(e) {
    const bioquimica_iii = !this.state.currentRecolha.bioquimica_iii;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          bioquimica_iii: bioquimica_iii,
        },
      };
    });
    console.log(this.state.currentRecolha.bioquimica_iii);
  }
  onChangeImunoserologia(e) {
    const imunoserologia = !this.state.currentRecolha.imunoserologia;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          imunoserologia: imunoserologia,
        },
      };
    });
    console.log(this.state.currentRecolha.imunoserologia);
  }
  onChangeUrina_ii(e) {
    const urina_ii = !this.state.currentRecolha.urina_ii;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          urina_ii: urina_ii,
        },
      };
    });
    console.log(this.state.currentRecolha.urina_ii);
  }
  onChangeImunoserologia_a(e) {
    const imunoserologia_a = !this.state.currentRecolha.imunoserologia_a;

    this.setState(function (prevState) {
      return {
        currentRecolha: {
          ...prevState.currentRecolha,

          imunoserologia_a: imunoserologia_a,
        },
      };
    });
    console.log(this.state.currentRecolha.imunoserologia_a);
  }

  getRecolha(id) {
    RecolhasService.get(id).then((response) => {
      this.setState({
        currentRecolha: response.data,
        id: response.data.id,
      });
    });
  }

  async saveRecolha() {
    this.props

      .updateRecolha(this.state.currentRecolha.id, this.state.currentRecolha)

      .then(() => {
        this.setState({
          redirect: true,
        });
      });
    this.saveLog();
    console.log(this.state.currentRecolha);
  }

  async saveLog() {
    const data = new Date();
    //+1 dia porque o strapi remove 1 dia bug da verção do strapi
    data.setDate(data.getDate() + 1);
    const tipo = "Atualizar recolha";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  render() {
    const { redirect, currentRecolha } = this.state;
    console.log(currentRecolha);
    if (redirect) {
      return <Redirect to="/list-recolha" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="end" />
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-recolha`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>
                </span>
              </div>
            </div>
            <div className="end" />
            <div className="col-lg-12">
              <form>
                <div className="submit-form">
                  <div className="ask-inputs">
                    <div className="row">
                      <h5 style={{ color: "#0EC69A" }}>
                        Editar Dados da Recolha
                      </h5>

                      <div className="col-lg-6">
                        <h6 htmlFor="paciente">
                          Paciente <strong style={{ color: "red" }}>*</strong>
                        </h6>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={currentRecolha.paciente.name}
                          name="name"
                          disabled
                        />
                      </div>

                      <div className="col-lg-3">
                        <h6 htmlFor="nome">Idade</h6>
                        <input
                          type="number"
                          className="form-control"
                          id="name"
                          value={moment().diff(
                            currentRecolha.paciente.data_nascimento,
                            "years"
                          )}
                          name="name"
                          disabled
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6 htmlFor="nome">Sexo</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="sexo"
                          value={currentRecolha.paciente.sexo}
                          name="sexo"
                          disabled
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="nome">Residência</h6>
                        <input
                          maxlength="30"
                          type="text"
                          className="form-control"
                          id="endereco"
                          value={currentRecolha.paciente.endereco}
                          name="endereco"
                          disabled
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6 htmlFor="nome">Contacto</h6>
                        <input
                          maxlength="30"
                          type="text"
                          className="form-control"
                          id="telefone"
                          value={currentRecolha.paciente.telefone}
                          name="telefone"
                          disabled
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6 htmlFor="tipo">
                          Tipo ( o selecionado é{" "}
                          <strong>
                            {currentRecolha.tipo ?? this.state.tipo}
                          </strong>{" "}
                          )
                        </h6>
                        <Select
                          options={this.state.selectOptionsTipo}
                          onChange={this.onChangeTipo}
                          id="tipo"
                          name="tipo"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <h6 htmlFor="nome">Dados Clinicos</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="dados_clinicos"
                          required
                          value={currentRecolha.dados_clinicos}
                          onChange={this.onChangeDados_clinicos}
                          name="dados_clinicos"
                        />
                      </div>

                      <h6 style={{ color: "#0EC69A" }}>
                        <strong>Análise a realizar:</strong>
                      </h6>
                      <br />
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Hematologia</h6>
                        {currentRecolha.hematologia ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="hematologia"
                            required
                            value={currentRecolha.hematologia}
                            onChange={this.onChangeHematologia}
                            name="hematologia"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="hematologia"
                            required
                            value={currentRecolha.hematologia}
                            onChange={this.onChangeHematologia}
                            name="hematologia"
                          />
                        )}
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Hematologia A</h6>
                        {currentRecolha.heamatologia_a ? (
                          
                          <input
                          type="checkbox"
                          checked="checked"
                          className="form-control"
                          id="heamatologia_a"
                          required
                          value={currentRecolha.heamatologia_a}
                          onChange={this.onChangeHeamatologia_a}
                          name="heamatologia_a"
                        />
                        ) : (
                            <input
                            type="checkbox"
                            className="form-control"
                            id="heamatologia_a"
                            required
                            value={currentRecolha.heamatologia_a}
                            onChange={this.onChangeHeamatologia_a}
                            name="heamatologia_a"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Hematologia B</h6>
                        {currentRecolha.hematologia_b ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="hematologia_b"
                            required
                            value={currentRecolha.hematologia_b}
                            onChange={this.onChangeHematologia_b}
                            name="hematologia_b"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="hematologia_b"
                            required
                            value={currentRecolha.hematologia_b}
                            onChange={this.onChangeHematologia_b}
                            name="hematologia_b"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica i</h6>
                        {currentRecolha.bioquimica_i ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="bioquimica_i"
                            required
                            value={currentRecolha.bioquimica_i}
                            onChange={this.onChangeBioquimica_i}
                            name="bioquimica_i"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="bioquimica_i"
                            required
                            value={currentRecolha.bioquimica_i}
                            onChange={this.onChangeBioquimica_i}
                            name="bioquimica_i"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica II</h6>
                        {currentRecolha.bioquimica_ii ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="bioquimica_ii"
                            required
                            value={currentRecolha.bioquimica_ii}
                            onChange={this.onChangeBioquimica_ii}
                            name="bioquimica_ii"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="bioquimica_ii"
                            required
                            value={currentRecolha.bioquimica_ii}
                            onChange={this.onChangeBioquimica_ii}
                            name="bioquimica_ii"
                          />
                        )}
                       
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica III</h6>
                        {currentRecolha.bioquimica_iii ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="bioquimica_iii"
                            required
                            value={currentRecolha.bioquimica_iii}
                            onChange={this.onChangeBioquimica_iii}
                            name="bioquimica_iii"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="bioquimica_iii"
                            required
                            value={currentRecolha.bioquimica_iii}
                            onChange={this.onChangeBioquimica_iii}
                            name="bioquimica_iii"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Imunoserologia</h6>
                        {currentRecolha.imunoserologia ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="imunoserologia"
                            required
                            value={currentRecolha.imunoserologia}
                            onChange={this.onChangeImunoserologia}
                            name="imunoserologia"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="imunoserologia"
                            required
                            value={currentRecolha.imunoserologia}
                            onChange={this.onChangeImunoserologia}
                            name="imunoserologia"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Urina II</h6>
                        {currentRecolha.urina_ii ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="urina_ii"
                            required
                            value={currentRecolha.urina_ii}
                            onChange={this.onChangeUrina_ii}
                            name="urina_ii"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="urina_ii"
                            required
                            value={currentRecolha.urina_ii}
                            onChange={this.onChangeUrina_ii}
                            name="urina_ii"
                          />
                        )}
                        
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Imunoserologia A</h6>
                        {currentRecolha.imunoserologia_a ? (
                          <input
                            type="checkbox"
                            className="form-control"
                            checked="checked"
                            id="imunoserologia_a"
                            required
                            value={currentRecolha.imunoserologia_a}
                            onChange={this.onChangeImunoserologia_a}
                            name="imunoserologia_a"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-control"
                            id="imunoserologia_a"
                            required
                            value={currentRecolha.imunoserologia_a}
                            onChange={this.onChangeImunoserologia_a}
                            name="imunoserologia_a"
                          />
                        )}
                        
                      </div>

                      <div className="col-lg-12">
                        <h6 htmlFor="nome">Outros</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="outro"
                          required
                          value={currentRecolha.outro}
                          onChange={this.onChangeOutro}
                          name="outro"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="nome">Assinatura</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="assinatura"
                          required
                          value={currentRecolha.assinatura}
                          onChange={this.onChangeAssinatura}
                          name="assinatura"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="data">
                          Data: :{" "}
                          <strong>
                            {moment(currentRecolha.data).format("DD-MM-YYYY")}
                          </strong>
                        </h6>
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="data"
                          required
                          value={currentRecolha.data}
                          onChange={this.onChangeData}
                          name="data"
                          disabled
                        />
                      </div>

                      <div className="col-lg-12">
                        <div className="center">
                          <Link
                            to={`${process.env.PUBLIC_URL}/list-recolha`}
                            onClick={this.saveRecolha}
                            className="btn-second"
                          >
                            Editar
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
  updateRecolha,
  createLog,
  retrieveProfile,
})(EditRecolha);
