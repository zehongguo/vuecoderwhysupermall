import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  });
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log("发送请求失败" + err);
  });
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log("响应失败" + err);
  });
  return instance(config);
}