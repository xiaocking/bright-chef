<template>
	<div class="gisBox inspect">
		<component
			:is="isModel"
			v-if="DetailsFlag"
			@closeDialog="hideDialog"
			@getCoverData="getCoverData"
			:detailsInfo="detailsInfo"
		></component>

		<div class="inspectList">
			<h2 class="h2_tit" @click="addAlarm">自检未完成列表</h2>
			<div
				class="inspectList-item"
				v-for="item in realAlarm"
				:key="item.id"
				@click="showDetails(item)"
			>
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
import details from "../../../../../assets/mockDb/inspect.js";

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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
}

interface Idetails {
	[prop: string]: IdetailsObj[];
}

@Component({
	components: {
		Map,
		Details: () => import("./details_tem.vue")
		// Deal: () => import("./deal_tem.vue")
	}
})
export default class GisInspect extends Vue {
	private DetailsFlag = false;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private detailsInfo: any;
	private realAlarm: ImealsDataObj[] = [];
	private isModel = "Details";
	private coverData: ImealsDataObj[] = [];
	private dataDetails!: Idetails;

	private showDetails(e) {
		const obj = { ...e };
		this.getAlarmDetails();
		this.detailsInfo = [obj, this.dataDetails[e.id]];
		this.isModel = "Details";
		this.DetailsFlag = true;
	}

	// private changeModel(arr) {
	// this.DetailsFlag = false;
	// this.detailsInfo = arr;
	// this.isModel = "Deal";
	// this.DetailsFlag = true;
	// }

	private addAlarm() {
		// 手动添加告警
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
		if (sessionStorage.inspectDetails) {
			this.dataDetails = JSON.parse(sessionStorage.inspectDetails);
		} else {
			sessionStorage.inspectDetails = JSON.stringify(details);
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
			if (val.inspectType !== 3) {
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
.inspect {
	.inspectList {
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

		.inspectList-item {
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