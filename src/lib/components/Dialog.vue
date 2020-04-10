<template>
	<!-- 弹窗盒子 -->
	<el-dialog
		:title="title"
		:visible.sync="dialogVisible"
		:width="width"
		:top="top"
		append-to-body
		custom-class="commonDialogBox"
		:before-close="handleClose"
		:close-on-click-modal="false"
	>
		<div :style="{'height':height,'max-height':MaxHeight }" class="overflowCss">
			<slot></slot>
		</div>
		<div slot="footer" class="dialog-footer">
			<slot name="footer"></slot>
			<el-button @click="handleClose">关 闭</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	data() {
		return {
			dialogVisible: true
		};
	},
	props: {
		dialogBoxFlag: {
			type: Boolean
		},
		title: {
			type: String,
			default: "弹窗"
		},
		width: {
			type: String,
			default: "60%"
		},
		top: {
			type: String,
			default: "7%"
		},
		height: {
			type: String,
			default: "auto"
		},
		MaxHeight: {
			type: String,
			default: "60vh"
		}
	},
	methods: {
		handleClose() {
			if (this.$listeners["closeDialog"]) {
				this.$emit("closeDialog"); // 执行关闭事件
			} else {
				this.$emit("update:dialogBoxFlag", false);
			}
		}
	}
};
</script>

<style lang="scss">
.commonDialogBox {
	.el-dialog__body {
		padding: 5px 20px;
	}
}
</style>