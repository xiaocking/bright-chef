/**
 * dealType 处理状态
 *  1 未处理
 *  2 处理中
 *  3 已处理
 *
 * alarmType 告警类型
 *  0 体温超标
 *  1 活杀
 *  2 野生
 *  3 工衣
 *  4 口罩未佩戴或佩戴不正确
 *  5 衣帽未穿戴或穿戴不正确
 *
 *
 */

const dataObj = {
  1: [
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-6 16:30:30",
      dealType: 2,
      id: 2,
      dealTypeName: "处理中",
      dealTime: "",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 3,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    }
  ],
  2: [
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-6 16:30:30",
      dealType: 1,
      id: 1,
      dealTypeName: "未处理",
      dealTime: "",
      personId: 1,
      dealEasesure: "",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-6 16:30:30",
      dealType: 3,
      id: 4,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 5,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-4 16:30:30",
      dealType: 3,
      dealTypeName: "已处理",
      dealTime: "2020-3-4 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    }
  ],
  3: [
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-4 16:30:30",
      dealType: 2,
      dealTypeName: "处理中",
      dealTime: "",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 7,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 8,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 9,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 10,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 11,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 12,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 13,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 14,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 15,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 16,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 17,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    }
  ],
  4: [
    {
      name: "",
      alarmType: 3,
      alarmTime: "2020-3-4 16:30:30",
      dealType: 2,
      id: 19,
      dealTypeName: "处理中",
      dealTime: "",
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      personId: 1,
      remark: "口罩未佩戴或佩戴不正确"
    },
    {
      name: "",
      alarmType: 4,
      alarmTime: "2020-3-5 16:30:30",
      dealType: 3,
      id: 20,
      dealTypeName: "已处理",
      dealTime: "2020-3-5 16:38:26",
      personId: 1,
      dealEasesure: "通知负责人让员工正确佩戴口罩",
      remark: "口罩未佩戴或佩戴不正确"
    }
  ]
};

export default dataObj;
