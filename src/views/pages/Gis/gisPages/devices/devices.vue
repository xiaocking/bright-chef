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

import Map from "../gisMap_tem.vue";
import coverData from "../../../../../assets/mockDb/devices.js";
import Details from "./details_tem.vue";

@Component({
	components: {
		Map,
		Details
	}
})
export default class GisMeals extends Vue {
	private coverData = coverData;
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
		this.detailsInfo = e;
		this.DetailsFlag = true;
	}

	private hideDialog() {
		this.DetailsFlag = false;
	}

	@myStoreModel.Mutation("setMapCoverInfo") setMapCoverInfo;

	@myStoreModel.State("mapClickInfo") mapClickInfo;
	@Watch("mapClickInfo", { immediate: true, deep: true })
	mapClickChange(val) {
		// 地图点击
		if (val) {
			console.log(val);
		}
	}

	@myStoreModel.State("coverClickInfo") coverClickInfo;
	@Watch("coverClickInfo", { immediate: true, deep: true })
	coverClickChange(val) {
		// 覆盖物点击
		if (val) {
			this.showDetails(val);
		}
	}

	mounted() {
		this.setMapCoverInfo(this.coverData);
	}
}
</script>

<style lang="scss" scoped></style>