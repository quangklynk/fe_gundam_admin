import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');  
