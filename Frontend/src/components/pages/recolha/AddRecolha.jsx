import React, { Component } from "react";

import { connect } from "react-redux";

import { createRecolha } from "../../../conection/recolhas/actions";
import { createLog } from "../../../conection/logs/actions";
import { retrieveProfile } from "../../../conection/profile/actions";
import moment from "moment";
import { Redirect, Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

class AddRecolha extends Component {
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
      data: new Date(),
      assinatura: "",
      outro: "",
      paciente: "",
      dados_clinicos: "",

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
    console.log(e.value);
    this.setState({
      paciente: e.value,
      nome_paciente: e.label,
      endereco_paciente: e.endereco,
      sexo_paciente: e.sexo,
      telefone_paciente: e.telefone,
      data_nascimento_paciente: e.data_nascimento,
    });
    console.log(e);
  }

  async getOptionsTipo() {
    const options = [
      { label: "URGENTE", value: "URGENTE" },
      { label: "AMBULATÓRIO", value: "AMBULATÓRIO" },
    ];

    this.setState({ selectOptionsTipo: options });
  }

  onChangeTipo(e) {
    console.log(e.value);
    this.setState({ tipo: e.label, name_tipo: e.value });
    console.log(e);
  }

  onChangeData(e) {
    this.setState({
      data: e.target.value,
    });
  }
  onChangeDados_clinicos(e) {
    this.setState({
      dados_clinicos: e.target.value,
    });
  }
  onChangeAssinatura(e) {
    this.setState({
      assinatura: e.target.value,
    });
  }
  onChangeOutro(e) {
    this.setState({
      outro: e.target.value,
    });
  }

  onChangeHematologia(e) {
    this.setState({
      hematologia: !this.state.hematologia,
    });
  }
  onChangeHeamatologia_a(e) {
    this.setState({
      heamatologia_a: !this.state.heamatologia_a,
    });
  }
  onChangeHematologia_b(e) {
    this.setState({
      hematologia_b: !this.state.hematologia_b,
    });
  }

  onChangeBioquimica_i(e) {
    this.setState({
      bioquimica_i: !this.state.bioquimica_i,
    });
  }
  onChangeBioquimica_ii(e) {
    this.setState({
      bioquimica_ii: !this.state.bioquimica_ii,
    });
  }
  onChangeBioquimica_iii(e) {
    this.setState({
      bioquimica_iii: !this.state.bioquimica_iii,
    });
  }
  onChangeImunoserologia(e) {
    this.setState({
      imunoserologia: !this.state.imunoserologia,
    });
  }
  onChangeUrina_ii(e) {
    this.setState({
      urina_ii: !this.state.urina_ii,
    });
  }
  onChangeImunoserologia_a(e) {
    this.setState({
      imunoserologia_a: !this.state.imunoserologia_a,
    });
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
  }

  async saveRecolha() {
    const {
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
      paciente,
      dados_clinicos,
    } = this.state;
    console.log(this.state);

    this.props
      .createRecolha(
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
        [paciente],
        dados_clinicos
      )
      .then(() => {
        this.saveLog();
        this.setState({
          hematologia: "",
          heamatologia_a: "",
          hematologia_b: "",
          bioquimica_i: "",
          bioquimica_ii: "",
          bioquimica_iii: "",
          imunoserologia: "",
          urina_ii: "",
          imunoserologia_a: "",
          tipo: "",
          data: new Date(),
          assinatura: "",
          outro: "",
          paciente: "",
          dados_clinicos: "",
          nome_paciente: "",
          endereco_paciente: "",
          sexo_paciente: "",
          telefone_paciente: "",
          data_nascimento_paciente: "",

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
    const tipo = "adicionar recolha";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  render() {
    const { redirect } = this.state;
    const pacientes = this.state.pacientes;
    console.log(pacientes);
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
            <div className="col-lg-12">
              <div className="end" />
              <form>
                <div className="submit-form">
                  <div className="ask-inputs">
                    <div className="row">
                      <h5 style={{ color: "#0EC69A" }}>Adicionar Recolha</h5>

                      <div className="col-lg-6">
                        <h6 htmlFor="paciente">
                          Paciente <strong style={{ color: "red" }}>*</strong>
                        </h6>
                        <Select
                          options={this.state.selectOptionsPaciente}
                          onChange={this.onChangePaciente}
                          id="paciente"
                          name="paciente"
                          required
                        />
                      </div>

                      <div className="col-lg-3">
                        <h6 htmlFor="nome">Idade</h6>
                        <input
                          type="number"
                          className="form-control"
                          id="name"
                          value={moment().diff(
                            this.state.data_nascimento_paciente,
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
                          value={this.state.sexo_paciente}
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
                          value={this.state.endereco_paciente}
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
                          value={this.state.telefone_paciente}
                          name="telefone"
                          disabled
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6 htmlFor="tipo">
                          Tipo <strong style={{ color: "red" }}>*</strong>
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
                          value={this.state.dados_clinicos}
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
                        <input
                          type="checkbox"
                          className="form-control"
                          id="hematologia"
                          required
                          value={this.state.hematologia}
                          onChange={this.onChangeHematologia}
                          name="hematologia"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Hematologia A</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="heamatologia_a"
                          required
                          value={this.state.heamatologia_a}
                          onChange={this.onChangeHeamatologia_a}
                          name="heamatologia_a"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Hematologia B</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="hematologia_b"
                          required
                          value={this.state.hematologia_b}
                          onChange={this.onChangeHematologia_b}
                          name="hematologia_b"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica i</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="bioquimica_i"
                          required
                          value={this.state.bioquimica_i}
                          onChange={this.onChangeBioquimica_i}
                          name="bioquimica_i"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica II</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="bioquimica_ii"
                          required
                          value={this.state.bioquimica_ii}
                          onChange={this.onChangeBioquimica_ii}
                          name="bioquimica_ii"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Bioquimica III</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="bioquimica_iii"
                          required
                          value={this.state.bioquimica_iii}
                          onChange={this.onChangeBioquimica_iii}
                          name="bioquimica_iii"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Imunoserologia</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="imunoserologia"
                          required
                          value={this.state.imunoserologia}
                          onChange={this.onChangeImunoserologia}
                          name="imunoserologia"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Urina II</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="urina_ii"
                          required
                          value={this.state.urina_ii}
                          onChange={this.onChangeUrina_ii}
                          name="urina_ii"
                        />
                      </div>
                      <div className="col-lg-2">
                        <h6 htmlFor="type">Imunoserologia A</h6>
                        <input
                          type="checkbox"
                          className="form-control"
                          id="imunoserologia_a"
                          required
                          value={this.state.imunoserologia_a}
                          onChange={this.onChangeImunoserologia_a}
                          name="imunoserologia_a"
                        />
                      </div>

                      <div className="col-lg-12">
                        <h6 htmlFor="nome">Outros</h6>
                        <input
                          type="text"
                          className="form-control"
                          id="outro"
                          required
                          value={this.state.outro}
                          onChange={this.onChangeOutro}
                          name="outro"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="nome">
                          Assinatura <strong style={{ color: "red" }}>*</strong>
                        </h6>
                        <input
                          type="text"
                          className="form-control"
                          id="assinatura"
                          required
                          value={this.state.assinatura}
                          onChange={this.onChangeAssinatura}
                          name="assinatura"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="data">
                          Data: :{" "}
                          <strong>
                            {moment(this.state.data).format("DD-MM-YYYY")}
                          </strong>
                        </h6>
                        <input
                          type="datetime-local"
                          className="form-control"
                          id="data"
                          required
                          value={this.state.data}
                          onChange={this.onChangeData}
                          name="data"
                          disabled
                        />
                      </div>

                      <div className="col-lg-12">
                        <div className="center">
                          <Link
                            onClick={this.saveRecolha}
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
  createRecolha,
  createLog,
  retrieveProfile,
})(AddRecolha);
