import axios from "axios";

export const fetchTable = () => {
    return axios.get('/api/tables/')
};

export const createTable = (tickers) => {
  return axios.post("/api/tables/", tickers);
};

export const updateTable = ticker => {
    return axios.patch("/api/tables/", ticker);
}