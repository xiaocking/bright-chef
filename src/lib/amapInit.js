// /* eslint-disable no-undef */

export default {
  init() {
    return new Promise(resolve => {
      if (window.AMap) {
        console.log("地图已初始化！");
        resolve(window.AMap);
      } else {
        const url = "https://webapi.amap.com/maps?v=1.4.15&key=b7a1cd5c4b2578c9ab4900b01b258f54&callback=onLoad";
        const jsapi = document.createElement("script");
        jsapi.charset = "utf-8";
        jsapi.src = url;
        document.head.appendChild(jsapi);
        window.onLoad = function () {
          console.log("地图初始化成功！");
          resolve(window.AMap);
        };
      }
    });

  }
};
