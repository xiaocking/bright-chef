/**
 *
 * method
 *  1 冷藏
 *  2 干燥存放
 *  3 水中存放
 *
 * type
 *  1 蔬菜
 *  2 肉类
 *  3 其他
 *
 */
const details = {
  1: [
    {
      time: "2020-03-17 09:14:27",
      stockNum: 7,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200317091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 15:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-16 09:14:27",
      stockNum: 8,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200316091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 15:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-15 09:08:14",
      stockNum: 5,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200315091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    }
  ],
  2: [
    {
      time: "2020-03-17 09:14:27",
      stockNum: 7,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200317091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 15:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-16 09:14:27",
      stockNum: 8,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200316091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 15:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-15 09:08:14",
      stockNum: 5,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200315091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    }
  ],
  3: [
    {
      time: "2020-03-17 09:14:27",
      stockNum: 7,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200317091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 15:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-16 09:14:27",
      stockNum: 8,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200316091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 15:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-15 09:08:14",
      stockNum: 5,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200315091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    }
  ],
  4: [
    {
      time: "2020-03-17 09:14:27",
      stockNum: 7,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200317091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 15:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-16 18:02:02",
          ExpirationDate: "2020-03-21 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-16 09:14:27",
      stockNum: 8,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200316091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "芹菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 15:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆腐",
          ShelfLife: 2,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 3,
          type: 3,
          typeName: "豆制品",
          methodName: "水中存放"
        },
        {
          name: "鱼",
          ShelfLife: 5,
          num: 1,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 3,
          type: 2,
          typeName: "肉类",
          methodName: "水中存放"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-18 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-15 18:02:02",
          ExpirationDate: "2020-03-20 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    },
    {
      time: "2020-03-15 09:08:14",
      stockNum: 5,
      stockPerson: "张三",
      stockPersonTel: 13512312311,
      singleNum: "20200315091727",
      buyer: "食材批发处",
      buyerPerson: "李四",
      buyerPersonTel: 13512312312,
      stockList: [
        {
          name: "白菜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "豆角",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 15:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "猪肉",
          ShelfLife: 3,
          num: 3,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-17 15:02:02",
          method: 1,
          type: 2,
          typeName: "肉类",
          methodName: "冷藏"
        },
        {
          name: "萝卜",
          ShelfLife: 5,
          num: 2,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        },
        {
          name: "土豆",
          ShelfLife: 5,
          num: 4,
          ProductionDate: "2020-03-14 18:02:02",
          ExpirationDate: "2020-03-19 15:02:02",
          method: 1,
          type: 1,
          typeName: "蔬菜",
          methodName: "冷藏"
        }
      ]
    }
  ]
};

export default { details };
