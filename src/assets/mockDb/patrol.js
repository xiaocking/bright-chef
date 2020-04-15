import lnglat from "./lnglat.js";
/**
 * status
 *  1 未开始
 *  2 进行中
 *  3 已结束
 */

const patrolList = [
  {
    name: "巡检计划001",
    id: 1,
    status: 2,
    statusName: "进行中",
    curLng: lnglat.lng01,
    curLat: lnglat.lat01,
    startTime: "09:00:00",
    endTime: "11:00:00",
    remark: "巡查一品红川菜、陕西粉面馆、海极鲜美食坊、牛仔烧烤餐厅相关情况"
  },
  {
    name: "巡检计划002",
    id: 2,
    status: 1,
    statusName: "未开始",
    curLng: 0,
    curLat: 0,
    startTime: "09:00:00",
    endTime: "11:00:00",
    remark: "巡查一品红川菜、陕西粉面馆、海极鲜美食坊、牛仔烧烤餐厅相关情况"
  },
  {
    name: "巡检计划003",
    id: 3,
    status: 3,
    statusName: "已结束",
    startTime: "09:00:00",
    endTime: "11:00:00",
    curLng: 0,
    curLat: 0,
    remark: "巡查一品红川菜、陕西粉面馆、海极鲜美食坊、牛仔烧烤餐厅相关情况"
  }
];

/**
 * patrolStatus
 *  1 正常
 *  2 异常
 *
 * status
 *  1 合格
 *  2 不合格
 *
 * done
 *  1 未检查
 *  2 已检查
 *
 */
const patrolDetails = {
  1: {
    beginTime: "2020-03-18 09:03:20",
    finishTime: "-",
    patrolStatus: 1,
    patrolTeamId: 1,
    id: 1,
    patrolStatusName: "正常",
    remark: "巡查餐馆存在不合规范处",
    pass: [
      {
        name: "海极鲜美食坊",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:36:54",
        lng: lnglat.lng03,
        lat: lnglat.lat03,
        remark: "正常"
      },
      {
        name: "一品红川菜",
        status: 2,
        done: 2,
        passTime: "2020-03-18 09:45:54",
        lng: lnglat.lng01,
        lat: lnglat.lat01,
        remark: "巡查到员工口罩佩戴不合规范"
      },
      {
        name: "陕西粉面馆",
        status: 1,
        done: 1,
        passTime: "2020-03-18 10:12:54",
        lng: lnglat.lng02,
        lat: lnglat.lat02,
        remark: ""
      },

      {
        name: "牛仔烧烤餐厅",
        status: 1,
        done: 1,
        passTime: "2020-03-18 09:57:54",
        lng: lnglat.lng04,
        lat: lnglat.lat04,
        remark: ""
      }
    ]
  },
  2: {
    beginTime: "2020-03-18 09:03:20",
    finishTime: "-",
    patrolStatus: 1,
    patrolTeamId: 2,
    id: 2,
    patrolStatusName: "正常",
    remark: "所有餐馆巡查正常",
    pass: [
      {
        name: "一品红川菜",
        status: 1,
        done: 1,
        passTime: "2020-03-18 09:45:54",
        lng: lnglat.lng01,
        lat: lnglat.lat01,
        remark: ""
      },
      {
        name: "陕西粉面馆",
        status: 1,
        done: 1,
        passTime: "2020-03-18 10:12:54",
        lng: lnglat.lng02,
        lat: lnglat.lat02,
        remark: ""
      },
      {
        name: "海极鲜美食坊",
        status: 1,
        done: 1,
        passTime: "2020-03-18 09:36:54",
        lng: lnglat.lng03,
        lat: lnglat.lat03,
        remark: ""
      },
      {
        name: "牛仔烧烤餐厅",
        status: 1,
        done: 1,
        passTime: "2020-03-18 09:57:54",
        lng: lnglat.lng04,
        lat: lnglat.lat04,
        remark: ""
      }
    ]
  },
  3: {
    beginTime: "2020-03-18 09:03:20",
    finishTime: "2020-03-18 10:57:56",
    patrolStatus: 1,
    patrolTeamId: 1,
    id: 3,
    patrolStatusName: "正常",
    remark: "所有餐馆巡查正常",
    pass: [
      {
        name: "一品红川菜",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:45:54",
        lng: lnglat.lng01,
        lat: lnglat.lat01,
        remark: ""
      },
      {
        name: "陕西粉面馆",
        status: 1,
        done: 2,
        passTime: "2020-03-18 10:12:54",
        lng: lnglat.lng02,
        lat: lnglat.lat02,
        remark: ""
      },
      {
        name: "海极鲜美食坊",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:36:54",
        lng: lnglat.lng03,
        lat: lnglat.lat03,
        remark: ""
      },
      {
        name: "牛仔烧烤餐厅",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:57:54",
        lng: lnglat.lng04,
        lat: lnglat.lat04,
        remark: ""
      }
    ]
  },
  4: {
    beginTime: "2020-03-18 09:03:20",
    finishTime: "2020-03-18 10:57:56",
    patrolStatus: 1,
    patrolTeamId: 2,
    id: 4,
    patrolStatusName: "正常",
    remark: "所有餐馆巡查正常",
    pass: [
      {
        name: "一品红川菜",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:45:54",
        lng: lnglat.lng01,
        lat: lnglat.lat01,
        remark: ""
      },
      {
        name: "陕西粉面馆",
        status: 1,
        done: 2,
        passTime: "2020-03-18 10:12:54",
        lng: lnglat.lng02,
        lat: lnglat.lat02,
        remark: ""
      },
      {
        name: "海极鲜美食坊",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:36:54",
        lng: lnglat.lng03,
        lat: lnglat.lat03,
        remark: ""
      },
      {
        name: "牛仔烧烤餐厅",
        status: 1,
        done: 2,
        passTime: "2020-03-18 09:57:54",
        lng: lnglat.lng04,
        lat: lnglat.lat04,
        remark: ""
      }
    ]
  }
};

const patrolHistory = {
  1: [
    {
      beginTime: "2020-03-18 09:03:20",
      finishTime: "2020-03-18 10:57:56",
      patrolStatus: 1,
      patrolStatusName: "正常",
      remark: "所有餐馆巡查正常",
      pass: [
        {
          name: "一品红川菜",
          status: 1,
          done: 2,
          passTime: "2020-03-18 09:45:54",
          lng: lnglat.lng01,
          lat: lnglat.lat01,
          remark: ""
        },
        {
          name: "陕西粉面馆",
          status: 1,
          done: 2,
          passTime: "2020-03-18 10:12:54",
          lng: lnglat.lng02,
          lat: lnglat.lat02,
          remark: ""
        },
        {
          name: "海极鲜美食坊",
          status: 1,
          done: 1,
          passTime: "2020-03-18 09:36:54",
          lng: lnglat.lng03,
          lat: lnglat.lat03,
          remark: ""
        },
        {
          name: "牛仔烧烤餐厅",
          status: 1,
          done: 1,
          passTime: "2020-03-18 09:57:54",
          lng: lnglat.lng04,
          lat: lnglat.lat04,
          remark: ""
        }
      ]
    },
    {
      beginTime: "2020-03-17 09:03:20",
      finishTime: "2020-03-17 10:57:56",
      patrolStatus: 1,
      patrolStatusName: "正常",
      remark: "所有餐馆巡查正常",
      pass: [
        {
          name: "一品红川菜",
          status: 1,
          done: 2,
          passTime: "2020-03-17 09:45:54",
          lng: lnglat.lng01,
          lat: lnglat.lat01,
          remark: ""
        },
        {
          name: "陕西粉面馆",
          status: 1,
          done: 2,
          passTime: "2020-03-17 10:12:54",
          lng: lnglat.lng02,
          lat: lnglat.lat02,
          remark: ""
        },
        {
          name: "海极鲜美食坊",
          status: 1,
          done: 2,
          passTime: "2020-03-17 09:36:54",
          lng: lnglat.lng03,
          lat: lnglat.lat03,
          remark: ""
        },
        {
          name: "牛仔烧烤餐厅",
          status: 1,
          done: 2,
          passTime: "2020-03-17 09:57:54",
          lng: lnglat.lng04,
          lat: lnglat.lat04,
          remark: ""
        }
      ]
    }
  ]
};

export default { patrolList, patrolDetails, patrolHistory };
