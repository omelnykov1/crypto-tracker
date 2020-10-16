import React from 'react';
import TickerChartOneDay from './ticker_chart_one_day';
import TickerChartSevenDay from './ticker_chart_seven_day';
import TickerChartThirtyDay from './ticker_chart_thirty_day';

const TickerChart = ({ data, colors: { oneDayColor, sevenDayColor, thirtyDayColor}, chartNum }) => {
  switch (chartNum) {
    case 1:
      return <TickerChartOneDay data={data.oneDay} color={oneDayColor}/>;
    case 7:
      return <TickerChartSevenDay data={data.sevenDay} color={sevenDayColor}/>;
    case 30: 
      return <TickerChartThirtyDay data={data.thirtyDay} color={thirtyDayColor}/>;
    default: 
      return null;
  }
};

export default TickerChart;