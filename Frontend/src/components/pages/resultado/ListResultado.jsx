import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import {
  retrieveResultados,
  deleteResultado,
} from "../../../conection/resultados/actions";
import { retrieveProfile } from "../../../conection/profile/actions";

import { ExportCSV } from "../../ExportEx/ExportCSV";

import moment from "moment";
import PaginatedItems from "../../pagination/Paginate";

class ListResultado extends Component {
  constructor(props) {
    super(props);
    this.handleSetItens = this.handleSetItens.bind(this);

    this.state = {
      currentItens: null,
      user: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  handleSetItens(itens) {
    this.setState({ currentItens: itens });
  }

  componentDidMount() {
    this.props.retrieveResultados();
    this.props.retrieveProfile();
  }

  removeResultado = (id) => {
    this.props.deleteResultado(id).then(() => {
      this.props.retrieveResultados();

      // this.handleModalOpen();
    });
  };

  render() {
    const { currentItens } = this.state;
    const { resultados, user } = this.props;
    console.log(user);
    console.log(resultados);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>
                </span>
              </div>
            </div>
            <div className="end" />
            <div className="col-lg-12">
              <h3 style={{ color: "#0EC69A" }}>Lista de Resultados</h3>

              <div className="row mt-4">
                {user && (user.role.id === 3 || user.role.id === 4) && (
                  <div className="col-lg-4">
                    <Link to="/add-resultado" className="btn btn-success">
                      <i class="fas fa-plus" /> Adicionar
                    </Link>
                  </div>
                )}
                <div className="col-lg-4" />
                <div className="col-lg-4 float-right">
                  <ExportCSV
                    csvData={this.props.resultados}
                    fileName="Resultado"
                  />
                </div>
              </div>

              <div className="end" />
              {resultados.length ? (
                <PaginatedItems
                  setCurrentItems={this.handleSetItens}
                  itemsPerPage={8}
                  items={resultados}
                >
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>ID</th>

                          <th>Data</th>

                          <th>Recolha ID</th>

                          <th>Nome Paciente</th>
                          <th>Observação</th>

                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentItens &&
                          currentItens.map(
                            (
                              { id, observacao, data, paciente, recolha },
                              i
                            ) => (
                              <tr key={i}>
                                <td>{i + 1}</td>

                                <td>{id}</td>

                                <td>{moment(data).format("DD-MM-YYYY")}</td>
                                <td>{recolha && recolha.id}</td>
                                <td>{paciente && paciente.name}</td>
                                <td>{observacao}</td>

                                <td className="table-action-col">
                                  <div className="row g-1">
                                    <div className="col-xs-6 col-md-4 text-center">
                                      <Link
                                        to={`/ver-resultado/${id}`}
                                        className="btn btn-success btn-sm"
                                      >
                                        <i className="fas fa-plus"></i> Ver
                                      </Link>
                                    </div>
                                    {user &&
                                      (user.role.id === 3 ||
                                        user.role.id === 4) && (
                                        <>
                                          <div className="col-xs-12 col-md-4 text-center">
                                            <Link
                                              className="btn btn-danger btn-sm me-2"
                                              onClick={() =>
                                                this.removeResultado(id)
                                              }
                                            >
                                              <i className="fas fa-trash" />{" "}
                                              Eliminar
                                            </Link>
                                          </div>

                                          <div className="col-xs-6 col-md-4 text-center">
                                            <Link
                                              to={`/add-resultado/`}
                                              className="btn btn-primary btn-sm"
                                            >
                                              <i className="fas fa-edit" />{" "}
                                              Editar
                                            </Link>
                                          </div>
                                          {/* <div className="col-xs-6 col-md-4 text-center">
                                      <Link
                                        to={`/edit-resultado/${id}`}
                                        className="btn btn-primary btn-sm"
                                      >
                                        <i className="fas fa-edit" /> Editar
                                      </Link>
                                    </div> */}
                                        </>
                                      )}
                                  </div>
                                </td>
                              </tr>
                            )
                          )}
                      </tbody>
                    </table>
                  </div>
                </PaginatedItems>
              ) : (
                <h5>Nenhum resultado foi encontrado!</h5>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultados: state.resultados,
    user: state.users,
  };
};

export default connect(mapStateToProps, {
  retrieveResultados,
  deleteResultado,
  retrieveProfile,
})(ListResultado);
