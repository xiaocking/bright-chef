<template>
	<div class="gisBox">
		<!-- <Map @MapClick="mapClick" @CoverClick="coverClick" :showData="mealsInfo"></Map> -->
		<Details v-if="DetailsFlag" @closeDialog="hideDialog" :detailsInfo="detailsInfo"></Details>
		<div class="legend">
			<div class="legend-box">
				<div class="legend-item" v-for="(item,key) in legendList" :key="key">
					<p class="item-icon">
						<el-image
							style="width:24px;height:28px;"
							:src="require(`../../../../../assets/mapIcon/${item.icon}.png`)"
						></el-image>
					</p>
					<p class="item-name">{{ item.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModel = namespace("myStore");

@Component({
	components: {
		Details: () => import("./mealDetails_tem.vue")
	}
})
export default class GisMeals extends Vue {
	private DetailsFlag = false;
	private detailsInfo!: object;
	private legendList = [
		{
			name: "西餐",
			icon: "大西餐馆图标"
		},
		{
			name: "中餐",
			icon: "大中餐馆图标"
		}
	];

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

	@myStoreModel.Mutation("clearGisCoverInfo") clearGisCoverInfo;
	private hideDialog() {
		this.DetailsFlag = false;
		this.clearGisCoverInfo();
	}

	@myStoreModel.State("mapClickInfo") mapClickInfo: undefined;
	@Watch("mapClickInfo", { deep: true })
	mapClickChange(val) {
		// 地图点击
		if (val) {
			console.log(val);
		}
	}

	@myStoreModel.State("coverClickInfo") coverClickInfo: undefined;
	@Watch("coverClickInfo", { deep: true })
	coverClickChange(val) {
		// 覆盖物点击
		if (val) {
			this.showDetails(val);
		}
	}
}
</script>

<style lang="scss" scoped>
.gisBox {
	position: relative;
}
</style>