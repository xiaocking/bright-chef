/**
 * subType 处理状态
 *  1 未提交
 *  2 部分提交
 *  3 已提交
 *
 * type
 *  1 晨检
 *  2 消毒
 *  3 留样
 *  4 废弃物
 *
 * reportStatus 报告提交状态
 *  1 未提交
 *  2 已提交
 *
 * reportId 报告id
 *
 *
 */

const dataObj = {
  1: [
    {
      time: "2020-03-14 09:34:27",
      subType: 1,
      subTypeName: "未提交",
      id: 1,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          reportStatus: 1,
          subTime: "",
          reportId: ""
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 4,
          id: 4,
          subTime: "",
          typeName: "废弃物",
          reportStatus: 1,
          reportId: ""
        }
      ]
    },
    {
      time: "2020-03-13 09:34:27",
      subType: 2,
      subTypeName: "未完整提交",
      id: 2,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0001"
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    }
  ],
  2: [
    {
      time: "2020-03-14 09:34:27",
      subType: 2,
      subTypeName: "未完整提交",
      id: 5,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    },
    {
      time: "2020-03-13 09:34:27",
      subType: 2,
      subTypeName: "未完整提交",
      id: 6,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0001"
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    }
  ],
  3: [
    {
      time: "2020-03-14 09:34:27",
      subType: 3,
      subTypeName: "未完整提交",
      id: 7,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    },
    {
      time: "2020-03-13 09:34:27",
      subType: 3,
      subTypeName: "已提交",
      id: 8,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0001"
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    }
  ],
  4: [
    {
      time: "2020-03-14 09:34:27",
      subType: 1,
      subTypeName: "未提交",
      id: 9,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "",
          reportStatus: 1,
          reportId: ""
        }
      ]
    },
    {
      time: "2020-03-13 09:34:27",
      subType: 3,
      subTypeName: "已提交",
      id: 10,
      reportList: [
        {
          type: 1,
          id: 1,
          typeName: "晨检",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0001"
        },
        {
          type: 2,
          id: 2,
          typeName: "消毒",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0002"
        },
        {
          type: 3,
          id: 3,
          typeName: "留样",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0003"
        },
        {
          type: 4,
          id: 4,
          typeName: "废弃物",
          subTime: "2020-03-14 09:34:27",
          reportStatus: 2,
          reportId: "0004"
        }
      ]
    }
  ]
};

export default dataObj;
