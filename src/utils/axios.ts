import axios from "axios";

const apiDB = axios.create({
  baseURL: process.env.REACT_APP_DB_FIREBASE,
});

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9c51c478317bff9b412e20f3d053c7e9",
  },
});

const recommendedDB = axios.create({
  baseURL: process.env.REACT_APP_DB_FIREBASE,
});

export { apiDB, movieDB, recommendedDB };
