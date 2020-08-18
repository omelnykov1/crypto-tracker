import axios from 'axios';

export const fetchTicker = tickerId => {
    debugger  
    return axios.get(`api/cryptos/tickers/${tickerId}`, tickerId);
};

export const fetchTickers = () => {
  return axios.get("api/cryptos/tickers");
};

export const fetchTableTicker = tickerId => {
  return axios.get('/api/cryptos/', {params: tickerId})
};