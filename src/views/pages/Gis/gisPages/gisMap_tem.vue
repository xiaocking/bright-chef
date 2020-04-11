<template>
	<div id="MapBox">
		<div id="Map"></div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModel = namespace("myStore");

import amapInit from "../../../../lib/amapInit.js";
import mealsData from "../../../../assets/mockDb/meals.js";
import mapIcon from "./../js/icon.js";

interface IdeviceInfo {
	name: string;
	id: number;
	path: string;
}

interface ImealsDataObj {
	name: string;
	id: number;
	area: 100;
	score: number;
	diviceNum: number;
	complaint: number;
	inspect: number;
	eatType: number;
	footType: number;
	alarmNum: number;
	personNum: number;
	cooker: number;
	waiter: number;
	leaderName: string;
	leaderTel: string;
	sex: string;
	outPerseon: number;
	businessLicenseImgId: string;
	HealthPermitImgId: string;
	address: string;
	coverType: number;
	mapArea: string;
	lng: number;
	lat: number;
	remark: string;
	deviceList: IdeviceInfo[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[a: string]: any;
}

interface IdataListObj {
	ImealsDataObj;
}

interface IshowData {
	dataList: IdataListObj[];
	mapCoverType: number;
	dataType: number;
}

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		AMap: any;
	}
}
window.AMap = window.AMap || null;

@Component
export default class GisPage extends Vue {
	get mapData() {
		return mealsData;
	}

	private map: Window["AMap"];
	private zoNingPloygen: Array<Window["AMap"]["Polygon"]> = [];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private coverList: any[] = [];

	// @Prop(Object) readonly showData!: IshowData;

	// @Emit("MapClick") private mapClick(e: MouseEvent) {
	// 	// 地图点击
	// 	return e;
	// }

	// @Emit("CoverClick") private CoverClick(e: MouseEvent) {
	// 	// 覆盖物点击
	// 	return e;
	// }
	@myStoreModel.Mutation("changeMapClickInfo") mapClick;
	@myStoreModel.Mutation("changeCoverClickInfo") coverClick;

	@myStoreModel.State("mapCoverInfo") mapCoverInfo;
	@Watch("mapCoverInfo", { deep: true })
	showDataChange(val) {
		// 覆盖物显示
		console.log("覆盖物显示", val);
	}

	@myStoreModel.State("actGisNavIndex") actGisNavIndex;
	@Watch("actGisNavIndex")
	actGisNavIndexChange() {
		// 菜单点击时
		this.clearCover();
		this.showCover();
	}

	showCover() {
		if (this.actGisNavIndex == 1) {
			// 餐馆
			this.showMealsCover();
		} else if (this.actGisNavIndex == 2) {
			// 摄像头
			this.showDevicesCover();
		} else if (this.actGisNavIndex == 3) {
			// 告警
			this.showAlarmCover();
		} else if (this.actGisNavIndex == 4) {
			// 自检自查
			this.showInspectCover();
		}
	}

	showMealsCover() {
		// 显示餐馆
		for (const val of this.mapData) {
			const icon = mapIcon.meals["footType0" + val.footType];
			this.addPoint(val, icon);
		}
	}

	showDevicesCover() {
		// 显示设备
		for (const val of this.mapData) {
			const icon = mapIcon.devices["deviceType0" + val.deviceType];

			this.addPoint(val, icon);
		}
	}

	showAlarmCover() {
		// 显示告警
		for (const val of this.mapData) {
			const icon = mapIcon.alarm["alarmType0" + val.alarmType];

			this.addPoint(val, icon);
		}
	}

	showInspectCover() {
		// 显示自检自查
		for (const val of this.mapData) {
			const icon = mapIcon.inspect["inspectType0" + val.inspectType];

			this.addPoint(val, icon);
		}
	}

	// private addCover(data) {
	// 	// 添加覆盖物
	// 	if (data.mapCoverType == 1) {
	// 		for (const val of data.dataList) {
	// 			this.addPoint(val);
	// 		}
	// 	} else if (data.mapCoverType == 2) {
	// 		for (const val of data.dataList) {
	// 			this.addLine(val);
	// 		}
	// 	} else if (data.mapCoverType == 3) {
	// 		for (const val of data.dataList) {
	// 			this.addArea(val);
	// 		}
	// 	} else {
	// 		console.log("添加覆盖物error", data);
	// 	}
	// }

	private addPoint(val, icon = "大中餐馆图标") {
		// 添加点
		if (val.coverType == 1) {
			// 创建一个 icon
			const markerIcon = new window.AMap.Icon({
				size: new window.AMap.Size(24, 29),
				image: require("../../../../assets/mapIcon/" + icon + ".png"),
				imageSize: new window.AMap.Size(24, 29)
				// imageOffset: new window.AMap.Pixel(-24, 10)
			});
			const location = new window.AMap.LngLat(val.lng, val.lat);
			// 将 icon 传入 marker
			const marker = new window.AMap.Marker({
				position: location,
				icon: markerIcon,
				offset: new window.AMap.Pixel(-15, -20)
			});
			marker.on("click", () => {
				// 覆盖物点击
				this.coverClick(val);
			});
			marker.setTitle(val.name);
			this.coverList.push(marker);
			this.map.add(marker);
		}
	}

	private addLine(val) {
		// 添加线
		if (val.coverType == 2) {
			// 创建一个 icon
			// const endIcon = new window.AMap.Icon({
			// 	size: new window.AMap.Size(24, 29),
			// 	image: require("../../../../assets/navIcon/大西餐馆图标.png"),
			// 	imageSize: new window.AMap.Size(24, 29)
			// 	// imageOffset: new window.AMap.Pixel(-24, 10)
			// });
			// const location = new window.AMap.LngLat(val.lng, val.lat);
			// // 将 icon 传入 marker
			// const endMarker = new window.AMap.Marker({
			// 	position: location,
			// 	icon: endIcon,
			// 	offset: new window.AMap.Pixel(-15, -20)
			// });
			// endMarker.on("click", () => {
			// 	this.markerClick(val);
			// });
			// this.coverList.push(endMarker);
			// this.map.add(endMarker);
			// }
		}
	}

	private addArea(val) {
		// 添加面
		if (val.coverType == 3) {
			//
		}
	}

	private mapInit(AMap) {
		//初始化地图对象，加载地图
		this.map = new AMap.Map("Map", {
			center: [114.047327, 22.540876], //地图中心点
			zoom: 13, //地图显示的缩放级别
			zooms: [12, 20],
			resizeEnable: true,
			features: ["bg", "road", "building"],
			viewMode: "3D", //开启3D视图,默认为关闭

			rotateEnable: true,
			pitchEnable: true,
			buildingAnimation: true, //楼块出现是否带动画
			expandZoomRange: true
		});
		/**
		 * setFeatures
		 * 地图显示要素
		 *  bg 区域面
		 * 	road 道路
		 * 	building 建筑物
		 * 	point 文字标注
		 */

		this.pluginInit(AMap); // 加载地图插件
		this.addClick(); // 地图绑定点击事件
		this.showCover(); // 展示地图数据信息
	}

	private pluginInit(AMap) {
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
				const bounds = result.districtList[0].boundaries[0];
				for (let i = 0, l = bounds.length; i < l; i++) {
					//生成行政区划polygon
					this.zoNingPloygen.push([bounds[i].lng, bounds[i].lat]);
				}
				this.gisArea();
				// this.map.setFitView(polygons); //视口自适应
			});
		});
	}

	private gisArea() {
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
			inner: this.zoNingPloygen
		};
		const pathArray = [pointers.outer, pointers.inner];
		const polygon = new window.AMap.Polygon(polygonOptions);
		polygon.setPath(pathArray);

		const bounds = this.map.getBounds();
		this.map.setLimitBounds(bounds);
	}

	private clearCover() {
		// 清楚覆盖物
		console.log("清除所有覆盖物");
		for (const val of this.coverList) {
			this.map.remove(val);
		}
	}

	private addClick() {
		// 给地图添加点击事件
		this.map.on("click", ev => {
			this.mapClick({
				lng: ev.lnglat.lng,
				lat: ev.lnglat.lat
			});
		});
	}

	private removeClick() {
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
#MapBox {
	height: 100%;
	#Map {
		height: 100%;
		width: 100%;
	}
}
</style>