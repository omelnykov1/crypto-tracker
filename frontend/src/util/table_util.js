import axios from "axios";

export const fetchTable = (userId) => (
  axios.get(`/api/tables/user/${userId}`, userId)
);

export const createTable = (table) => (
  axios.post("/api/tables/", table)
); 

export const updateTable = table => (
  axios.patch("/api/tables/", table)
);

export const deleteTable = tableId => (
  axios.delete(`/api/tables/${tableId}`)
);



