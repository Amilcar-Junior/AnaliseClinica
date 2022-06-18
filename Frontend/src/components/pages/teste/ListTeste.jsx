import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveTestes, deleteTeste } from "../../../conection/testes/actions";

import { ExportCSV } from '../../ExportEx/ExportCSV'

import moment from "moment";
import PaginatedItems from "../../pagination/Paginate";

class ListTeste extends Component {
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
    this.props.retrieveTestes();
  }

  removeTeste = (id) => {

    this.props.deleteTeste(id).then(() => {

      this.props.retrieveTestes();
      
      // this.handleModalOpen();
    });

  };

  render() {
    const { currentItens } = this.state;
    const { testes } = this.props;
    console.log(testes)
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
            <div className="end"/>
            <div className="col-lg-12">
              
              <h3 style={{ color: "#0EC69A" }}>Lista de Testes</h3>
          

              <div className="row mt-4">
                <div className="col-lg-4">
                  <Link to="/add-teste" className="btn btn-success">
                    <i class="fas fa-plus" /> Adicionar
                  </Link>
                </div>
                <div className="col-lg-4 center">
                  <ExportCSV csvData={this.props.testes} fileName="Teste" />
                </div>

              </div>
            
              <div className="end" />
              {testes.length ? (
                  <PaginatedItems
                    setCurrentItems={this.handleSetItens}
                    itemsPerPage={8}
                    items={testes}
                  >
              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>#</th>

                      <th>Nome</th>

                      <th>Idade</th>

                      <th>Data Nascimento</th>

                      <th>Tipo</th>

                      <th>Actions</th>

                    </tr>

                  </thead>

                  <tbody>

                    {currentItens &&

                      currentItens.map(

                        ({ id, name, idade, data_nascimento, type }, i) => (

                          <tr key={i}>
                            <td>{i+1}</td>

                            <td>{name}</td>

                            <td>{idade}</td>

                            <td>{moment(data_nascimento).format("DD-MM-YYYY")}</td>

                            <td>{type === true && (
                            <i class="fas fa-check"></i>
                            )}
                            </td>

                            <td className="table-action-col">
                              <div className="row g-1">
                                <div className="col-xs-12 col-md-6 text-center">
                                  <Link
                                    className="btn btn-danger btn-sm me-2"
                                    onClick={() =>
                                      this.removeTeste(id)
                                    }>

                                    <i className="fas fa-trash" /> Eliminar
                                  </Link>
                                </div>

                                <div className="col-xs-6 col-md-6 text-center">
                                  <Link
                                    to={`/edit-teste/${id}`}
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
              ): (
                <h5>Nenhum teste foi encontrado!</h5>
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
    testes: state.testes,
  };

};

export default connect(mapStateToProps, { retrieveTestes, deleteTeste })(ListTeste);