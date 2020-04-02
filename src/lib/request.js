// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    baseURL: "/api/",
    // baseURL: "http://openfire.natapp1.cc/",
    authBaseURL: "http://openfire.natapp1.cc/"
  },
  // 开发环境
  development: {
    baseURL: "/api/",
    authBaseURL: "http://192.168.2.69:8088/"
  },
  // 测试环境
  test: {
    baseURL: "http://localhost:3000/",
    authBaseURL: ""
  }
};
export default modeUrlObj[process.env.NODE_ENV];
