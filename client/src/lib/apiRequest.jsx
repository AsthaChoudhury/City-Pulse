import axios from "axios";
const getToken = () => localStorage.getItem('authToken');
const apiRequest = axios.create({
  baseURL:  "http://localhost:8800/api",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getToken()}`, 
  }
});

export default apiRequest;