/* eslint-disable @typescript-eslint/camelcase */
// 工具集
// import myAxiox from "../config/axiosConfig.js";

function setCookie(c_name, value, expire) {
  // expire 单位秒 cookie过期时间 传入为秒 计算后为当前时间多少秒后过期
  const date = new Date();
  date.setSeconds(date.getSeconds() + expire);
  document.cookie =
    c_name +
    "=" +
    escape(value) +
    "; expires=" +
    date.toGMTString() +
    "; path=/;";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

function delCookie(c_name) {
  setCookie(c_name, "", -1);
}

function dateFormat(date, fmt) {
  // 时间格式化
  const Odate = date ? date : new Date();

  let Ofmt = fmt ? fmt : "yyyy-MM-dd hh:mm:ss";

  const o = {
    "M+": Odate.getMonth() + 1, //月份
    "d+": Odate.getDate(), //日
    "h+": Odate.getHours(), //小时
    "m+": Odate.getMinutes(), //分
    "s+": Odate.getSeconds(), //秒
    "q+": Math.floor((Odate.getMonth() + 3) / 3), //季度
    S: Odate.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(Ofmt)) {
    Ofmt = Ofmt.replace(
      RegExp.$1,
      (Odate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(Ofmt))
      Ofmt = Ofmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  }

  return Ofmt;
}

function downloadExcel(url, params = {}) {
  // 下载excel文档流
  // myAxiox
  //   .post(url, params, {
  //     responseType: "blob"
  //   })
  //   .then(response => {
  //     // 下载excel
  //     const str = response.headers["content-disposition"];
  //     const search = "filename=";
  //     const start = str.indexOf(search); //获得字符串的开始位置
  //     const URInfo = str.substring(start + search.length); //截取字符串
  //     const content = response.data;
  //     const blob = new Blob([content]);
  //     const fileName = decodeURIComponent(URInfo); // url解码
  //     if ("download" in document.createElement("a")) {
  //       // 非IE下载
  //       const elink = document.createElement("a");
  //       elink.download = fileName;
  //       elink.style.display = "none";
  //       elink.href = URL.createObjectURL(blob);
  //       document.body.appendChild(elink);
  //       elink.click();
  //       URL.revokeObjectURL(elink.href); // 释放URL 对象
  //       document.body.removeChild(elink);
  //     } else {
  //       // IE10+下载
  //       navigator.msSaveBlob(blob, fileName);
  //     }
  //   });
}

export default { setCookie, getCookie, delCookie, dateFormat, downloadExcel };
