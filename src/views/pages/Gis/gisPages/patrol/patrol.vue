<template>
	<div class="gisBox patrol">
		<component :is="isModel" v-if="DetailsFlag" @closeDialog="hideDialog" :detailsInfo="detailsInfo"></component>

		<div class="patrolList">
			<h2 class="h2_tit" @click="addAlarm">巡检计划列表</h2>
			<div class="patrolList-item" v-for="item in realAlarm" :key="item.id" @click="showPlan(item)">
				<p class="item-tit">{{ item.name }}</p>
				<!-- <p class="item-status">{{ item.statusName }}</p> -->
			</div>
		</div>

		<div class="patrolDetails" v-if="showDetailsFlag">
			<div class="details-box">
				<h2 class="h2_tit">
					{{patrolData.patrolList[curData-1].name}}
					<span class="plan-details" @click="showDetails">详情>></span>
				</h2>
				<div>
					<ul class="box-attr">
						<li>计划状态：{{ patrolData.patrolList[curData-1].statusName }}</li>
						<li>开始时间：{{ patrolData.patrolDetails[curData].beginTime }}</li>
						<li>结束时间：{{ patrolData.patrolDetails[curData].finishTime }}</li>
					</ul>
					<div>
						<div
							class="patrol-item"
							v-for="(item,key) in patrolData.patrolDetails[curData].pass"
							:key="key"
						>
							<p class="item-p item-name">名称：{{ item.name }}</p>
							<p class="item-p item-type">
								<el-row :gutter="20">
									<el-col :span="12">{{ item.done ==2?'已检查':"未检查" }}</el-col>
									<el-col :span="12">
										<span
											v-if="item.done ==2"
											class="item-status"
											:class="{'error':item.status ==2,'normal':item.status==1}"
										>{{ item.status ==1?'合格':"不合格" }}</span>
									</el-col>
								</el-row>
							</p>
							<p class="item-p item-time" v-if="item.done ==2">检查时间：{{ item.passTime }}</p>
						</div>
					</div>
				</div>
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

import patrol from "../../../../../assets/mockDb/patrol.js";

interface IpatrolList {
	name: string;
	id: number;
	status: number;
	curLng: number;
	curLat: number;
	startTime: string;
	endTime: string;
	remark: string;
	[a: string]: string | number;
}

interface Idetails2 {
	name: string;
	status: number;
	done: number;
	passTime: string;
	lng: string | number;
	lat: string | number;
	remark: string;
	[a: string]: string | number;
}

interface Idetails3 {
	beginTime: string;
	finishTime: string;
	patrolStatus: number;
	patrolStatusName: string;
	remark: string;
	pass: Idetails2[];
}

interface Idetails {
	[a: string]: Idetails3;
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
	private realAlarm: IpatrolList[] = [];
	private isModel = "Details";
	private coverData: IpatrolList[] = [];
	private dataDetails!: Idetails3;
	private curData = 0;
	private showDetailsFlag = false;
	private legendList = [
		{
			name: "未检查",
			icon: "未检"
		},
		{
			name: "检查不合格",
			icon: "部分检"
		},
		{
			name: "检查合格",
			icon: "已检"
		}
	];

	private showPlan(e) {
		this.curData = e.id;
		this.setDetailsId(e.id);
		this.showDetailsFlag = true;
	}

	private showDetails() {
		this.detailsInfo = [
			this.patrolData.patrolList[this.curData - 1],
			this.patrolData.patrolDetails[this.curData]
		];
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
	@myStoreModel.Mutation("setDetailsId") setDetailsId;
	@myStoreModel.Mutation("clearGisCoverInfo") clearGisCoverInfo;
	private hideDialog() {
		this.DetailsFlag = false;
		this.clearGisCoverInfo();
	}

	@myStoreModel.State("mapClickInfo") mapClickInfo;
	@Watch("mapClickInfo", { deep: true })
	private mapClickChange(val) {
		// 地图点击
		if (val) {
			console.log(val);
		}
	}

	@myStoreModel.State("coverClickInfo") coverClickInfo;
	@Watch("coverClickInfo", { deep: true })
	private coverClickChange(val) {
		// 覆盖物点击
		if (val) {
			// this.showDetails(val);
		}
	}

	get patrolData() {
		return patrol;
	}

	private init() {
		this.realAlarm = [];
		for (const val of this.patrolData.patrolList) {
			this.realAlarm.push(val);
		}
	}

	mounted() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>
.patrol {
	.h2_tit {
		font-size: 18px;
		color: $text-primary-color;
		font-weight: bold;
		height: 36px;
		line-height: 36px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 15px;
		position: relative;
		.plan-details {
			cursor: pointer;
			position: absolute;
			right: 0;
			height: 36px;
			line-height: 36px;
			padding: 0 15px;
			font-size: 12px;
			font-weight: normal;
			color: #999;
			&:hover {
				color: $color;
			}
		}
	}
	.patrolList {
		position: absolute;
		width: 180px;
		top: 20vh;
		left: 0;
		background: #fff;
		padding: 10px 15px 15px 15px;

		.patrolList-item {
			// color: $red-color;
			margin-bottom: 10px;
			cursor: pointer;
			.item-tit {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 130px;
				&:hover {
					text-decoration: underline;
					color: $color;
				}
			}
		}
	}
	.patrolDetails {
		position: absolute;
		right: 0;
		top: 20vh;
		width: 300px;
		padding: 15px;
		background: #fff;
		.box-attr {
			li {
				margin-bottom: 10px;
			}
		}
		.patrol-item {
			margin-bottom: 15px;
			border: 1px solid #ccc;
			padding: 7px 7px 2px 7px;
			border-radius: 7px;
			.item-p {
				margin-bottom: 5px;
			}
			.item-status {
				&.error {
					color: $error-color;
				}
				&.normal {
					color: $color;
				}
			}
		}
	}
}
</style>