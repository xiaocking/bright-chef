<template>
	<div ref="myChart" id="Score"></div>
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
}

@Component
export default class Score extends Vue {
	@Prop(Array) readonly chartData!: Idata[];

	private init() {
		const myChart = Echart.init(this.$refs.myChart);

		const obj: Iobj = {
			xList: [],
			num: []
		};

		for (const val of this.chartData) {
			obj.xList.push(val.level);
			obj.num.push(val.num);
		}

		const option = {
			color: ["#62A7FF"],
			title: {
				text: "评分统计",
				fontSize: 14,
				fontWeight: 100
			},
			tooltip: {
				trigger: "axis"
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
					data: obj.num,
					type: "bar",
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
#Score {
	height: 100%;
}
</style>