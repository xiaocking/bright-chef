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

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		AMap: any;
	}
}
window.AMap = window.AMap || null;

@Component
export default class GisPage extends Vue {
	private map: Window["AMap"] | undefined;

	private mapInit(AMap) {
		//初始化地图对象，加载地图
		this.map = new AMap.Map("Map", {
			center: [114.047327, 22.540876], //地图中心点
			zoom: 13, //地图显示的缩放级别
			zooms: [12, 18],
			resizeEnable: true,
			viewMode: "3D", //开启3D视图,默认为关闭

			rotateEnable: true,
			pitchEnable: true,
			buildingAnimation: true, //楼块出现是否带动画
			expandZoomRange: true
		});

		AMap.plugin(["AMap.DistrictSearch", "AMap.ControlBar"], () => {
			//异步加载插件
			const opts = {
				subdistrict: 0, //获取边界不需要返回下级行政区
				extensions: "all", //返回行政区边界坐标组等具体信息
				level: "district",
				adcode: 440304 //查询行政级别为 市
			};
			const district = new AMap.DistrictSearch(opts);
			this.map.addControl(district);

			const bar = new AMap.ControlBar({
				showZoomBar: false,
				showControlButton: true,
				position: {
					right: "10px",
					top: "10px"
				}
			});
			this.map.addControl(bar);

			//行政区查询
			district.search("440304", (status, result) => {
				const polygons: Array<Window["AMap"]["Polygon"]> = [];
				const bounds = result.districtList[0].boundaries[0];
				for (let i = 0, l = bounds.length; i < l; i++) {
					//生成行政区划polygon
					polygons.push([bounds[i].lng, bounds[i].lat]);
				}
				this.gisArea(polygons);
				// this.map.setFitView(polygons); //视口自适应
			});
		});
	}

	private gisArea(arr: Array<Window["AMap"]["Polygon"]>) {
		// 隐藏遮盖福田区外的地图
		const polygonOptions = {
			map: this.map,
			strokeColor: "#0091ea",
			strokeWeight: 1,
			// fillColor: '#80d8ff',
			fillColor: "#fff",
			fillOpacity: 0.9
		};
		// 外多边形坐标数组和内多边形坐标数组
		const pointers = {
			outer: [
				["111.869212", "24.647085"],
				["116.217089", "24.647085"],
				["116.217089", "20.433208"],
				["111.869212", "20.433208"]
			],
			inner: arr
		};
		const pathArray = [pointers.outer, pointers.inner];
		const polygon = new window.AMap.Polygon(polygonOptions);
		polygon.setPath(pathArray);

		const bounds = this.map.getBounds();
		this.map.setLimitBounds(bounds);
	}

	addClick() {
		// 给地图添加点击事件
		this.map.on("click", ev => {
			console.log(ev.lnglat.lng, ev.lnglat.lat);
		});
	}
	removeClick() {
		// 取消地图点击事件
		this.map.off("click", () => {
			console.log("取消地图点击事件");
		});
	}

	mounted() {
		if (window.AMap) {
			this.mapInit(window.AMap);
		} else {
			amapInit.init().then(() => {
				this.mapInit(window.AMap);
			});
		}
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