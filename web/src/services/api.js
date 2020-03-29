import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_LOCALAPI || "https://betheheronodeapi.herokuapp.com/",
})

export default api;
