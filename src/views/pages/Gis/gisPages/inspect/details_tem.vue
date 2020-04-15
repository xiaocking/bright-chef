<template>
	<MyDialog :title="detailsInfo[0].name" @closeDialog="closeDialog">
		<div class="details">
			<div
				class="details-item"
				v-for="(item) in detailsInfo[1]"
				:key="item.id"
				:class="{'error':item.subType ==1,'warning':item.subType ==2}"
			>
				<el-row :gutter="20">
					<el-col :span="8">
						<p class="item-tit">状态：{{ item.subTypeName }}</p>
					</el-col>
					<el-col :span="8">
						<p class="item-time">最新提交时间：{{ item.time }}</p>
					</el-col>
				</el-row>
				<ul class="item-report">
					<li class="item-report-li" v-for="(item2,key2) in item.reportList" :key="key2">
						<el-row :gutter="20" style="margin-top:10px;">
							<el-col :span="4">
								<p class="item-tit">类型：{{ item2.typeName }}</p>
							</el-col>
							<el-col :span="6">
								<p class="item-status">状态：{{ item2.reportStatus===2?'已提交':"未提交" }}</p>
							</el-col>
							<el-col :span="4">
								<p class="item-seeReport" v-if="item2.reportStatus===2" @click="download(item2)">下载查看</p>
							</el-col>
							<el-col :span="10">
								<p class="item-time" v-if="item2.reportStatus===2">提交时间：{{ item2.subTime }}</p>
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
	@Prop(Array) readonly detailsInfo!: [ImealsDataObj, IinspectDetails];

	// @Emit("changeModel")
	// changeModel(key) {
	// 	return [...this.detailsInfo, key];
	// }

	private download(data) {
		this.$message.success("下载" + data.typeName + "报告查看");
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
		}
	}
}
</style>