import React from 'react';
import { Line } from 'react-chartjs-2';

const handlePrice = num => {
    if (num >= 1) return num.toFixed(2);
    else if (num >= 0.1) return num.toFixed(4);
    else return num.toFixed(7);
}

const handleStepSize = num => {
    if (num > 4) return 1;
    else if (num > 1) return 0.3;
    else if (num > 0.1) return 0.05;
    else return 0.005;
}

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
            yAxes: [
                {
                    ticks: {
                        display: false,
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
                {   ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
    };
    return (
        <div className="ticker-index-item-chart">
            <Line data={d} options={options} legend={legend} style={{ height: "100%" }}/>
        </div>
    )
}

export default TickerIndexItemChart;