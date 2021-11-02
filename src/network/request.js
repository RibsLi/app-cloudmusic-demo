import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: "https://lianghj.top:3000",
    timeout: 5000
  })
  //axios拦截器:请求拦截，响应拦截
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  //响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res);
      return res;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config)
}