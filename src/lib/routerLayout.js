/* 自动获取文件生成路由 */
// 获取数据模式路由页面
const dataRouters = require
  .context("@/views/pages/Data/dataPages", true, /.*(\.vue)$/)
  .keys();

// 获取地图模式路由页面
const gisRouters = require
  .context("@/views/pages/Gis/gisPages", true, /.*(\.vue)$/)
  .keys();

const dataRouterArr = []; // 数据模式路由数组
const gisRouterArr = []; // 地图模式路由数组

dataRouters.forEach(item => {
  if (!/.*(_tem\.vue)$/.test(item)) {
    // 判断是否是局部组件 不是局部组件注册路由
    const paths = item.match(/[a-zA-Z]+/g); //paths中存储了一个目录，二级目录，文件名
    paths.pop();
    let name = "";
    paths.forEach(
      item => (name += item.slice(0, 1).toUpperCase() + item.slice(1))
    );

    dataRouterArr.push({
      path: "/" + paths.pop(), //以文件名作为路由路径
      name: name, // 以 文件路径+文件名 为路由名称
      // component: resolve => require([`@/views/page${item.slice(1)}`], resolve), // 注册文件
      component: () => import(`@/views/pages/Data/dataPages${item.slice(1)}`), // 注册文件
      meta: {
        hasAuthority: true //开启权限验证
      }
    });
  }
});

gisRouters.forEach(item => {
  if (!/.*(_tem\.vue)$/.test(item)) {
    // 判断是否是局部组件 不是局部组件注册路由
    const paths = item.match(/[a-zA-Z]+/g); //paths中存储了一个目录，二级目录，文件名
    paths.pop();
    let name = "";
    paths.forEach(
      item => (name += item.slice(0, 1).toUpperCase() + item.slice(1))
    );

    gisRouterArr.push({
      path: "/" + paths.pop(), //以文件名作为路由路径
      name: name, // 以 文件路径+文件名 为路由名称
      // component: resolve => require([`@/views/page${item.slice(1)}`], resolve), // 注册文件
      component: () => import(`@/views/pages/Gis/gisPages${item.slice(1)}`), // 注册文件
      meta: {
        hasAuthority: true //开启权限验证
      }
    });
  }
});

export default { dataRouterArr, gisRouterArr };
