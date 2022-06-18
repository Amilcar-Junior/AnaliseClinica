import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import {
  retrieveUtilizadores,
  deleteUtilizador,
} from "../../../conection/utilizadores/actions";
import PaginatedItems from "../../pagination/Paginate";
import { ExportCSV } from "../../ExportEx/ExportCSV";
import axios from "axios";

class UtilizadoresList extends Component {
  constructor(props) {
    super(props);
    this.handleSetItens = this.handleSetItens.bind(this);

    this.state = {
      user: null,
      currentItens: null,
      itemId: null,
    };
  }


  handleSetItens(itens) {
    this.setState({ currentItens: itens });
  }

  componentDidMount() {
    this.props.retrieveUtilizadores();
  }

  removeUtilizador = (id) => {
    this.props.deleteUtilizador(id).then(() => {
      this.props.retrieveUtilizadores();
    });
  };

  render() {
    const { currentItens } = this.state;
    const { utilizadores } = this.props;
    console.log(utilizadores)
    console.log(currentItens)
    return (
      <>
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
                              Primeiro Nome
                            </th>
                            <th scope="col" className="text-center">
                              Segundo Nome
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
                                  
                                },
                                i
                              ) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{username}</td>

                                  <td>{name}</td>

                                  <td>{last_name}</td>

                                  <td>{email}</td>

                                  <td>{telefone}</td>

                                  <td>{role && role.name}</td>

                                  

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
        </div>
        <div className="end" />
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    utilizadores: state.utilizadores,
  };
};

export default connect(mapStateToProps, {
  retrieveUtilizadores,
  deleteUtilizador,
})(UtilizadoresList);
