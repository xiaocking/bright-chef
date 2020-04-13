<template>
	<div class="gisBox alarm">
		<Details v-if="DetailsFlag" @closeDialog="hideDialog" :detailsInfo="detailsInfo"></Details>
		<div class="alarmList">
			<h2 class="h2_tit">告警列表</h2>
			<div class="alarmList-item" v-for="item in realAlarm" :key="item.id" @click="showDetails(item)">
				<p class="item-tit">{{ item.name }}</p>
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
import details from "../../../../../assets/mockDb/alarm.js"


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

@Component({
	components: {
		Map,
		Details: () => import("./details_tem.vue")
	}
})
export default class GisMeals extends Vue {
	private coverData = coverData;
	private DetailsFlag = false;
	private detailsInfo: ImealsDataObj | undefined;
	private realAlarm: ImealsDataObj[] = [];

	private showDetails(e) {
		const obj = {...e}
		obj.alarmList = details[e.id];
		this.detailsInfo = obj;
		this.DetailsFlag = true;
	}

	private hideDialog() {
		this.DetailsFlag = false;
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

	private init() {
		for (const val of this.coverData) {
			if (val.alarmType === 1 || val.alarmType === 2) {
				this.realAlarm.push(val);
			}
		}
	}

	mounted() {
		this.init()
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
    width: 160px;
    top: 20vh;
    right: 0;
    background: #fff;
		padding:10px 15px 15px 15px;
		cursor: pointer;
		.alarmList-item{
			color: $red-color;
			margin-bottom: 10px;
			
			.item-tit {
				white-space: nowrap;overflow: hidden; text-overflow: ellipsis;
			width: 130px;
			}
			&:hover {
			text-decoration: underline;
			color: $color;
			}
		}
		
	}
}
</style>