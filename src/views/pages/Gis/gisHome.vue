<template>
	<div class="GisHome">
		<div id="MapBox">
			<div id="Map"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import amapInit from "../../../lib/amapInit.js";

@Component
export default class GisPage extends Vue {
	private map = null;

	private mapInit(AMap) {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const _this = this;
		//初始化地图对象，加载地图
		this.map = new AMap.Map("Map", {
			resizeEnable: true,
			center: [114.105, 22.555], //地图中心点
			zoom: 12 //地图显示的缩放级别
		});

		AMap.plugin("AMap.DistrictSearch", () => {
			//异步加载插件
			const opts = {
				subdistrict: 0, //获取边界不需要返回下级行政区
				extensions: "all", //返回行政区边界坐标组等具体信息
				level: "district",
				adcode: 440304 //查询行政级别为 市
			};
			const district = new AMap.DistrictSearch(opts);
			_this.map.addControl(district);

			//行政区查询
			district.search("福田区", (status, result) => {
				let polygons = [];
				const bounds = result.districtList[0].boundaries;
				if (bounds) {
					for (let i = 0, l = bounds.length; i < l; i++) {
						//生成行政区划polygon
						const polygon = new AMap.Polygon({
							strokeWeight: 1,
							path: bounds[i],
							fillOpacity: 0.4,
							fillColor: "#80d8ff",
							strokeColor: "#0091ea"
						});
						polygons.push(polygon);
					}
				}
				_this.map.add(polygons);
				_this.map.setFitView(polygons); //视口自适应
			});
		});
	}
	mounted() {
		amapInit.init().then(AMap => {
			this.mapInit(AMap);
		});
	}
}
</script>

<style lang="scss" scoped>
.GisHome {
	height: 100%;
	#MapBox {
		height: 100%;
		#Map {
			height: 100%;
			width: 100%;
		}
	}
}
</style>