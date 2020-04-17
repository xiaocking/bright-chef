<template>
	<div ref="myChart" id="Meals"></div>
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
export default class Meals extends Vue {
	@Prop(Array) readonly chartData!: Idata[];

	private colorList = ["#62A7FF", "#67E0E3", "#60DA65"];

	private init() {
		const myChart = Echart.init(this.$refs.myChart);

		const obj: Iobj = {
			xList: [],
			num: []
		};

		for (const val of this.chartData) {
			obj.xList.push(val.type);
		}

		const option = {
			color: this.colorList,
			title: {
				text: "餐馆类型"
			},
			tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				data: obj.xList
			},
			series: [
				{
					name: "餐馆类型",
					type: "pie",
					radius: ["50%", "70%"],
					center: ["50%", "50%"],
					label: {
						show: false,
						position: "center"
					},
					emphasis: {
						label: {
							show: true,
							fontSize: "20",
							fontWeight: "bold"
						}
					},
					data: this.chartData
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