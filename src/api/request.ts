import axios from 'axios'
import { ElMessage } from 'element-plus';
import config from '@/config';
const NETWORK_ERROR = '网络错误...'
const service = axios.create({
  baseURL: config.baseApi
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
});

function request(options: {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  [key: string]: any;
}) {
  options.method = options.method || 'get'
  if (options.method.toLocaleLowerCase() === 'get') {
    options.params = options.data
  }
  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    console.log(config.baseApi, "asdasd")
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }
  return service(options)
}

export default request