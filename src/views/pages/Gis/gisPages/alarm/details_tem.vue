<template>
	<MyDialog :title="detailsInfo.name" @closeDialog="closeDialog">
		<div class="details">
			<div
				class="details-item"
				v-for="(item,key) in detailsInfo.alarmList"
				:key="item.id"
				:class="{'error':item.dealType ==1,'warning':item.dealType ==2}"
				@click="changeModel([detailsInfo,item,key])"
			>
				<el-row :gutter="20" style="margin-bottom:10px;">
					<el-col :span="8">
						<p class="item-tit">状态：{{ item.dealTypeName }}</p>
					</el-col>
					<el-col :span="8">
						<p class="item-time">告警时间：{{ item.alarmTime }}</p>
					</el-col>
					<el-col :span="8">处理时间：{{ item.dealTime }}</el-col>
				</el-row>
				<p class="item-remark">说明：{{ item.remark }}</p>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

interface IalarmDetails {
	name: string;
	alarmType: string;
	alarmTime: string;
	dealType: string;
	dealTypeName: string;
	dealTime: string;
	dealEasesure: string;
	remark: string;
	[prop: string]: string;
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
	alarmList: IalarmDetails[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[a: string]: any;
}

@Component
export default class AlarmDetails extends Vue {
	@Prop(Object) readonly detailsInfo!: ImealsDataObj;

	@Emit("changeModel")
	changeModel(data) {
		return data;
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
	}
}
</style>