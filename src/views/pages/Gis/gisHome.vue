<template>
	<div class="GisHome">
		<div class="GisHomeContent">
			<router-view />
		</div>
		<!-- <div id="MapBox">
			<Map></Map>
		</div>-->
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModel = namespace("myStore");

import gisNavList from "../../../assets/mockDb/gisNavList.js";
import Map from "./gisPages/gisMap_tem.vue";

interface InavData {
	name: string;
	id: number;
	icon: string;
	actIcon: string;
	path: string;
}

@Component({
	components: {
		Map
	}
})
export default class GisPage extends Vue {
	$router;
	private actNavData?: InavData;

	get gisNav() {
		return gisNavList;
	}

	@myStoreModel.State("actGisNavIndex") actGisNavIndex;
	@Watch("actGisNavIndex", { immediate: true, deep: true })
	actGisNavIndexChange(val: number) {
		// 菜单点击时
		this.actNavData = this.gisNav[val - 1] as InavData;
		this.$router.push(this.actNavData.path);
	}
}
</script>

<style lang="scss">
.GisHome {
	height: 100%;
	position: relative;
	.GisHomeContent {
		height: 100%;
	}
	.gisBox {
		height: 100%;
	}
}
</style>