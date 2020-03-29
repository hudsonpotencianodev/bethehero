import axios from 'axios';

const api = axios.create({
  baseURL: 'https://betheheronodeapi.herokuapp.com/',
})

export default api;