<template>
	<div ref="myChart" id="Alarm"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Echart from "echarts";

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

interface Iobj {
	xList: string[];
	type1: number[];
	type2: number[];
	type3: number[];
	type4: number[];
	type5: number[];
}

@Component
export default class Alarm extends Vue {
	@Prop(Array) readonly chartData!: Idata[];

	private colorList = [
		"#84BD41",
		"#62A7FF",
		"#5CC152",
		"#F7B332",
		"#F5797B",
		"#50B494",
		"#38C6CA"
	];

	private init() {
		const myChart = Echart.init(this.$refs.myChart);

		const obj: Iobj = {
			xList: [],
			type1: [],
			type2: [],
			type3: [],
			type4: [],
			type5: []
		};

		for (const val of this.chartData) {
			obj.xList.push(val.time);
			obj.type1.push(val.type1);
			obj.type2.push(val.type2);
			obj.type3.push(val.type3);
			obj.type4.push(val.type4);
			obj.type5.push(val.type5);
		}

		const option = {
			color: this.colorList,
			title: {
				text: "告警类型",
				left: 0
			},
			legend: {
				data: ["活杀", "野生", "口罩", "头帽", "工衣"],
				right: 0
			},
			xAxis: {
				type: "category",
				boundaryGap: false,
				data: obj.xList
			},
			yAxis: {
				type: "value"
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				top: "15%",
				containLabel: true
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					type: "cross",
					label: {
						backgroundColor: "#6a7985"
					}
				}
			},
			series: [
				{
					data: obj.type1,
					name: "活杀",
					type: "line",
					smooth: true
				},
				{
					data: obj.type2,
					name: "野生",
					type: "line",
					smooth: true
				},
				{
					data: obj.type3,
					name: "口罩",
					type: "line",
					smooth: true
				},
				{
					data: obj.type4,
					name: "头帽",
					type: "line",
					smooth: true
				},
				{
					data: obj.type5,
					name: "工衣",
					type: "line",
					smooth: true
				}
			]
		};

		myChart.setOption(option);
	}

	mounted() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>
#Alarm {
	height: 100%;
}
</style>