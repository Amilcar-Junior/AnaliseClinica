import React, { Component } from "react";
import { Chart } from "react-google-charts";
class AreaChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [
                ["Anos", "Ganhos", "Gastos"],
                
                ["2015", 760, 620],
                ["2016", 830, 540],
                ["2017", 660, 1020],
                ["2018", 1030, 540],
                ["2019", 900, 700],
                ["2020", 1170, 560],
              ],
              options : {
                title: "Performance da Compania",
                hAxis: { title: "Anos", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                chartArea: { width: "50%", height: "70%" },
              }  
        }; 
      }
    render() {
      return (
        <>
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={this.state.data}
      options={this.state.options}
    />
 </>
    );
  }
}
export default AreaChart;