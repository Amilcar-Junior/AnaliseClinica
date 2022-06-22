import React, { Component } from "react";

import { connect } from "react-redux";

import { createPaciente } from "../../../conection/pacientes/actions";
import { createLog } from "../../../conection/logs/actions";
import { retrieveProfile } from "../../../conection/profile/actions";
import Select from "react-select";

import { Redirect, Link } from "react-router-dom";

class AddPaciente extends Component {
  constructor(props) {
    super(props);

    this.onChangeBi = this.onChangeBi.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeData_nascimento = this.onChangeData_nascimento.bind(this);
    this.onChangeEndereco = this.onChangeEndereco.bind(this);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeTelefone = this.onChangeTelefone.bind(this);
    this.savePaciente = this.savePaciente.bind(this);
    this.saveLog = this.saveLog.bind(this);

    this.state = {
      bi: "",
      name: "",
      data_nascimento: "",
      endereco: "",
      sexo: "",
      telefone: "0",

      selectOptionsSexo: [],
      name_sexo: "",

      redirect: false,
      user: null,
    };
  }

  async getOptionsSexo() {
    const options = [
      { label: "M", value: "M" },
      { label: "F", value: "F" },
      { label: "Outro", value: "Outro" },
    ];

    this.setState({ selectOptionsSexo: options });
  }

  onChangeSexo(e) {
    console.log(e.value);
    this.setState({ sexo: e.label, name_sexo: e.value });
    console.log(e);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEndereco(e) {
    this.setState({
      endereco: e.target.value,
    });
  }
  onChangeData_nascimento(e) {
    this.setState({
      data_nascimento: e.target.value,
    });
  }
  onChangeTelefone(e) {
    this.setState({
      telefone: e.target.value,
    });
  }
  onChangeBi(e) {
    this.setState({
      bi: e.target.value,
    });
  }

  async savePaciente() {
    const { bi, name, data_nascimento, endereco, sexo, telefone, } = this.state;
    console.log(this.state);

    this.props
      .createPaciente(bi, name, data_nascimento, endereco, sexo, telefone,)
      .then(() => {
        this.saveLog();
        this.setState({
          bi: "",
      name: "",
      data_nascimento: "",
      endereco: "",
      sexo: "",
      telefone: "0",
      name_sexo: "",
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
    const tipo = "adicionar paciente";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.props.retrieveProfile();
    this.getOptionsSexo();
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/list-paciente" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="end" />
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-paciente`}>
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
                      <h5 style={{ color: "#0EC69A" }}>Adicionar Paciente</h5>

                      <div className="col-lg-3">
                        <h6 htmlFor="bi">
                          BI <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          maxlength="10"
                          type="text"
                          className="form-control"
                          id="bi"
                          required
                          value={this.state.bi}
                          onChange={this.onChangeBi}
                          name="bi"
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="nome">
                          Nome <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          maxlength="30"
                          type="text"
                          className="form-control"
                          id="name"
                          required
                          value={this.state.name}
                          onChange={this.onChangeName}
                          name="name"
                        />
                      </div>

                      <div className="col-lg-3">
                        <h6 htmlFor="data_nascimento">
                          Data Nascimento{" "}
                          <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          type="datetime-local"
                          className="form-control"
                          id="data_nascimento"
                          required
                          value={this.state.data_nascimento}
                          onChange={this.onChangeData_nascimento}
                          name="data_nascimento"
                        />
                      </div>
                      <div className="col-lg-3">
                        <label className="form-label" htmlFor="role">
                          Sexo <strong style={{ color: "red" }}>*</strong>
                        </label>

                        <Select
                          options={this.state.selectOptionsSexo}
                          onChange={this.onChangeSexo.bind(this)}
                          id="sexo"
                          name="sexo"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <h6 htmlFor="nome">
                          Endereço <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          maxlength="30"
                          type="text"
                          className="form-control"
                          id="endereco"
                          required
                          value={this.state.endereco}
                          onChange={this.onChangeEndereco}
                          name="endereco"
                        />
                      </div>
                      <div className="col-lg-3">
                        <h6 htmlFor="nome">
                          Telefone <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          maxlength="30"
                          type="number"
                          className="form-control"
                          id="telefone"
                          required
                          value={this.state.telefone}
                          onChange={this.onChangeTelefone}
                          name="telefone"
                        />
                      </div>
                      

                      <div className="col-lg-12">
                        <div className="center">
                          <Link onClick={this.savePaciente} className="btn-second">
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
  createPaciente,
  createLog,
  retrieveProfile,
})(AddPaciente);
