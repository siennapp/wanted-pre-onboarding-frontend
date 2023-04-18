import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers:{
    "Content-type": "application/json"
  }
})
api.interceptors.request.use((config) => {
  if (!config.headers) return config;

  let token: string | null = null;
  token = localStorage.getItem('accessToken');

  if(token !== null){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;