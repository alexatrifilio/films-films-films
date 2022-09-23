import axios from "axios";

const apiDB = axios.create({
  baseURL: process.env.REACT_APP_DB_FIREBASE,
});

export { apiDB };
