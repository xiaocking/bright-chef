/* 自动获取文件生成路由 */
import _ from "lodash";
const temArr = [];
const routers = require.context("@/views/page", true, /.*(\.vue)$/).keys();

const routerArr = []; // 路由数据数组
let num = 2;
routers.forEach(item => {
  if (!/.*(_tem\.vue)$/.test(item)) {
    // 判断是否是局部组件 不是局部组件注册路由
    const paths = item.match(/[a-zA-Z]+/g); //paths中存储了一个目录，二级目录，文件名
    paths.pop();
    let name = "";
    paths.forEach(item => (name += _.upperFirst(item)));

    routerArr.push({
      path: "/" + paths.pop(), //以文件名作为路由路径
      name: name, // 以 文件路径+文件名 为路由名称
      // component: resolve => require([`@/views/page${item.slice(1)}`], resolve), // 注册文件
      component: () => import(`@/views/page${item.slice(1)}`), // 注册文件
      meta: {
        hasAuthority: true, //开启权限验证
        tx: ++num
      }
    });
    // }
  } else {
    //局部组件不注册路由
    temArr.push(item);
  }
});

export default routerArr;
