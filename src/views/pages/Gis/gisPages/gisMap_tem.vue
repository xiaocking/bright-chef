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
import patrol from "../../../../assets/mockDb/patrol.js";
import team from "../../../../assets/mockDb/team.js";
import mapIcon from "./../js/icon.js";

interface IdeviceInfo {
	name: string;
	id: number;
	path: string;
}

interface ImealsDataObj {
	name: string;
	id: number;
	area: number;
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
	leaderTel: number;
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

interface IdriveData {
	start: {
		lng: number;
		lat: number;
	};
	end: {
		lng: number;
		lat: number;
	};
	wayPoint: {
		lng: number;
		lat: number;
	}[];
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
	private mapData: ImealsDataObj[] = [];

	private map: Window["AMap"];
	private driving!: Window["AMap"]["Driving"];
	private drivingFlag = false;
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

	private getMapData() {
		if (sessionStorage.coverData) {
			this.mapData = JSON.parse(sessionStorage.coverData);
		} else {
			sessionStorage.coverData = JSON.stringify(mealsData);
			this.mapData = JSON.parse(JSON.stringify(mealsData));
		}
	}

	@myStoreModel.Mutation("changeMapClickInfo") mapClick;
	@myStoreModel.Mutation("changeCoverClickInfo") coverClick;

	@myStoreModel.State("mapCoverInfo") mapCoverInfo;
	@Watch("mapCoverInfo", { deep: true })
	showDataChange(val) {
		// 覆盖物显示
		if (val) {
			console.log("修改覆盖物数据");
			this.getMapData();
			this.clearCover();
			this.showCover();
		}
	}

	@myStoreModel.Mutation("setDetailsId") setDetailsId;
	@myStoreModel.State("detailsId") detailsId;
	@Watch("detailsId", { deep: true })
	showdetailsIdChange(val) {
		// 显示详情
		if (val) {
			this.getMapData();
			this.clearCover();
			this.showCover(val);
		}
	}

	@myStoreModel.State("actGisNavIndex") actGisNavIndex;
	@Watch("actGisNavIndex")
	actGisNavIndexChange() {
		// 菜单点击时
		this.getMapData();
		this.clearCover();
		this.showCover();
	}

	private showCover(val = undefined) {
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
		} else if (this.actGisNavIndex == 5) {
			// 执法巡查
			this.showPatrolCover(val);
		} else if (this.actGisNavIndex == 6) {
			// 队伍
			this.showTeamCover();
		}
	}

	private showMealsCover() {
		// 显示餐馆
		for (const val of this.mapData) {
			const icon = mapIcon.meals["footType0" + val.footType];
			this.addPoint(val, icon);
		}
	}

	private showDevicesCover() {
		// 显示设备
		for (const val of this.mapData) {
			const icon = mapIcon.devices["deviceType0" + val.deviceType];

			this.addPoint(val, icon);
		}
	}

	private showAlarmCover() {
		// 显示告警
		for (const val of this.mapData) {
			const icon = mapIcon.alarm["alarmType0" + val.alarmType];

			this.addPoint(val, icon);
		}
	}

	private showInspectCover() {
		// 显示自检自查
		for (const val of this.mapData) {
			const icon = mapIcon.inspect["inspectType0" + val.inspectType];

			this.addPoint(val, icon);
		}
	}

	private showPatrolCover(val) {
		const patrolObj = patrol;

		if (val) {
			// 显示单个
			this.clearCover();

			// 显示所有
			const driveData: IdriveData = {
				start: {
					lng: 0,
					lat: 0
				},
				end: {
					lng: 0,
					lat: 0
				},
				wayPoint: []
			};
			if (patrolObj.patrolList[val - 1].status == 2) {
				const obj = {
					lng: patrolObj.patrolList[0].curLng,
					lat: patrolObj.patrolList[0].curLat,
					coverType: 1
				};
				this.addPoint(obj, "person", {
					size1: 39,
					size2: 56,
					size3: 39,
					size4: 56,
					offset1: -20,
					offset2: -56
				});
			}

			for (const [key, val2] of patrolObj.patrolDetails[val].pass.entries()) {
				if (key === 0) {
					driveData.start.lng = val2.lng;
					driveData.start.lat = val2.lat;
				} else if (key === patrolObj.patrolDetails[val].pass.length - 1) {
					driveData.end.lng = val2.lng;
					driveData.end.lat = val2.lat;
				} else {
					const obj = {
						lng: val2.lng,
						lat: val2.lat
					};
					driveData.wayPoint.push(obj);
				}
			}

			this.gisDrive(driveData);
		}
	}

	private showTeamCover() {
		// team
		for (const val of team.teamList) {
			this.addPoint(val, 'team');
		}
	}

	private addPoint(
		val,
		icon = "大中餐馆图标",
		sizeObj = {
			size1: 24,
			size2: 29,
			size3: 24,
			size4: 29,
			offset1: -15,
			offset2: -20
		}
	) {
		// 添加点
		if (val.coverType == 1) {
			// 创建一个 icon
			const markerIcon = new window.AMap.Icon({
				size: new window.AMap.Size(sizeObj.size1, sizeObj.size2),
				image: require("../../../../assets/mapIcon/" + icon + ".png"),
				imageSize: new window.AMap.Size(sizeObj.size3, sizeObj.size4)
				// imageOffset: new window.AMap.Pixel(-24, 10)
			});
			const location = new window.AMap.LngLat(val.lng, val.lat);
			// 将 icon 传入 marker
			const marker = new window.AMap.Marker({
				position: location,
				icon: markerIcon,
				offset: new window.AMap.Pixel(sizeObj.offset1, sizeObj.offset2)
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
		AMap.plugin(
			["AMap.DistrictSearch", "AMap.ControlBar", "AMap.Driving"],
			() => {
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

				this.driving = new AMap.Driving({
					map: this.map
				});
			}
		);
	}

	private gisDrive(data) {
		// 驾车路线绘制
		/**
		 * {
		 * 	start:{
		 * 		lng:xx,
		 * 		lat:xx
		 * 	},
		 * 	end:{
		 * 		lng:xx,
		 * 		lat:xx
		 * 	},
		 * 	wayPoint:[
		 * 		{
		 * 			lng:xx,
		 * 			lat:xx
		 * 		}
		 * 	]
		 * }
		 */
		const wayponits: Array<Window["AMap"]["LngLat"]> = [];

		for (const val of data.wayPoint) {
			wayponits.push(new window.AMap.LngLat(val.lng, val.lat));
		}

		// 根据起终点经纬度规划驾车导航路线
		this.driving.search(
			new window.AMap.LngLat(data.start.lng, data.start.lat),
			new window.AMap.LngLat(data.end.lng, data.end.lat),
			{
				waypoints: wayponits
			},
			status => {
				// result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
				if (status === "complete") {
					this.drivingFlag = true;
					console.log("绘制驾车路线完成");
				} else {
					console.log("绘制失败");
				}
			}
		);
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
		if (this.detailsId) {
			this.setDetailsId();
		}

		if (this.drivingFlag) {
			this.driving.clear();
			this.drivingFlag = false;
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
	created() {
		this.getMapData();
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