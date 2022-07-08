import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveLogs, deleteLog } from "../../../conection/logs/actions";

import { ExportCSV } from '../../ExportEx/ExportCSV'

import moment from "moment";
import PaginatedItems from "../../pagination/Paginate";

class ListLog extends Component {
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
    this.props.retrieveLogs();
  }



  render() {
    const { currentItens } = this.state;
    const { logs } = this.props;
    console.log(logs)
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
              
              <h3 style={{ color: "#0EC69A" }}>Lista de Logs</h3>
          

              <div className="row mt-4">
                
                <div className="col-lg-4">
                  <ExportCSV csvData={this.props.logs} fileName="Log" />
                </div>

              </div>
            
              <div className="end" />
              {logs.length ? (
                  <PaginatedItems
                    setCurrentItems={this.handleSetItens}
                    itemsPerPage={8}
                    items={logs}
                  >
              <div className="table-responsive">
                <table className="table table-striped">

                  <thead>

                    <tr>
                      <th>#</th>

                      <th>User</th>

                      <th>Tipo</th>

                      <th>Data</th>

                      <th>Hora</th>

                    </tr>

                  </thead>

                  <tbody>

                    {currentItens &&

                      currentItens.map(

                        ({ id, data, tipo, user }, i) => (

                          <tr key={i}>
                            <td>{i+1}</td>

                            <td>{user && user.username}</td>

                            <td>{tipo}</td>

                            <td>{moment(data).format("DD-MM-YYYY")}</td>
                            
                            <td>{moment(data).format('LTS')}</td>

                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
              </PaginatedItems>
              ): (
                <h5>Nenhum log foi encontrado!</h5>
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
    logs: state.logs,
  };

};

export default connect(mapStateToProps, { retrieveLogs })(ListLog);