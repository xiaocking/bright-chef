<template>
	<MyDialog :title="title" @closeDialog="closeDialog">
		<div class="details">
			<div class="details-header">
				<h2 class="h2_tit">{{ detailsInfo[0].name }}</h2>
				<p class="details-header-p details-planEnd">计划状态：{{ detailsInfo[0]. statusName}}</p>
				<p class="details-header-p details-planStatus">
					<el-row :gutter="20">
						<el-col :span="12">开始时间：{{ detailsInfo[1].beginTime }}</el-col>
						<el-col :span="12">结束时间：{{ detailsInfo[1].finishTime }}</el-col>
					</el-row>
				</p>
				<p class="details-header-p details-planRemark">{{ detailsInfo[0].remark }}</p>
			</div>
			<div class="details-content">
				<div class="details-patrolPerson">
					<h3 class="h3_tit">巡检人员</h3>
					<div
						class="patrolPerson-item"
						v-for="item in personObj.teamPerson[detailsInfo[1].patrolTeamId]"
						:key="item.id"
					>
						<el-row :gutter="20">
							<el-col :span="12">姓名：{{ item.name }}</el-col>
							<el-col :span="12">
								联系电话：{{ item.tel }}
								<span @click="doTel(item.tel)" class="tel el-icon-phone-outline"></span>
							</el-col>
						</el-row>
					</div>
				</div>
				<div class="details-meals">
					<h3 class="h3_tit">巡查点</h3>
					<div class="meals-item" v-for="item in detailsInfo[1].pass" :key="item.id">
						<p class="item-p item-name">{{ item.name }}</p>
						<p class="item-p item-done">
							<el-row :gutter="20">
								<el-col :span="12">{{ item.done==2?'已检查':'未检查' }}</el-col>
								<el-col :span="12">
									<span
										v-if="item.done == 2"
										class="item-status"
										:class="{'normal':item.status == 1}"
									>是否合格：{{ item.status == 1?'合格':'不合格' }}</span>
								</el-col>
							</el-row>
						</p>
						<p class="item-p item-time" v-if="item.done == 2">检查时间：{{ item.passTime }}</p>
						<p class="item-p item-remark" v-if="item.done == 2">描述：{{ item.remark }}</p>
					</div>
				</div>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import person from "../../../../../assets/mockDb/person.js";

@Component
export default class AlarmDetails extends Vue {
	$message;
	@Prop(Array) readonly detailsInfo;
	private title = "详情";

	// @Emit("changeModel")
	// changeModel(key) {
	// 	return [...this.detailsInfo, key];
	// }

	private doTel(val) {
		this.$message.success("拨打电话 " + val);
	}

	get personObj() {
		return person;
	}

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
	mounted() {
		console.log(this.detailsInfo);
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
		.details-header-p {
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
		.details-patrolPerson {
			margin-bottom: 15px;
			padding-bottom: 15px;
			border-bottom: 1px dashed #ccc;
			.patrolPerson-item {
				margin-top: 10px;
				&:first-child {
					margin-top: 0;
				}
			}
			.tel {
				margin-left: 10px;
				cursor: pointer;
				&:hover {
					color: $color;
				}
			}
		}
		.meals-item {
			padding: 15px;
			border: 1px solid #ccc;
			margin-top: 10px;
			border-radius: 10px;
			.item-p {
				margin-top: 10px;
				&:first-child {
					margin-top: 0px;
				}
			}
			.item-status {
				color: $error-color;
				&.normal {
					color: $color;
				}
			}

			&:first-child {
				margin-top: 0px;
			}
		}
	}
}
</style>