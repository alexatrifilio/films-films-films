import axios from "axios";

const apiDB = axios.create({
  baseURL: process.env.REACT_APP_DB_FIREBASE,
});

const movieDB = axios.create({
  baseURL: process.env.MOVIES_DB,
  params: {
    api_key: "9c51c478317bff9b412e20f3d053c7e9",
  },
});

export { apiDB, movieDB };
