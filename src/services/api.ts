import axios from 'axios';

export const api = axios.create({
  baseURL:"https://backendcolisao.herokuapp.com/api/colisao/v2/"
})
