import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "https://adm.incasinowetrust.com/api/v1/";
// const baseURL = "http://localhost:5000/api/"

const $api = axios.create({
    withCredentials: true,
    baseURL: baseURL, 
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Basic aWdhcHA6VGNIQUtpVE9MZUNo`;
    config.headers.Accept = "application/json";
    config.headers.Cookie = "sessionid=1gzx5dk5bahkpztdsr27k65lvbkb5fkb";
     config.headers['X-CSRF-Token'] = 'jFRZKSLSi4CB38uR5pWaXQ5FU1X4rAfm;';
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default $api;