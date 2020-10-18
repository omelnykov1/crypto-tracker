import React from 'react';
import { Line } from 'react-chartjs-2';
import { handlePrice, handleStepSize } from './ticker/ticker_components/ticker_charts/ticker_util'

const TickerIndexItemChart = ({ data, color }) => {
  const price = data.map(p => handlePrice(p));
  const stepS = handleStepSize(data[0]);
  const time = new Array (price.length);
  const legend = {
    display: false,
    position: "top",
    labels: {
      fontColor: "transparent",
      fontSize: 0
    }
  }
  const d = {
    labels: time,
    datasets: [
      {
        data: price,
        borderCapStyle: "butt",
        lineTension: 0.1,
        borderColor: [color],
        backgroundColor: ["transparent"],
        borderWidth: 1.5,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        easing: "easeOutBounce",
      },
    ],
  };
const options = {
    responsive: true,
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [{ 
        ticks: {
          display: false,
          autoSkip: true,
          maxTicksLimit: 11,
          stepSize: stepS,
        },
        gridLines: {
          display: false,
        },
      }],
      xAxes: [{   
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      }],
    },
  };
  return (
    <div className="ticker-index-item-chart">
      <Line data={d} options={options} legend={legend} style={{ height: "100%" }}/>
    </div>
  )
}

export default TickerIndexItemChart;