import React, { Component } from "react";

import { connect } from "react-redux";

import { updatePaciente } from "../../../conection/pacientes/actions";
import { createLog } from "../../../conection/logs/actions";
import { retrieveProfile } from "../../../conection/profile/actions";
import Select from "react-select";

import { Redirect, Link } from "react-router-dom";

import PacientesService from "../../../conection/pacientes/pacientesService";

class EditPaciente extends Component {
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
      currentPaciente: {
        bi: "",
        name: "",
        data_nascimento: "",
        endereco: "",
        sexo: "",
        telefone: "0",

        
      },
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
    const sexo = e.value;
    const nome_sexo = e.label;
    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          sexo: sexo,
          
        },
        nome_sexo: nome_sexo,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.getPaciente(window.location.pathname.replace("/edit-paciente/", ""));
    this.props.retrieveProfile();
    this.getOptionsSexo();
  }

  onChangeBi(e) {
    const bi = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          bi: bi,
        },
      };
    });
  }
  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          name: name,
        },
      };
    });
  }
  onChangeData_nascimento(e) {
    const data_nascimento = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          data_nascimento: data_nascimento,
        },
      };
    });
  }

  onChangeEndereco(e) {
    const endereco = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          endereco: endereco,
        },
      };
    });
  }

  onChangeTelefone(e) {
    const telefone = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPaciente: {
          ...prevState.currentPaciente,

          telefone: telefone,
        },
      };
    });
  }

  getPaciente(id) {
    PacientesService.get(id).then((response) => {
      this.setState({
        currentPaciente: response.data,
        id: response.data.id,
      });
    });
  }

  async savePaciente() {
    this.props

      .updatePaciente(this.state.currentPaciente.id, this.state.currentPaciente)

      .then(() => {
        this.setState({
          redirect: true,
        });
      });
    this.saveLog();
    console.log(this.state.currentPaciente);
  }

  async saveLog() {
    const data = new Date();
    //+1 dia porque o strapi remove 1 dia bug da verção do strapi
    data.setDate(data.getDate() + 1);
    const tipo = "Atualizar paciente";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  render() {
    const { redirect, currentPaciente } = this.state;
    console.log(currentPaciente);
    if (redirect) {
      return <Redirect to="/list-paciente" />;
    }
    console.log(this.state.selectOptionsSexo)

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
            <div className="end" />
            <div className="col-lg-12">
              <form>
                <div className="submit-form">
                  <div className="ask-inputs">
                    <div className="row">
                      <h5 style={{ color: "#0EC69A" }}>
                        Editar Dados do Paciente
                      </h5>

                      <div className="col-lg-3">
                        <h6 htmlFor="bi">
                          BI <strong style={{ color: "red" }}>*</strong>
                        </h6>

                        <input
                          maxlength="30"
                          type="text"
                          className="form-control"
                          id="bi"
                          required
                          value={currentPaciente.bi}
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
                          value={currentPaciente.name}
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
                          value={currentPaciente.data_nascimento}
                          onChange={this.onChangeData_nascimento}
                          name="data_nascimento"
                        />
                      </div>
                      <div className="col-lg-3">
                        <label className="form-label" htmlFor="role">
                          Sexo ( o selecionado é{" "}
                          <strong>
                            {currentPaciente.sexo}
                          </strong>
                          <strong>{this.state.name_sexo}</strong> )
                        </label>

                        <Select
                          options={this.state.selectOptionsSexo}
                          onChange={this.onChangeSexo}
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
                          value={currentPaciente.endereco}
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
                          value={currentPaciente.telefone}
                          onChange={this.onChangeTelefone}
                          name="telefone"
                        />
                      </div>
                      

                      <div className="col-lg-12">
                        <div className="center">
                          <Link
                            to={`${process.env.PUBLIC_URL}/list-paciente`}
                            onClick={this.savePaciente}
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
  updatePaciente,
  createLog,
  retrieveProfile,
})(EditPaciente);
