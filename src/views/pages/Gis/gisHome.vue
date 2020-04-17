<template>
	<div class="GisHome">
		<div class="GisHomeContent">
			<router-view />
		</div>

		<Map></Map>
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
	overflow: hidden;
	.GisHomeContent {
		height: 0;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		width: 100%;
	}
	.gisBox {
		height: 100%;
		position: relative;
		.legend {
			width: 0;
			height: calc(100vh - 78px);
			position: relative;
			.legend-box {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 140px;
				padding: 15px;
				background: #fff;
			}
			.legend-item {
				position: relative;
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				.item-icon {
					margin-right: 10px;
				}
			}
		}
	}
}
</style>