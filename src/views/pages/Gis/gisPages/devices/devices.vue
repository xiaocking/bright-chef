<template>
	<div class="gisBox">
		<!-- <Map @MapClick="mapClick" @CoverClick="coverClick" :showData="coverData"></Map> -->
		<Details v-if="DetailsFlag" @closeDialog="hideDialog" :detailsInfo="detailsInfo"></Details>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModel = namespace("myStore");

import Details from "./details_tem.vue";
import detailsInfo from "../../../../../assets/mockDb/devices.js";

@Component({
	components: {
		Details
	}
})
export default class GisDevices extends Vue {
	private DetailsFlag = false;
	private detailsInfo!: object;

	private mapClick(e: MouseEvent) {
		console.log("地图点击", e);
	}

	private coverClick(e: MouseEvent) {
		console.log("覆盖物点击", e);
		this.showDetails(e);
	}

	private showDetails(e) {
		const obj = { ...e };
		obj.deviceList = detailsInfo[e.id];
		this.detailsInfo = obj;
		this.DetailsFlag = true;
	}

	@myStoreModel.Mutation("clearGisCoverInfo") clearGisCoverInfo;
	private hideDialog() {
		this.DetailsFlag = false;
		this.clearGisCoverInfo();
	}

	@myStoreModel.State("mapClickInfo") mapClickInfo: undefined;
	@Watch("mapClickInfo", { immediate: true, deep: true })
	mapClickChange(val) {
		// 地图点击
		if (val) {
			console.log(val);
		}
	}

	@myStoreModel.State("coverClickInfo") coverClickInfo: undefined;
	@Watch("coverClickInfo", { immediate: true, deep: true })
	coverClickChange(val) {
		// 覆盖物点击
		if (val) {
			this.showDetails(val);
		}
	}
}
</script>

<style lang="scss" scoped></style>