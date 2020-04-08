<template>
	<div ref="myChart" id="Complaint"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Echart from "echarts";

interface Idata {
	time: string;
	num: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[propName: string]: any;
}

interface Iobj {
	xList: string[];
	num: number[];
	allNum: number;
	indexNum: number[];
}

@Component
export default class Complaint extends Vue {
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
			num: [],
			allNum: 0,
			indexNum: []
		};

		for (const val of this.chartData) {
			obj.xList.push(val.time);
			obj.num.push(val.num);
			obj.indexNum.push(obj.allNum);
			obj.allNum += val.num;
		}
		obj.xList.push("总计");
		obj.num.push(obj.allNum);
		obj.indexNum.push(0);

		const option = {
			color: ["#F7B332"],
			title: {
				text: "投诉统计",
				fontSize: 14,
				fontWeight: 100
			},
			tooltip: {
				trigger: "axis",
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: function(params) {
					const tar = params[1];
					return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
				}
			},
			grid: {
				left: "3%",
				right: "4%",
				bottom: "3%",
				top: "15%",
				containLabel: true
			},
			xAxis: {
				type: "category",
				splitLine: { show: false },
				data: obj.xList
			},
			yAxis: {
				type: "value"
			},
			series: [
				{
					name: "辅助",
					type: "bar",
					stack: "总量",
					itemStyle: {
						barBorderColor: "rgba(0,0,0,0)",
						color: "rgba(0,0,0,0)"
					},
					emphasis: {
						itemStyle: {
							barBorderColor: "rgba(0,0,0,0)",
							color: "rgba(0,0,0,0)"
						}
					},
					data: obj.indexNum,
					barWidth: "20"
				},
				{
					name: "投诉数",
					type: "bar",
					stack: "总量",
					label: {
						show: true,
						position: "inside"
					},
					data: obj.num,
					barWidth: "20"
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
#Complaint {
	height: 100%;
}
</style>