import axios from "axios";
import QS from "qs";
import url from "./request"; // 路径配置
import toast from "./toast"; // 弹窗提示

// axios.defaults.withCredentials = true; // cookie传递
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; // 默认请求头类型

// 创建axios 实例
const service = axios.create({
  baseURL: url.baseURL, // api的base_url
  timeout: 10000 // 请求超时时间
});

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置
    if (config.method == "post") {
      //json数据越过序列化操作
      if (!config.headers["Content-Type"]) {
        config.data = QS.stringify(config.data); //防止post请求参数无法传到后台
      }
    }
    if (sessionStorage.curToken) {
      // token传递
      config.headers["Authorization"] = sessionStorage.curToken;
    }
    //增加接口时间戳
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    };
    return config;
  },
  error => {
    //  这里处理一些请求出错的情况
    toast(error);
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 这里处理一些response 正常返回时的逻辑
    if (res.code !== 200) {
      // 状态码不为200
      if (res.type && res.type === "application/octet-stream") {
        // 文档流下载
        return response;
      }
      // 后端返回异常信息
      toast(res.msg);
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  error => {
    // 这里处理一些response 出错时的逻辑
    toast(error);
    return Promise.reject(error);
  }
);

export default service;
