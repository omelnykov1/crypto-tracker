import React from 'react';
import { Line } from 'react-chartjs-2';

const handlePrice = num => {
  if (num > 1) {
    return num.toFixed(2)
  } else if (num > 0.1) {
    return num.toFixed(3)
  } else {
    return num.toFixed(5)
  }
}

const handleStepSize = num => {
  if (num > 1.5) {
    return 1
  } else if (num > 0.1) {
    return 0.05
  } else {
    return 0.005
  }
}

const TickerChart = ({ data , color }) => {
    const p = data.map(arr => handlePrice(arr[1]));
    const stepS = handleStepSize(data[0][1]);
    const t = data.map((arr) => {
      const dateObject = new Date(arr[0]);
      const date = dateObject.toLocaleString("en-US")
      return date
    });

    const legend = {
        display: true,
        position: "top",
        labels: {
            fontColor: "#323130",
            fontSize:  20
        }
    }
    const d = {
      labels: t,
      datasets: [
        {
          label: "7 Day Chart",
          data: p,
          borderCapStyle: "butt",
          lineTension: 0.1,
          borderColor: ["transparent"],
          backgroundColor: [color],
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          easing: "easeOutBounce",
        },
      ],
    };
    const options = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 11,
              stepSize: stepS,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    return (
    <div className="ticker-chart">
        <Line data={d} options={options} legend={legend}/>
    </div>
    );
}

export default TickerChart;
