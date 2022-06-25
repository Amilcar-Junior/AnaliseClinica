import React, { Component } from "react";
import { Chart } from "react-google-charts";
class BarHorizontal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [
              ["Pessoas", "Recolha", "Resultado"],
              ["Santiago", 5175, 5008],
              ["Sal", 3792, 3694],
              ["Brava", 2695, 2896],
              ["Boavista", 2099, 1953],
              ["Fogo", 1526, 1517],
              ["Maio", 3175, 3008],
              ["São Niculau", 3792, 3694],
              ["São Vicente", 2695, 2896],
              ["Santo Antão", 2099, 1953],
              ],
              options : {
                chart: {
                  title: "População que realiza Análises",
                  subtitle: "Com base nos dados do censo mais recentes e anteriores",
                },
                hAxis: {
                  title: "Total População",
                  minValue: 0,
                },
                vAxis: {
                  title: "Ilha",
                },
                bars: "horizontal",
                axes: {
                  y: {
                    0: { side: "right" },
                  },
                },
              }
        }; 
      }
    render() {
      return (
        <>
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={this.state.data}
      options={this.state.options}
    />
 </>
    );
  }
}
export default BarHorizontal;