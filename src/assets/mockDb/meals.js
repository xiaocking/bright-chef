import lnglat from "./lnglat.js";
/**
 * eatType
 *  1 外卖店
 *  2 堂食店
 *  3 外卖堂食
 *
 * footType
 *  1 中餐
 *  2 西餐
 *
 * sex
 *  1 男
 *  2 女
 *
 * coverType
 *  1 点
 *  2 线
 *  3 面
 *
 * alarmType
 *  1 正常
 *  2 一般
 *  3 告警
 *
 */
const arr = [
  {
    name: "一品红川菜",
    id: 1,
    eatType: 2,
    footType: 1,
    area: 100,
    score: 3.2,
    diviceNum: 7,
    complaint: 47,
    inspect: 102,
    alarmNum: 41,
    personNum: 15,
    cooker: 6,
    waiter: 8,
    leaderName: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 0,
    businessLicenseImgId: "001", // 营业执照
    HealthPermitImgId: "002", // 卫生许可证
    address: "宝能科技园A座17楼",
    coverType: 1,
    mapArea: "",
    alarmType: 2,
    lng: lnglat.lng01,
    lat: lnglat.lat01,
    remark: "川菜馆，菜偏辣",
    deviceList: [
      {
        name: "后厨",
        id: 1,
        path: "hc01"
      },
      {
        name: "前堂1",
        id: 2,
        path: "qt01"
      },
      {
        name: "前堂2",
        id: 3,
        path: "qt04"
      },
      {
        name: "前堂3",
        id: 4,
        path: "qt03"
      },
      {
        name: "包间1",
        id: 5,
        path: "bj01"
      },
      {
        name: "包间2",
        id: 5,
        path: "bj02"
      },
      {
        name: "前门",
        id: 6,
        path: "qm01"
      }
    ]
  },

  {
    name: "陕西粉面馆",
    id: 2,
    eatType: 1,
    footType: 1,
    area: 120,
    score: 3.9,
    diviceNum: 5,
    complaint: 84,
    inspect: 121,
    alarmNum: 20,
    personNum: 10,
    cooker: 3,
    waiter: 3,
    leaderName: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 4,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    mapArea: "",
    alarmType: 1,
    lng: lnglat.lng02,
    lat: lnglat.lat02,
    remark: "陕西风味粉面馆，粉面味道很棒",

    deviceList: [
      {
        name: "后厨",
        id: 1,
        path: "hc02"
      },
      {
        name: "前堂1",
        id: 2,
        path: "qt01"
      },
      {
        name: "前堂2",
        id: 4,
        path: "qt03"
      },
      {
        name: "包间1",
        id: 5,
        path: "bj01"
      },
      {
        name: "前门",
        id: 6,
        path: "qm01"
      }
    ]
  },

  {
    name: "海极鲜美食坊",
    id: 3,
    eatType: 3,
    footType: 1,
    area: 80,
    score: 3.7,
    diviceNum: 5,
    complaint: 62,
    inspect: 132,
    alarmNum: 20,
    personNum: 20,
    cooker: 6,
    waiter: 11,
    leaderName: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 2,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    mapArea: "",
    alarmType: 2,
    lng: lnglat.lng03,
    lat: lnglat.lat03,
    remark: "餐馆装修精美，食材新鲜，味道不错",

    deviceList: [
      {
        name: "后厨",
        id: 1,
        path: "hc02"
      },
      {
        name: "前堂1",
        id: 2,
        path: "qt01"
      },
      {
        name: "前堂2",
        id: 4,
        path: "qt02"
      },
      {
        name: "包间1",
        id: 5,
        path: "bj02"
      },
      {
        name: "前门",
        id: 6,
        path: "qm01"
      }
    ]
  },

  {
    name: "牛仔烧烤餐厅",
    id: 4,
    eatType: 2,
    footType: 2,
    area: 130,
    score: 4.2,
    diviceNum: 8,
    complaint: 55,
    inspect: 141,
    alarmNum: 20,
    personNum: 18,
    cooker: 8,
    waiter: 9,
    leaderName: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 0,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    alarmType: 3,
    mapArea: "",
    lng: lnglat.lng04,
    lat: lnglat.lat04,
    remark: "餐馆面积大，服务态度好",
    deviceList: [
      {
        name: "后厨",
        id: 1,
        path: "hc02"
      },
      {
        name: "前堂1",
        id: 2,
        path: "qt01"
      },
      {
        name: "前堂2",
        id: 4,
        path: "qt03"
      },
      {
        name: "前堂3",
        id: 4,
        path: "qt04"
      },
      {
        name: "包间1",
        id: 5,
        path: "bj01"
      },
      {
        name: "包间2",
        id: 5,
        path: "bj02"
      },
      {
        name: "前门",
        id: 6,
        path: "qm01"
      }
    ]
  }
];

export default { dataList: arr, mapCoverType: 1, dataType: 1 };
