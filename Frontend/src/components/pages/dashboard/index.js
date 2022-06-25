import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import AreaChart from "./AreaChart";
import Bar from "./Bar";
import BarHorizontal from "./BarHorizontal";
import Donut from "./Donut";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: "#0EC69A", textAlign: "center", paddingBottom: 20}}>DashBoard</h1>
            </div>
            
            <div className="col-lg-6">
            <h5 style={{ color: "#0EC69A", textAlign: "center", paddingBottom: 20}}>Performance da Compania</h5>
              <AreaChart />
            </div>
            <div className="col-lg-6">
            <h5 style={{ color: "#0EC69A", textAlign: "center", paddingBottom: 20}}>Gastos e Ganho da Compania</h5>
              <Bar />
            </div>
            <div className="end"/>
            <div className="col-lg-6">
            <h5 style={{ color: "#0EC69A", textAlign: "center", paddingBottom: 20}}>Recolha e Resultado por Ilha</h5>

              <BarHorizontal />
            </div>
            <div className="col-lg-6">
            <h5 style={{ color: "#0EC69A", textAlign: "center", paddingBottom: 20}}>Tipo de Analises Frequentes</h5>

              <Donut />
            </div>
          </div>
        </div>
        <div className="end"/>
      </>
    );
  }
}
export default Dashboard;
