<template>
	<div class="clearfix inspect">
		<div class="inspect-left fl">
			<h3 class="h3_tit">自检自查</h3>
			<p class="p1"></p>
			<el-row
				v-for="(item,key) in chartData.dataArr"
				:key="key"
				:gutter="20"
				style="line-height:20px;margin-bottom:36px;"
			>
				<el-col :span="6">{{ item.type }}</el-col>
				<el-col :span="10">
					<el-progress
						:text-inside="true"
						:stroke-width="20"
						:color="colorList[key]"
						:percentage="item.perce"
					></el-progress>
				</el-col>
				<el-col :span="8">未提交{{ item.undo }}</el-col>
			</el-row>
		</div>
		<div class="inspect-right fr">
			<h3 class="h3_tit">执法巡查</h3>
			<dl>
				<dt class="d1">{{ chartData.dataObj.all }}</dt>
				<dd class="d2">
					<span class="s1">本月计划</span>
					<span class="s2">{{ chartData.dataObj.plan }}</span>
				</dd>
				<dd class="d2">
					<span class="s1">巡查次数</span>
					<span class="s2">{{ chartData.dataObj.done }}</span>
				</dd>
				<dd class="d2">
					<span class="s1">巡查人数</span>
					<span class="s2">{{ chartData.dataObj.person }}</span>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface IdataArr {
	type: string;
	done: number;
	undo: number;
	perce: number;
	all: number;
}

interface IdataObj {
	all: number;
	plan: number;
	done: number;
	person: number;
}

interface Idata {
	dataArr: IdataArr[];
	dataObj: IdataObj;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[propName: string]: any;
}

@Component
export default class Inspect extends Vue {
	@Prop(Object) readonly chartData!: Idata;

	private colorList = [
		"#84BD41",
		"#62A7FF",
		"#5CC152",
		"#F7B332",
		"#F5797B",
		"#50B494",
		"#38C6CA"
	];
}
</script>

<style lang="scss" scoped>
.inspect {
	width: 100%;
	.h3_tit {
		margin-bottom: 20px;
		font-size: 18px;
		font-weight: bold;
	}
	.inspect-left {
		height: 100%;
		width: calc(100% - 220px);
		min-width: 250px;
		padding-right: 20px;
		border-right: 1px solid #eee;
		#Inspect {
			height: 100%;
		}
	}
	.inspect-right {
		width: calc(100% - 270px);
		max-width: 200px;
		height: 100%;
		.d1 {
			font-size: 42px;
			text-align: center;
			color: #333;
			margin-bottom: 40px;
		}
		.d2 {
			margin-bottom: 30px;
			letter-spacing: 2px;
			display: flex;
			.s2 {
				flex: 1;
				text-align: right;
				color: #62a7ff;
			}
		}
	}
}
</style>