import axios from "axios";
import { config } from "./config";
import Routes from './const/Routes';

const api = axios.create({
    baseURL: config.API_URL,
    withCredentials: true,
    timeout: config.apiTimeout,
});

api.interceptors.request.use (
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

api.interceptors.response.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

export default api;