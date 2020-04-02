/* axios错误提示 */
import Vue from "vue";
const v = new Vue();

const ToastDialog = (options = {}) => {
  v.$message({ type: "error", message: options });
};

export default ToastDialog;
