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
    alarmNum: 41,
    personNum: 15,
    cooker: 6,
    waiter: 8,
    leaderNamw: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 0,
    businessLicenseImgId: "001", // 营业执照
    HealthPermitImgId: "002", // 卫生许可证
    address: "宝能科技园A座17楼",
    coverType: 1,
    mapArea: "",
    alarmType: 2,
    lng: 114.061965,
    lat: 22.524376,
  },

  {
    name: "陕西粉面馆",
    id: 2,
    eatType: 1,
    footType: 1,
    alarmNum: 20,
    personNum: 10,
    cooker: 3,
    waiter: 3,
    leaderNamw: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 4,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    mapArea: "",
    alarmType: 1,
    lng: 114.05822,
    lat: 22.524346,
  },

  {
    name: "海极鲜美食坊",
    id: 3,
    eatType: 3,
    footType: 1,
    alarmNum: 20,
    personNum: 20,
    cooker: 6,
    waiter: 11,
    leaderNamw: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 2,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    mapArea: "",
    alarmType: 2,
    lng: 114.062013,
    lat: 22.525705,
  },

  {
    name: "牛仔烧烤餐厅",
    id: 4,
    eatType: 2,
    footType: 2,
    alarmNum: 20,
    personNum: 18,
    cooker: 8,
    waiter: 9,
    leaderNamw: "华丽",
    leaderTel: 13512313211,
    sex: "男",
    outPerseon: 0,
    businessLicenseImgId: "003",
    HealthPermitImgId: "004",
    address: "宝能科技园A座16楼",
    coverType: 1,
    alarmType: 3,
    mapArea: "",
    lng: 114.062408,
    lat: 22.522737,
  },
];

export default { dataList: arr, mapCoverType: 1 };
