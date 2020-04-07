/* eslint-disable no-undef */
export default {
  init() {
    return new Promise(resolve => {
      const url =
        "https://webapi.amap.com/maps?v=1.4.15&key=b7a1cd5c4b2578c9ab4900b01b258f54&callback=onLoad";
      const jsapi = document.createElement("script");
      jsapi.charset = "utf-8";
      jsapi.src = url;
      document.head.appendChild(jsapi);
      window.onLoad = function() {
        // const map = new AMap.Map("container");
        resolve(window.AMap);
      };
    });
  }
};
