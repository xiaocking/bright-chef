<template>
	<MyDialog :title="title" @closeDialog="closeDialog">
		<div class="details">
			<div class="details-header">
				<h2 class="h2_tit">{{ detailsInfo.name }}</h2>

				<p class="header-p p-status">
					<el-row :gutter="20">
						<el-col :span="12">{{ detailsInfo.done==1?'未检查':"已检查" }}</el-col>
						<el-col :span="12">
							<span v-if="detailsInfo.done==2">是否合格：{{ detailsInfo.status==1?'合格':'不合格' }}</span>
						</el-col>
					</el-row>
				</p>
				<p class="header-p p-time" v-if="detailsInfo.done==2">检查时间：{{ detailsInfo.passTime }}</p>
			</div>
			<div class="details-content">
				<h3 class="h3_tit">检查内容</h3>
				<div class="details-item" v-for="(item,key) in detailsItem[detailsInfo.done]" :key="key">
					<p class="item-p item-name">{{item.name}}</p>
					<p class="item-p item-status">{{item.status}}</p>
					<p class="item-p item-img" v-if="detailsInfo.done==2">
						<el-image :src="require(`../../../.../../../../assets/images/${item.img}`)"></el-image>
					</p>
					<p class="item-p item-remark" v-if="detailsInfo.done==2">{{ item.remark}}</p>
				</div>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import person from "../../../../../assets/mockDb/person.js";

@Component
export default class PatrolDetails extends Vue {
	$message;
	@Prop(Object) readonly detailsInfo;
	private title = "详情";
	private detailsItem = {
		1: [
			{
				name: "餐馆卫生情况",
				status: "未检查",
				img: "",
				remark: ""
			},
			{
				name: "人员着装",
				status: "未检查",
				img: "",
				remark: ""
			},
			{
				name: "人员体温",
				status: "未检查",
				img: "",
				remark: ""
			}
		],
		2: [
			{
				name: "餐馆卫生情况",
				status: "达标",
				img: "qt01.jpg",
				remark:
					"餐馆地面无垃圾堆积，桌椅干净，厨房经过消毒处理，卫生情况达到规定标准；检验合格"
			},
			{
				name: "人员着装",
				status: "达标",
				img: "hc01.jpg",
				remark: "餐馆人员有正确穿着工衣、工帽、佩戴口罩；检验合格"
			},
			{
				name: "人员体温",
				status: "达标",
				img: "hc01.jpg",
				remark: "餐馆人员体温检测正常、无提体温超标；检验合格"
			}
		]
	};

	// @Emit("changeModel")
	// changeModel(key) {
	// 	return [...this.detailsInfo, key];
	// }

	get personObj() {
		return person;
	}

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
	mounted() {
		this.title = this.detailsInfo.name + "检查详情";
	}
}
</script>

<style lang="scss" scoped>
.details {
	.details-header {
		margin-bottom: 15px;
		padding-bottom: 15px;
		border-bottom: 1px solid #ccc;
		.h2_tit {
			font-size: 18px;
			color: $color;
			font-weight: bold;
			height: 36px;
			line-height: 36px;
			border-bottom: 1px solid #ccc;
			margin-bottom: 15px;
		}
		.header-p {
			margin-top: 10px;

			&:first-child {
				margin-top: 0;
			}
		}
	}
	.details-content {
		.h3_tit {
			font-size: 16px;
			margin-bottom: 15px;
			color: $color;
		}
		.details-item {
			margin-top: 15px;
			padding: 15px;
			border: 1px solid #ccc;
			border-radius: 10px;
			.item-p {
				margin-top: 10px;
				&:first-child {
					margin-top: 0;
				}
			}
			&:first-child {
				margin-top: 0;
			}
		}
	}
}
</style>