<template>
	<div class="gisBox alarm">
		<component
			:is="isModel"
			v-if="DetailsFlag"
			@closeDialog="hideDialog"
			@changeModel="changeModel"
			@getCoverData="getCoverData"
			:detailsInfo="detailsInfo"
		></component>

		<div class="alarmList">
			<h2 class="h2_tit" @click="addAlarm">告警列表+</h2>
			<div class="alarmList-item" v-for="item in realAlarm" :key="item.id" @click="showDetails(item)">
				<p class="item-tit">{{ item.name }}</p>
			</div>
		</div>

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

import Map from "../gisMap_tem.vue";

import coverData from "../../../../../assets/mockDb/meals.js";
import details from "../../../../../assets/mockDb/alarm.js";
import tools from "../../../../../lib/tools.js";
import lnglat from "../../../../../assets/mockDb/lnglat.js";

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

interface IdetailsObj {
	name: string;
	alarmType: number;
	alarmTime: string;
	dealType: number;
	id: number;
	dealTypeName: string;
	dealTime: string;
	dealEasesure: string;
	personId: number;
	remark: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
}

interface Idetails {
	[prop: string]: IdetailsObj[];
}

@Component({
	components: {
		Map,
		Details: () => import("./details_tem.vue"),
		Deal: () => import("./deal_tem.vue")
	}
})
export default class GisAlarm extends Vue {
	private DetailsFlag = false;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private detailsInfo: any;
	private realAlarm: ImealsDataObj[] = [];
	private isModel = "Details";
	private coverData: ImealsDataObj[] = [];
	private dataDetails: Idetails = {};
	private legendList = [
		{
			name: "未处理",
			icon: "告警"
		},
		{
			name: "已处理",
			icon: "未告警"
		}
	];

	private showDetails(e) {
		const obj = { ...e };
		this.getAlarmDetails();
		obj.alarmList = this.dataDetails[e.id];
		this.detailsInfo = obj;
		this.isModel = "Details";
		this.DetailsFlag = true;
	}

	private changeModel(arr) {
		this.DetailsFlag = false;
		this.detailsInfo = arr;
		this.isModel = "Deal";
		this.DetailsFlag = true;
	}

	private addAlarm() {
		// 手动添加告警
		const time = tools.dateFormat();
		let num = 11;
		this.getAlarmDetails();
		if (sessionStorage.alarmId) {
			num = sessionStorage.alarmId;
		}
		this.dataDetails[2].unshift({
			name: "",
			alarmType: 4,
			alarmTime: time,
			dealType: 1,
			id: num++,
			dealTypeName: "未处理",
			dealTime: "",
			dealEasesure: "",
			personId: 2,
			remark: "口罩未佩戴或佩戴不正确"
		});
		sessionStorage.alarmDetails = JSON.stringify(this.dataDetails);
		sessionStorage.alarmId = num;
		const obj = this.coverData[1];
		obj.alarmType = 1;
		this.coverData.splice(1, 1, obj);
		sessionStorage.coverData = JSON.stringify(this.coverData);
		this.init();
		this.setMapCoverInfo();
	}

	@myStoreModel.Mutation("setMapCoverInfo") setMapCoverInfo;

	@myStoreModel.Mutation("clearGisCoverInfo") clearGisCoverInfo;
	private hideDialog() {
		this.DetailsFlag = false;
		this.clearGisCoverInfo();
	}

	@myStoreModel.State("mapClickInfo") mapClickInfo;
	@Watch("mapClickInfo", { deep: true })
	mapClickChange(val) {
		// 地图点击
		if (val) {
			console.log(val);
		}
	}

	@myStoreModel.State("coverClickInfo") coverClickInfo;
	@Watch("coverClickInfo", { deep: true })
	coverClickChange(val) {
		// 覆盖物点击
		if (val) {
			this.showDetails(val);
		}
	}

	getAlarmDetails() {
		if (sessionStorage.alarmDetails) {
			this.dataDetails = JSON.parse(sessionStorage.alarmDetails);
		} else {
			sessionStorage.alarmDetails = JSON.stringify(details);
			this.dataDetails = details;
		}
	}

	private getCoverData() {
		if (sessionStorage.coverData) {
			// 获取缓存中的数据
			this.coverData = JSON.parse(sessionStorage.coverData);
		} else {
			sessionStorage.coverData = JSON.stringify(coverData);
			this.coverData = coverData;
		}
		this.init();
	}

	private init() {
		this.realAlarm = [];
		for (const val of this.coverData) {
			if (val.alarmType === 1 || val.alarmType === 2) {
				this.realAlarm.push(val);
			}
		}
	}
	created() {
		this.getCoverData();
	}
}
</script>

<style lang="scss" scoped>
.alarm {
	.alarmList {
		.h2_tit {
			font-size: 18px;
			color: $text-primary-color;
			font-weight: bold;
			height: 36px;
			line-height: 36px;
			border-bottom: 1px solid #ccc;
			margin-bottom: 15px;
		}
		position: absolute;
		width: 180px;
		top: 20vh;
		right: 0;
		background: #fff;
		padding: 10px 15px 15px 15px;

		.alarmList-item {
			color: $red-color;
			margin-bottom: 10px;
			cursor: pointer;
			.item-tit {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 130px;
			}
			&:hover {
				text-decoration: underline;
				color: $error-color;
			}
		}
	}
}
</style>