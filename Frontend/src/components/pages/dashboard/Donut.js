import React, { Component } from "react";
import { Chart } from "react-google-charts";
class Donut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [
              ["Análise", "Quantidade"],
              ["hematologia", 5],
              ["heamatologia_a", 2],
              ["urina_ii", 6],
              ["bioquimica_i", 2],
              ["bioquimica_ii", 2],
              ["imunoserologia", 3],
              ],
              options : {
                title: "Tipo de Analises Frequentes",
                pieHole: 0.4,
                is3D: false,
              }  
        }; 
      }
    render() {
      return (
        <>
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={this.state.data}
      options={this.state.options}
    />
 </>
    );
  }
}
export default Donut;