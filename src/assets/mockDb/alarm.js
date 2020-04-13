/**
 * dealType 处理状态
 *  1 未处理
 *  2 处理中
 *  3 已处理
 *
 * alarmType 告警类型
 *  1 体温超标
 *  2 活杀
 *  3 野生
 *  4 口罩
 *  5 衣帽
 *  6 工衣
 *
 */

const dataObj = {
  1: {
    real: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-6 16:30:30",
        dealType: 1,
        dealTypeName: "未处理",
        dealTime: "",
        dealEasesure: "",
        remark: "未带口罩"
      }
    ],
    history: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-5 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-5 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      }
    ]
  },
  2: {
    real: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-6 16:30:30",
        dealType: 1,
        dealTypeName: "未处理",
        dealTime: "",
        dealEasesure: "",
        remark: "未带口罩"
      }
    ],
    history: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-5 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-5 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      },
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-4 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-4 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      }
    ]
  },
  3: {
    real: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-6 16:30:30",
        dealType: 1,
        dealTypeName: "未处理",
        dealTime: "",
        dealEasesure: "",
        remark: "未带口罩"
      }
    ],
    history: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-5 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-5 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      },
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-4 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-4 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      }
    ]
  },
  4: {
    real: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-6 16:30:30",
        dealType: 1,
        dealTypeName: "未处理",
        dealTime: "",
        dealEasesure: "",
        remark: "未带口罩"
      }
    ],
    history: [
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-5 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-5 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      },
      {
        name: "",
        alarmType: 2,
        alarmTime: "2020-3-4 16:30:30",
        dealType: 2,
        dealTypeName: "已处理",
        dealTime: "2020-3-4 16:38:26",
        dealEasesure: "通知负责人让员工佩戴口罩",
        remark: "未带口罩"
      }
    ]
  }
};

export default dataObj;
