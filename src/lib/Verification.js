/* eslint-disable @typescript-eslint/camelcase */
/*  表单验证规则 */
exports.install = function(Vue) {
  const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //邮箱
  const regInteger = /^[1-9]\d*$/; //正整数
  const mobile = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/; //手机
  const tel = /0\d{2,3}-\d{7,8}/; //座机
  const validateMoneyNumber = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/; //保留两位小数
  const oneDecimalRule = /^[1-9]{2}\.\d{1}$/; //保留1位小数
  const regZn = /[\u4e00-\u9fa5]/; //中文匹配 									 			//中文
  const regEn = /[`~!@#$%^&*()_+<>?:"{},./;'[\]]/im, //英文特殊字符
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im; //身份证
  const regID = /^[1-9]d{5}(18|19|20)d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/;
  //	保留两位小数
  const isvalidateMoney = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!validateMoneyNumber.test(value)) {
        callback(new Error("请输入正确的数字，最多保留两位小数!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	保留一位小数
  const oneDecimal = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!oneDecimalRule.test(value)) {
        callback(new Error("请输入正确的数字，保留一位小数!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	/*验证手机号*/
  const isvalidateMobile = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!mobile.test(value)) {
        callback(new Error("您输入的手机号不正确!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	/*验证座机*/
  const isvalidateTel = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!tel.test(value)) {
        callback(new Error("您输入的座机号不正确!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	/*验证邮箱*/
  const isvalidateEmail = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!regEmail.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else if (regZn.test(value)) {
        callback(new Error("邮箱不能含有中文"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };

  //	/*含有非法字符(只能输入字母、汉字)*/
  const isvalidateRegexn = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!regEn.test(value) && !regCn.test(value)) {
        callback(new Error("含有特殊字符(只能输入字母、阿拉伯数字)!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	/*中文*/
  const isvalidateZn = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!regZn.test(value)) {
        callback(new Error("只能输入中文"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };

  //	/*身份证*/
  const isvalidateID = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!regID.test(value)) {
        callback(new Error("请输入正确的身份证号"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  //	/*请输入正整数*/
  const isvalidateInteger = (rule, value, callback) => {
    if (value != null && value != "") {
      if (!regInteger.test(value)) {
        callback(new Error("请输入正整数!"));
      } else {
        callback();
      }
    } else {
      callback();
    }
  };
  Vue.prototype.filter_rules = function(item) {
    const rules = [];
    if (item.required) {
      rules.push({
        required: true,
        message: "该输入项为必填项!",
        trigger: "change"
      });
    }
    if (item.maxLength) {
      rules.push({
        min: 1,
        max: item.maxLength,
        message: "最多输入" + item.maxLength + "个字符!",
        trigger: "blur"
      });
    }
    if (item.min && item.max) {
      rules.push({
        min: item.min,
        max: item.max,
        message: "字符长度在" + item.min + "至" + item.max + "之间!",
        trigger: "blur"
      });
    }
    if (item.type) {
      const type = item.type;
      switch (type) {
        case "email": //邮箱
          rules.push({
            validator: isvalidateEmail,
            trigger: "blur"
          });
          break;
        case "mobile": //手机
          rules.push({
            validator: isvalidateMobile,
            trigger: "blur"
          });
          break;
        case "regexn": //特殊字符
          rules.push({
            validator: isvalidateRegexn,
            trigger: "blur"
          });
          break;
        case "integer": //正整数
          rules.push({
            validator: isvalidateInteger,
            trigger: "blur"
          });
          break;
        case "money": //保留两个小数
          rules.push({
            validator: isvalidateMoney,
            trigger: "blur"
          });
          break;
        case "oneDecimal": //保留1个小数
          rules.push({
            validator: oneDecimal,
            trigger: "blur"
          });
          break;
        case "Zn": //中文
          rules.push({
            validator: isvalidateZn,
            trigger: "blur"
          });
          break;
        case "tel": //座机
          rules.push({
            validator: isvalidateTel,
            trigger: "blur"
          });
          break;
        case "ID": //身份证
          rules.push({
            validator: isvalidateID,
            trigger: "blur"
          });
          break;
        default:
          rules.push({});
          break;
      }
    }

    return rules;
  };
};
