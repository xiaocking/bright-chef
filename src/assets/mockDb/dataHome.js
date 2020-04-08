export default {
  titList: [
    {
      name: "点餐总数",
      id: 1,
      icon: "icon01",
      num: 60,
      percentage: 30,
    },
    {
      name: "总员工数",
      id: 2,
      icon: "icon02",
      num: 60,
      percentage: 20,
    },
    {
      name: "总摄像头",
      id: 3,
      icon: "icon03",
      num: 60,
      percentage: 30,
    },
    {
      name: "总投诉数",
      id: 4,
      icon: "icon04",
      num: 60,
      percentage: 30,
    },
    {
      name: "总告警数",
      id: 5,
      icon: "icon05",
      num: 60,
      percentage: 30,
    },
    {
      name: "总巡查数",
      id: 6,
      icon: "icon06",
      num: 60,
      percentage: 30,
    },
    {
      name: "总自检数",
      id: 7,
      icon: "icon07",
      num: 60,
      percentage: 30,
    },
  ],
  alarm: [
    {
      time: "第一周",
      type1: 26,
      type2: 35,
      type3: 12,
      type4: 7,
      type5: 3,
    },
    {
      time: "第二周",
      type1: 16,
      type2: 24,
      type3: 16,
      type4: 6,
      type5: 4,
    },
    {
      time: "第三周",
      type1: 30,
      type2: 8,
      type3: 25,
      type4: 10,
      type5: 11,
    },
    {
      time: "第四周",
      type1: 19,
      type2: 16,
      type3: 17,
      type4: 21,
      type5: 8,
    },
  ],
  complaint: [
    {
      time: "第一周",
      num: 100,
    },
    {
      time: "第二周",
      num: 80,
    },
    {
      time: "第三周",
      num: 120,
    },
    {
      time: "第四周",
      num: 70,
    },
  ],
  score: [
    {
      level: "五星",
      num: "30",
    },
    {
      level: "四星",
      num: "120",
    },
    {
      level: "三星",
      num: "140",
    },
    {
      level: "二星",
      num: "150",
    },
    {
      level: "一星",
      num: "110",
    },
  ],
  inspect: {
    dataArr: [
      {
        type: "晨检",
        done: 24,
        undo: 36,
        perce: 40,
        all: 60,
      },
      {
        type: "消毒",
        done: 18,
        undo: 42,
        perce: 30,
        all: 60,
      },
      {
        type: "留样",
        done: 40,
        undo: 20,
        perce: 66,
        all: 60,
      },
      {
        type: "废弃物",
        done: 20,
        undo: 40,
        perce: 33,
        all: 60,
      },
    ],
    dataObj: {
      all: 310,
      plan: 50,
      done: 34,
      person: 13,
    },
  },
  meals: [
    {
      name: "纯外卖店",
      value: 10,
    },
    {
      name: "纯堂食店",
      value: 10,
    },
    {
      name: "堂食与外卖",
      value: 10,
    },
  ],
  person: [
    {
      name: "正常",
      value: "40",
    },
    {
      name: "疑似",
      value: "8",
    },
    {
      name: "轻微",
      value: "9",
    },
    {
      name: "重症",
      value: "3",
    },
  ],
  device: [
    {
      name: "正常在线",
      value: "30",
    },
    {
      name: "离线",
      value: "3",
    },
    {
      name: "花点",
      value: "5",
    },
    {
      name: "蓝屏",
      value: "1",
    },
    {
      name: "黑屏",
      value: "2",
    },
  ],
};
