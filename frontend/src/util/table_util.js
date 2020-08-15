import axios from "axios";

export const fetchTable = (userId) => {
  debugger
    return axios.get(`/api/tables/user/${userId}`, userId);
};

export const createTable = (table) => {
  debugger
  return axios.post("/api/tables/", table);
};

export const updateTable = table => {
    debugger
    return axios.patch("/api/tables/", table);
}