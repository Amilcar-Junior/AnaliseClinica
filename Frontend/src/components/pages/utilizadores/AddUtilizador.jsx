import React, { Component } from "react";

import axios from "axios";

import { connect } from "react-redux";

import Select from "react-select";

import { createUtilizador } from "../../../conection/utilizadores/actions";
import { Redirect, Link } from "react-router-dom";

class AddUtilizador extends Component {
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
      username: "",
      email: "",
      password: "",
      telefone: "",
      name: "",
      confirmed: true,
      blocked: false,
      role: "",
      endereco: "",
      especialidade: "",
      id: "",
      selectOptionsRole: [],
      name_role: "",
    
   
      redirect: false,
      user: null,
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
    this.setState({ role: e.value, name_role: e.label });
  }


  componentDidMount() {
    this.getOptionsRole();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
    if (prevState.user !== this.state.user) {
      console.log(this.state.user);
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeEspecialidade(e) {
    this.setState({
      especialidade: e.target.value,
    });
    console.log(this.state.especialidade)
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeConfirmed(e) {
    this.setState({
      confirmed: e.target.value,
    });
  }

  onChangeBlocked(e) {
    this.setState({
      blocked: e.target.value,
    });
  }

  saveUtilizador() {
    const {
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
    } = this.state;

    this.props
      .createUtilizador(
        username,
        email,
        password,
        confirmed,
        blocked,
        [role],
        name,
        telefone,
        endereco,
        especialidade,
      )
      .then(() => {
        this.setState({
          username: "",
          email: "",
          password: "",
          telefone: "",
          name: "",
          confirmed: true,
          blocked: false,
          role: "",
          endereco: "",
          especialidade: "",
        });
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/add-utilizadores" />;
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
            <div className="col-lg-12">
              <form>
                <div className="submit-form">
                  <div>
                    <div className="ask-inputs">
                      <h5 style={{ color: "#0EC69A" }}>Adicionar Utilizador</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="username">
                            Nome utilizador <strong style={{ color: "red" }}>*</strong>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            name="username"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="email">
                            Email <strong style={{ color: "red" }}>*</strong>
                          </label>

                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            name="email"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="password">
                            Password <strong style={{ color: "red" }}>*</strong>
                          </label>

                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="email"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="especialidade">
                            Especialidade <strong style={{ color: "red" }}>*</strong>
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            id="especialidade"
                            
                            value={this.state.especialidade}
                            onChange={this.onChangeEspecialidade}
                            name="especialidade"
                          />
                        </div>

                        <div className="col-lg-12">
                          <label className="form-label" htmlFor="role">
                            Cargo <strong style={{ color: "red" }}>*</strong>
                          </label>

                          <Select
                            options={this.state.selectOptionsRole}
                            onChange={this.handleChangeRole.bind(this)}
                            id="role"
                            name="role"
                            required
                          />
                        </div>
                      </div>

                      <br />
                      <br />

                      <div className="col-lg-12">
                        <div className="center">
                          <Link
                            onClick={this.saveUtilizador}
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

export default connect(mapStateToProps, { createUtilizador })(
  AddUtilizador
);
