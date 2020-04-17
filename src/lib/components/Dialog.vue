<template>
	<!-- 弹窗盒子 -->
	<el-dialog
		:title="title"
		:visible.sync="dialogVisible"
		:width="width"
		:top="top"
		:fullscreen="fullscreen"
		append-to-body
		custom-class="commonDialogBox"
		:before-close="handleClose"
		:close-on-click-modal="false"
	>
		<div :style="{'height':myHeight,'max-height':myMaxHeight }" class="overflowCss">
			<slot></slot>
		</div>
		<div v-if="showClose" slot="footer" class="dialog-footer">
			<slot name="footer"></slot>
			<el-button @click="handleClose">关 闭</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
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
			default: "6%"
		},
		height: {
			type: String,
			default: "auto"
		},
		MaxHeight: {
			type: String,
			default: "60vh"
		},
		fullscreen: {
			type: Boolean,
			default: false
		},
		showClose: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			dialogVisible: true,
			myMaxHeight: this.MaxHeight,
			myHeight: this.height
		};
	},
	created() {
		if (this.fullscreen) {
			const winHeight = window.innerHeight;
			this.myHeight = winHeight - 126 + "px";
			this.myMaxHeight = "100vh";
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