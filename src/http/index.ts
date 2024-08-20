import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "https://adm.incasinowetrust.com/api/v1/"

const $api = axios.create({
    withCredentials: true,
    baseURL: `${baseURL}`,
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Basic aWdhcHA6VGNIQUtpVE9MZUNo`
    config.headers.Accept = "application/json"
    config.headers.Cookie = "sessionid=x4xrd3idqyutx6o6cooa2iwrv8myd447"
    return config
})

export default $api

