/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "../brightChef",
  outputDir: "brightChef",
  lintOnSave: true, //eslint-loader 是否在保存的时候检查
  productionSourceMap: true, // 不生成map文件
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_public", resolve("public"))
      .set("_assets", resolve("src/assets"));
    config.plugin("html").tap(args => {
      args[0].title = "明厨亮灶";
      args[0].favicon = path.resolve("./public/favicon.ico");
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/lib/css/_variables.scss";` // 所有页面文件引入scss公共变量
      }
    }
  },
  devServer: {
    port: 8095,
    historyApiFallback: true
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.2.69:8088/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       //重写路径
    //       "^/api": "/"
    //     }
    //   }
    // }
  }
};
