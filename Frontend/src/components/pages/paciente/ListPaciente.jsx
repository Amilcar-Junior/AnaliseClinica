import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import {
  retrievePacientes,
  deletePaciente,
} from "../../../conection/pacientes/actions";

import { ExportCSV } from "../../ExportEx/ExportCSV";
import { retrieveProfile } from "../../../conection/profile/actions";

import moment from "moment";
import PaginatedItems from "../../pagination/Paginate";

class ListPaciente extends Component {
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
    this.props.retrievePacientes();
    this.props.retrieveProfile();

  }

  removePaciente = (id) => {
    this.props.deletePaciente(id).then(() => {
      this.props.retrievePacientes();

      // this.handleModalOpen();
    });
  };

  render() {
    const { currentItens } = this.state;
    const { pacientes , user } = this.props;
    const dataHoje = new Date().getFullYear();
    console.log(pacientes);
    return (
      <>
        {user.role && (user.role.id === 3 || user.role.id === 5) ? (
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
              <h3 style={{ color: "#0EC69A" }}>Lista de Pacientes</h3>

              <div className="row mt-4">
                <div className="col-lg-4">
                  <Link to="/add-paciente" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <div className="col-lg-4 center">
                  <ExportCSV
                    csvData={this.props.pacientes}
                    fileName="Paciente"
                  />
                </div>
              </div>

              <br />
              {pacientes.length ? (
                <PaginatedItems
                  setCurrentItems={this.handleSetItens}
                  itemsPerPage={8}
                  items={pacientes}
                >
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>BI</th>

                          <th>Nome</th>

                          <th>Data Nascimento</th>

                          <th>Idade</th>

                          <th>Sexo</th>

                          <th>Telefone</th>

                          <th>Endereço</th>

                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentItens &&
                          currentItens.map(
                            (
                              {
                                id,
                                bi,
                                name,
                                data_nascimento,
                                endereco,
                                sexo,
                                telefone,
                              },
                              i
                            ) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{bi}</td>
                                <td>{name}</td>
                                <td>
                                  {moment(data_nascimento).format("DD-MM-YYYY")}
                                </td>
                                <td>
                                  {moment().diff(data_nascimento, "years")}
                                </td>
                                <td>{sexo}</td>
                                <td>{telefone}</td>
                                <td>{endereco}</td>

                                <td className="table-action-col">
                                  <div className="row g-1">
                                    <div className="col-xs-12 col-md-6 text-center">
                                      <Link
                                        className="btn btn-danger btn-sm me-2"
                                        onClick={() => this.removePaciente(id)}
                                      >
                                        <i className="fas fa-trash" /> Eliminar
                                      </Link>
                                    </div>

                                    <div className="col-xs-6 col-md-6 text-center">
                                      <Link
                                        to={`/edit-paciente/${id}`}
                                        className="btn btn-primary btn-sm"
                                      >
                                        <i className="fas fa-edit" /> Editar
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
                <h5>Nenhum paciente foi encontrado!</h5>
              )}
            </div>
          </div>
        </div>
        ):(
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
    pacientes: state.pacientes,
    user: state.users,
  };
};

export default connect(mapStateToProps, { retrievePacientes, deletePaciente, retrieveProfile,})(
  ListPaciente
);
