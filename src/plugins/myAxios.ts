import axios from "axios";


const isDev = process.env.NODE_ENV === 'development';

const myAxios = axios.create({
    baseURL: isDev ?  "http://localhost:8080/api" : "http://xiban.kuoge.online/api"
});

myAxios.defaults.withCredentials = true; // 向后台发送请求携带cookie ，设置为true
    // 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('我要发请求了。。。', config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('我收到你的响应数据了。。。', response);
    if (response?.data.code === 40100){
        const redirectUrl = window.location.href;
        window.location.href = `/user/login?redirectUrl=${redirectUrl}`;
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;