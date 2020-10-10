import React from 'react';
import { Line } from 'react-chartjs-2';
import { handlePrice, handleStepSize, getTime } from './ticker_util';

const TickerChartOneDay = ({ data , color }) => {
  const oneDayData = data ? data.map(arr => handlePrice(arr[1])) : null;
  const stepOne = handleStepSize(data[0][1]);
  const timeOne = getTime(data);

  const legend = {
    display: false,
    position: "top",
    labels: {
      fontColor: "#323130",
      fontSize:  20
    }
  }
  const d = {
    labels: timeOne,
    datasets: [
      {
        label: "1 Day Chart",
        data: oneDayData,
        fill: true,
        borderCapStyle: "butt",
        lineTension: 0.1,
        borderColor: [color],
        backgroundColor: [color],
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        easing: "easeOutBounce",
      },
    ],
  };
  const options = {
    responsive: true,
    intersect: true,
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 11,
            stepSize: stepOne,
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

export default TickerChartOneDay;
