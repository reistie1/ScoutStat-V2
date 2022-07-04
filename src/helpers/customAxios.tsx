import Axios from 'axios';
// import Cookies from 'js-cookie';

var url = "";
// const apiVersion = 1;

//select the appropriate url based on the environment and app type
url = `https://localhost:5001`;


//create a new Axios instance with a custom config.
const customAxios = Axios.create({
  baseURL: url,
  timeout: 20000,  
  withCredentials: true,
});

//create request, response & error handlers
const requestHandler = (request: any) => { return request; };

const errorHandler = (error: any) => { return Promise.reject(error); };

//configure/make use of request & response interceptors from Axios
customAxios.interceptors.request.use((request) => requestHandler(request), (error) => errorHandler(error));
customAxios.interceptors.response.use((response) => { return response }, async function (error) { throw error; });

//export the newly created Axios instance to be used in different locations.
export default customAxios;