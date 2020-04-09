<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import amapInit from "./lib/amapInit.js";
export default Vue.extend({
	created() {
		amapInit.init();

		// 在页面加载时读取sessionStorage里的状态信息
		if (sessionStorage.getItem("store")) {
			this.$store.replaceState(
				Object.assign(
					{},
					this.$store.state,
					JSON.parse(sessionStorage.getItem("store") as string)
				)
			);
			// 数据读取设置完成后 清除sessionStorage数据
			sessionStorage.removeItem("store");
		}
		// 在页面刷新时将vuex里的信息保存到sessionStorage里
		window.addEventListener("beforeunload", () => {
			sessionStorage.updateWeb = true;
			sessionStorage.setItem(
				"store",
				JSON.stringify(this.$store.state) as string
			);
		});
	}
});
</script>

<style lang="scss">
@import "./lib/css/reset.scss";
</style>
