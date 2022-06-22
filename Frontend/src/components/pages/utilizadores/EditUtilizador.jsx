import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";
import Select from "react-select";

import { updateUtilizador, retrieveUtilizadores } from "../../../conection/utilizadores/actions";

import { Redirect, Link } from "react-router-dom";

import UtilizadoresService from "../../../conection/utilizadores/utilizadoresService";

class EditUtilizador extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeEspecialidade = this.onChangeEspecialidade.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmed = this.onChangeConfirmed.bind(this);
    this.onChangeBlocked = this.onChangeBlocked.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);

    this.saveUtilizador = this.saveUtilizador.bind(this);

    this.state = {
      currentUtilizador: {
        username: "",

        email: "",

        password: "",

        confirmed: true,

        blocked: false,

        role: "",
        
        especialidade: "",

        selectOptionsRole: [],
        name: "",

      
      },

      redirect: false,
    };
  }
  async getOptionsRole() {

    const role = await axios.get(
      process.env.REACT_APP_SERVER_URL + "/users-permissions/roles"
    );
    const data = role.data;
    const options = data.roles.map((e) => ({
      value: e.id,
      label: e.name,
    }));

    this.setState({ selectOptionsRole: options });
  }

  handleChangeRole(e) {
    const role = e.value;
    const name = e.label;
    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,

          role: role,
        },
        name: name,
      };
    });
  }

  

  componentDidMount() {
    this.getUtilizador(window.location.pathname.replace("/edit-utilizador/", ""));
    this.getOptionsRole();
  }

  onChangeUsername(e) {
    const username = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,
          username: username,
        },
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,
          email: email,
        },
      };
    });
  }
  onChangeEspecialidade(e) {
    const especialidade = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,
          especialidade: especialidade,
        },
      };
    });
  }

  onChangePassword(e) {
    const password = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,
          password: password,
        },
      };
    });
  }

  onChangeConfirmed(e) {
    const confirmed = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,
          confirmed: confirmed,
        },
      };
    });
  }

  onChangeBlocked(e) {
    const blocked = e.target.value;
    this.setState(function (prevState) {
      return {
        currentUtilizador: {
          ...prevState.currentUtilizador,

          blocked: blocked,
        },
      };
    });
  }

  getUtilizador(id) {
    UtilizadoresService.get(id).then((response) => {
      this.setState({
        currentUtilizador: response.data,
      });
    });
  }

   saveUtilizador() {
    this.props
      .updateUtilizador(
        this.state.currentUtilizador.id,
        this.state.currentUtilizador
      )
      .then(() => {
        this.props.retrieveUtilizadores();
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    const { redirect, currentUtilizador } = this.state;

    if (redirect) {
      return <Redirect to="/list-utilizadores" />;
    }

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/list-utilizadores`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>
                </span>
              </div>
            </div>
            <div className="end" />
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form>
                <div className="submit-form">
                  <div>
                    <div className="ask-inputs">
                      <h5 style={{ color: "#0EC69A" }}>Atualizar Utilizador</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="username">
                            Nome utilizador{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={currentUtilizador.username}
                            onChange={this.onChangeUsername}
                            name="username"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="email">
                            Email{" "}
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={currentUtilizador.email}
                            onChange={this.onChangeEmail}
                            name="text"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="password">
                            Password{" "}
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={currentUtilizador.password}
                            onChange={this.onChangePassword}
                            name="text"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="especialidade">
                            Especialidade{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="especialidade"
                            
                            value={currentUtilizador.especialidade}
                            onChange={this.onChangeEspecialidade}
                            name="text"
                          />
                        </div>
                        
                        <div className="col-lg-6">
                          <label className="form-label" htmlFor="role">
                            Cargo ( o selecionado é{" "}
                            <strong>
                              {currentUtilizador.role &&
                                currentUtilizador.role.name}
                            </strong>
                            <strong>{this.state.name}</strong> )
                          </label>
                          <Select
                            options={this.state.selectOptionsRole}
                            defaultValue={currentUtilizador.role.name}
                            onChange={this.handleChangeRole}
                            id="role"
                            name="role"
                          />
                        </div>

                        <br />
                        <br />

                        <div className="col-lg-12">
                          <div className="center">
                            <br />
                            <br />
                            <Link
                              to={`${process.env.PUBLIC_URL}/list-utilizadores`}
                              onClick={this.saveUtilizador}
                              
                              className="btn-second"
                            >
                              Editar
                            </Link>
                          </div>
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

export default connect(mapStateToProps, {retrieveUtilizadores, updateUtilizador })(
  EditUtilizador
);
