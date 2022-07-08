import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { createLog } from "../../../conection/logs/actions";

import {
  retrieveUtilizadores,
  deleteUtilizador,
} from "../../../conection/utilizadores/actions";
import { retrieveProfile } from "../../../conection/profile/actions";

import PaginatedItems from "../../pagination/Paginate";
import { ExportCSV } from "../../ExportEx/ExportCSV";
import axios from "axios";

class UtilizadoresList extends Component {
  constructor(props) {
    super(props);
    this.handleSetItens = this.handleSetItens.bind(this);
    this.saveLog = this.saveLog.bind(this);

    this.state = {
      user: null,
      currentItens: null,
      itemId: null,
    };
  }

  handleSetItens(itens) {
    this.setState({ currentItens: itens });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }
  componentDidMount() {
    this.props.retrieveUtilizadores();
    this.props.retrieveProfile();
  }

  removeUtilizador = (id) => {
    this.props.deleteUtilizador(id).then(() => {
      this.props.retrieveUtilizadores();
      this.saveLog()
    });
  };

  async saveLog() {
    const data = new Date();
    //+1 dia porque o strapi remove 1 dia bug da verção do strapi
    data.setDate(data.getDate() + 1);
    const tipo = "Eliminar utilizador";
    const user = this.state.user.id;
    console.log(this.state);

    this.props
      .createLog(data, tipo, user)
      .catch((err) => console.log(err.response));
  }

  render() {
    const { currentItens } = this.state;
    const { utilizadores, user } = this.props;
    console.log(utilizadores);
    console.log(currentItens);
    return (
      <>
      {user && user.role.id === 3 ? (
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/home-page-adm`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="end" />
              <h3 style={{ color: "#0EC69A" }}>Lista de Utilizadores</h3>
              <div className="row mt-4 mb-4 justify-content-between align-content-center">
                <div className="col-2">
                  <Link to="/add-utilizadores" className="btn btn-success">
                    <i class="fas fa-plus"></i> Adicionar
                  </Link>
                </div>
                <div className="col-md-4 center">
                  <ExportCSV
                    csvData={this.props.utilizadores}
                    fileName="Utilizadores"
                  />
                </div>
              </div>
              <div className="row">
                {utilizadores.length ? (
                  <PaginatedItems
                    setCurrentItems={this.handleSetItens}
                    itemsPerPage={8}
                    items={utilizadores}
                  >
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="text-center">
                              Username
                            </th>

                            <th scope="col" className="text-center">
                              Nome
                            </th>

                            <th scope="col" className="text-center">
                              email
                            </th>

                            <th scope="col" className="text-center">
                              Telefone
                            </th>

                            <th scope="col" className="text-center">
                              Cargo
                            </th>

                            <th scope="col" className="text-center">
                              Especialidade
                            </th>

                            <th className="text-center" colSpan="2" scope="col">
                              Ação
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {currentItens &&
                            currentItens.map(
                              (
                                {
                                  id,
                                  username,
                                  name,
                                  last_name,
                                  email,
                                  telefone,
                                  role,
                                  especialidade,
                                },
                                i
                              ) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{username}</td>

                                  <td>
                                    {name} {last_name}
                                  </td>

                                  <td>{email}</td>

                                  <td>{telefone}</td>

                                  <td>{role && role.name}</td>

                                  <td>{especialidade}</td>

                                  <td className="table-action-col">
                                    <div className="row g-1">
                                      <div className="col-xs-6 col-md-6 text-center">
                                        <Link
                                          to={`/edit-utilizador/${id}`}
                                          className="btn btn-primary btn-sm"
                                        >
                                          <i className="fas fa-edit"></i> Editar
                                        </Link>
                                      </div>
                                      <div className="col-xs-12 col-md-6 text-center">
                                        <Link
                                          className="btn btn-danger btn-sm me-2"
                                          onClick={() =>
                                            this.removeUtilizador(id)
                                          }
                                        >
                                          <i className="fas fa-trash"></i>{" "}
                                          Eliminar
                                        </Link>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                    <div className="end" />
                  </PaginatedItems>
                ) : (
                  <h5>Nenhum utilizador foi encontrado!</h5>
                )}

                <div className="end" />
              </div>
            </div>
          </div>
          <div className="end" />
        </div>
        
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 250,
                    paddingTop:250,
                  }}
                >
                  Voçê Não Tem Permissão para acessar esta pagina
                </h1>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    utilizadores: state.utilizadores,
    user: state.users,
  };
};

export default connect(mapStateToProps, {
  retrieveUtilizadores,
  deleteUtilizador, retrieveProfile,createLog
})(UtilizadoresList);
