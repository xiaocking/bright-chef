<template>
	<div class="gisBox">
		<Map @MapClick="mapClick" @CoverClick="coverClick" :showData="mealsInfo"></Map>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Map from "../gisMap_tem.vue";
import mealsData from "../../../../../assets/mockDb/meals.js";

@Component({
	components: {
		Map
	}
})
export default class GisMeals extends Vue {
	private mealsInfo = mealsData;

	private mapClick(e: MouseEvent) {
		console.log("地图点击", e);
	}

	private coverClick(e: MouseEvent) {
		console.log("覆盖物点击", e);
	}
}
</script>

<style lang="scss" scoped></style>