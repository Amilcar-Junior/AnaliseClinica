import React, { Component } from "react";

import AreaChart from "./AreaChart";
import Bar from "./Bar";
import BarHorizontal from "./BarHorizontal";
import Donut from "./Donut";

import { connect } from "react-redux";

import { retrieveProfile } from "../../../conection/profile/actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({ user: this.props.user });
      console.log(this.props.user);
    }
  }

  componentDidMount() {
    this.props.retrieveProfile();
  }

  render() {
    const user = this.state.user;
    console.log(user);
    return (
      <>
        {" "}
        {user && user.role.id === 3 ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 20,
                  }}
                >
                  DashBoard
                </h1>
              </div>

              <div className="col-lg-6">
                <h5
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 20,
                  }}
                >
                  Performance da Compania
                </h5>
                <AreaChart />
              </div>
              <div className="col-lg-6">
                <h5
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 20,
                  }}
                >
                  Gastos e Ganho da Compania
                </h5>
                <Bar />
              </div>
              <div className="end" />
              <div className="col-lg-6">
                <h5
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 20,
                  }}
                >
                  Recolha e Resultado por Ilha
                </h5>

                <BarHorizontal />
              </div>
              <div className="col-lg-6">
                <h5
                  style={{
                    color: "#0EC69A",
                    textAlign: "center",
                    paddingBottom: 20,
                  }}
                >
                  Tipo de Analises Frequentes
                </h5>

                <Donut />
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

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, { retrieveProfile })(Dashboard);
