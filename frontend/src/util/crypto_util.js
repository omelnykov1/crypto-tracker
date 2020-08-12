import axios from 'axios';

export const fetchTicker = tickerId => {
    return axios.get(`api/cryptos/tickers/${tickerId}`);
};

export const fetchTickers = () => {
  // debugger
  // return axios.get("https://api.coingecko.com/api/v3/coins/list");
  return axios.get("api/cryptos/tickers");
}