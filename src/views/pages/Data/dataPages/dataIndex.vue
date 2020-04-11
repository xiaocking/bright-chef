<template>
	<div ref="dataIndex" class="DataIndex">
		<section class="data-header">
			<div class="data-header-item" v-for="(item,key) in dataObj.titList" :key="item.id">
				<span class="item-img">
					<el-image
						style="width:28px;height:28px"
						:src="require('../../../../assets/icon/'+item.icon+'.png')"
					></el-image>
				</span>
				<p class="item-tit">{{ item.name }}</p>
				<p class="item-num">{{ item.num }}</p>
				<el-progress
					:text-inside="true"
					:stroke-width="20"
					:percentage="item.percentage"
					:color="colorList[key]"
				></el-progress>
			</div>
		</section>
		<section class="data-content clearfix">
			<div class="data-item data-alarm fl wid44">
				<Alarm :chartData="dataObj.alarm"></Alarm>
			</div>
			<div class="data-item data-complaint fl" :style="{width:'27%'}">
				<Complaint :chartData="dataObj.complaint"></Complaint>
			</div>
			<div class="data-item data-complaint fl" :style="{width:'27%'}">
				<Score :chartData="dataObj.score"></Score>
			</div>
		</section>
		<section class="data-footer">
			<div class="data-item data-alarm fl" :style="{width:'18%'}">
				<Person :chartData="dataObj.person"></Person>
			</div>

			<div class="data-item data-alarm fl" :style="{width:'18%'}">
				<Meals :chartData="dataObj.meals"></Meals>
			</div>
			<div class="data-item data-alarm fl" :style="{width:'18%'}">
				<Device :chartData="dataObj.device"></Device>
			</div>

			<div class="data-item data-alarm fl wid46">
				<Inspect :chartData="dataObj.inspect"></Inspect>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import dataHomeData from "../../../../assets/mockDb/dataHome.js";
import Alarm from "./dataIndexTem/alarm_tem.vue";
import Complaint from "./dataIndexTem/complaint_tem.vue";
import Score from "./dataIndexTem/score_tem.vue";
import Inspect from "./dataIndexTem/inspect_tem.vue";
import Meals from "./dataIndexTem/meals_tem.vue";
import Person from "./dataIndexTem/person_tem.vue";
import Device from "./dataIndexTem/device_tem.vue";

interface Idata {
	time: string;
	type1: number;
	type2: number;
	type3: number;
	type4: number;
	type5: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[propName: string]: any;
}

@Component({
	components: {
		Alarm,
		Complaint,
		Score,
		Inspect,
		Meals,
		Person,
		Device
	}
})
export default class DataIndex extends Vue {
	$refs;

	private colorList = [
		"#84BD41",
		"#62A7FF",
		"#5CC152",
		"#F7B332",
		"#F5797B",
		"#50B494",
		"#38C6CA"
	];

	private dataObj = dataHomeData;

	private winHeightScale = window.innerHeight / 1080; // 宽度缩放比例
	private winWidthScale = window.innerWidth / 1920; // 高度缩放比例

	getRealHeight(num: number): string {
		return Math.floor(num * this.winHeightScale) + "px";
	}
	getRealWidth(num: number): string {
		return Math.floor(num * this.winWidthScale) + "px";
	}
}
</script>

<style lang="scss" scoped>
@mixin chart {
	height: calc(50% - 75px);
	.data-item {
		height: 100%;
		background: #fff;
		margin-left: 20px;
		> div {
			height: 100%;
			padding: 15px;
		}
		&:first-child {
			margin-left: 0;
		}
	}
	.wid44 {
		width: calc(46% - 40px);
	}
	.wid46 {
		width: calc(46% - 60px);
	}
}

.DataIndex {
	height: 100%;
	.data-header {
		width: 100%;
		display: flex;
		margin-bottom: 20px;
		.data-header-item {
			flex: 1;
			margin-left: 15px;
			position: relative;
			background: #fff;
			box-shadow: 0px 0px 10px 0px rgba(98, 167, 255, 0.05);
			border-radius: 2px;
			padding: 15px;
			&:first-child {
				margin-left: 0;
			}
			.item-img {
				position: absolute;
				left: 20px;
				top: 20px;
				width: 28px;
				height: 28px;
			}
			.item-tit,
			.item-num {
				margin-bottom: 10px;
				text-align: right;
			}
			.item-num {
				font-size: 26px;
			}
		}
	}
	.data-content {
		margin-bottom: 20px;
		overflow: hidden;

		@include chart;
	}
	.data-footer {
		overflow: hidden;
		@include chart;
	}
}
</style>