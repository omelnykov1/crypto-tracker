import React from 'react';
import { Line } from 'react-chartjs-2';

const TickerChart = props => {
    const p = props.data.map(arr => arr[1].toFixed(2));
    const t = props.data.map((arr) => {
      const unixTimestamp = arr[0];
      const dateObject = new Date(unixTimestamp);
      const humanDateFormat = dateObject.toLocaleString();
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
          borderColor: ["#bc5090"],
          backgroundColor: ["#58508d"],
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
    <div className="ticker-chart" style={{height: "500px", width:"70%"}}>
        <Line data={d} options={options} legend={legend}/>
    </div>
    );
}

export default TickerChart;
