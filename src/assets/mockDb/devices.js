const lnglatObj = {
  lng01: 114.061965,
  lat01: 22.524376,
  lng02: 114.05822,
  lat02: 22.524346,
  lng03: 114.062013,
  lat03: 22.525705,
  lng04: 114.062408,
  lat04: 22.522737
};

const arr = [
  {
    name: "一品红川菜",
    id: 1,
    address: "宝能科技园A座17楼",
    coverType: 1,
    lng: lnglatObj.lng01,
    lat: lnglatObj.lat01,
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
        path: "qt02"
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
        name: "前门",
        id: 6,
        path: "qm01"
      }
    ]
  }
];

export default { dataList: arr, mapCoverType: 1 };
