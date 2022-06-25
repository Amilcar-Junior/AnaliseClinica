import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import {
  retrieveRecolhas,
  deleteRecolha,
} from "../../../conection/recolhas/actions";

import { ExportCSV } from "../../ExportEx/ExportCSV";

import moment from "moment";

import PaginatedItems from "../../pagination/Paginate";

class ListRecolha extends Component {
  constructor(props) {
    super(props);
    this.handleSetItens = this.handleSetItens.bind(this);

    this.state = {
      currentItens: null,
    };
  }

  handleSetItens(itens) {
    this.setState({ currentItens: itens });
  }

  componentDidMount() {
    this.props.retrieveRecolhas();
  }

  removeRecolha = (id) => {
    this.props.deleteRecolha(id).then(() => {
      this.props.retrieveRecolhas();

      // this.handleModalOpen();
    });
  };

  render() {
    const { currentItens } = this.state;
    const { recolhas } = this.props;
    console.log(recolhas);
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
              <h3 style={{ color: "#0EC69A" }}>
                Lista de Recolhas de Análises
              </h3>

              <div className="row mt-4">
                <div className="col-lg-4">
                  <Link to="/add-recolha" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <div className="col-lg-4 center">
                  <ExportCSV csvData={this.props.recolhas} fileName="Recolha" />
                </div>
              </div>

              <div className="end" />
              {recolhas.length ? (
                <PaginatedItems
                  setCurrentItems={this.handleSetItens}
                  itemsPerPage={8}
                  items={recolhas}
                >
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>paciente</th>
                          <th>Data Registro</th>
                          <th>tipo</th>
                          <th>assinatura</th>
                          <th>outro</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentItens &&
                          currentItens.map(
                            (
                              { id, paciente, data, tipo, assinatura, outro },
                              i
                            ) => (
                              <tr key={i}>
                                <td>{i + 1}</td>

                                <td>{paciente.name}</td>

                                <td>{moment(data).format("DD-MM-YYYY")}</td>

                                <td>{tipo}</td>

                                <td>{assinatura}</td>

                                <td>{outro}</td>

                                <td className="table-action-col">
                                  <div className="row g-1">
                                    <div className="col-xs-6 col-md-4 text-center">
                                      <Link
                                        to={`/ver-recolha/${id}`}
                                        className="btn btn-success btn-sm"
                                      >
                                        <i className="fas fa-plus"></i> Ver
                                      </Link>
                                    </div>
                                    <div className="col-xs-6 col-md-4 text-center">
                                      <Link
                                        to={`/edit-recolha/${id}`}
                                        className="btn btn-primary btn-sm"
                                      >
                                        <i className="fas fa-edit" /> Editar
                                      </Link>
                                    </div>
                                    <div className="col-xs-6 col-md-4 text-center">
                                      <Link
                                        className="btn btn-danger btn-sm me-2"
                                        onClick={() => this.removeRecolha(id)}
                                      >
                                        <i className="fas fa-trash" /> Eliminar
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
                </PaginatedItems>
              ) : (
                <h5>Nenhum recolha foi encontrado!</h5>
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
    recolhas: state.recolhas,
  };
};

export default connect(mapStateToProps, { retrieveRecolhas, deleteRecolha })(
  ListRecolha
);
