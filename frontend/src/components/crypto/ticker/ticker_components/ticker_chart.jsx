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

const TickerChart = props => {
    const p = props.data.map(arr => handlePrice(arr[1]));
    const t = props.data.map((arr) => {
      const unixTimestamp = arr[0];
      const dateObject = new Date(unixTimestamp);
      const month = dateObject.toLocaleString("en-US", { month: "numeric" });
      const day = dateObject.toLocaleString("en-US", { day: "numeric" });
      return `${month}/${day}`;
    });

    const legend = {
        display: true,
        position: "top",
        labels: {
            fontColor: "#323130",
            fontSize: 14
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
          backgroundColor: [props.color],
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
              stepSize: 1,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
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
