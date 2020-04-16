<template>
	<MyDialog :title="myDetailsInfo[0].name" @closeDialog="closeDialog">
		<div class="details">
			<div
				class="details-item"
				v-for="(item,key) in myDetailsInfo[1]"
				:key="key"
				:class="{'error':item.subType ==1,'warning':item.subType ==2}"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<p class="item-tit">状态：{{ item.subTypeName }}</p>
					</el-col>
					<el-col :span="16">
						<p class="item-time">提交时间：{{ item.time }}</p>
					</el-col>
				</el-row>
				<ul class="item-report">
					<li class="item-report-li" v-for="(item2,key2) in item.reportList" :key="key2">
						<el-row :gutter="20" style="margin-top:10px;">
							<el-col :span="4">
								<p class="item-tit">类型：{{ item2.typeName }}</p>
							</el-col>
							<el-col :span="4">
								<p class="item-status">状态：{{ item2.reportStatus===2?'已提交':"未提交" }}</p>
							</el-col>
							<el-col :span="3">
								<p class="item-seeReport" v-if="item2.reportStatus===2" @click="download(item2)">下载查看</p>
							</el-col>
							<el-col :span="8">
								<p class="item-time" v-if="item2.reportStatus===2">提交时间：{{ item2.subTime }}</p>
							</el-col>
							<el-col :span="5">
								<div v-if="item2.reportStatus===2">
									<p class="p1" v-if="item2.done == 0">
										<span
											style="margin-right:15px;"
											class="item-seeReport normal"
											@click="done(1,key,key2,item2)"
										>审核通过</span>
										<span class="item-seeReport error" @click="done(2,key,key2,item2)">驳回整改</span>
									</p>
									<p v-else>
										<span>{{ doneType[item2.done] }}</span>
									</p>
								</div>
							</el-col>
						</el-row>
					</li>
				</ul>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

interface IinspectDetails2 {
	type: number;
	id: number;
	typeName: string;
	reportStatus: number;
	reportId: string;
}

interface IinspectDetails {
	time: string;
	subType: number;
	id: number;
	reportList: IinspectDetails2[];
}

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

@Component
export default class InspectDetails extends Vue {
	$message;
	@Prop(Array) detailsInfo!: [ImealsDataObj, IinspectDetails];

	// @Emit("changeModel")
	// changeModel(key) {
	// 	return [...this.detailsInfo, key];
	// }
	private dataObj = this.detailsInfo[1];
	get myDetailsInfo() {
		return [this.detailsInfo[0], this.dataObj];
	}

	private doneType = {
		0: "未审核",
		1: "审核通过",
		2: "已驳回"
	};

	private download(data) {
		this.$message.success("下载" + data.typeName + "报告查看");
	}

	private done(num, key, key2, data) {
		const OInspectDetails = JSON.parse(sessionStorage.inspectDetails);
		const Odata = { ...data };
		if (num == 1) {
			// 通过
			this.$message.success(data.typeName + " 报告审核通过");
			Odata.done = 1;
		} else {
			// 驳回
			this.$message.success(
				"已驳回 " + data.typeName + " 报告并通知负责人重新检查"
			);
			Odata.done = 2;
		}
		OInspectDetails[this.myDetailsInfo[0].id][key].reportList.splice(
			key2,
			1,
			Odata
		);
		sessionStorage.inspectDetails = JSON.stringify(OInspectDetails);
		this.dataObj[key].reportList.splice(key2, 1, Odata);
	}

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
}
</script>

<style lang="scss" scoped>
.details {
	.details-item {
		padding: 15px;
		background: $active-color;
		margin-bottom: 15px;
		border-radius: 7px;
		&.error {
			background: $error-color;
		}
		&.warning {
			background: $warning-color;
		}
		.item-seeReport {
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
			&.error {
				color: $error-color;
			}
			&.normal {
				color: $color;
			}
		}
	}
}
</style>