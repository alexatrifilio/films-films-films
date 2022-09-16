import axios from "axios";

const apiDB = axios.create({
  baseURL: "https://letterboxd-2-default-rtdb.firebaseio.com/",
});

export { apiDB };
