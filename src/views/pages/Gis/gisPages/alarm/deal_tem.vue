<template>
	<MyDialog :title="title" @closeDialog="closeDialog">
		<div class="details">
			<el-form
				:model="dataForm"
				:rules="rules"
				ref="dataForm"
				label-width="100px"
				:disabled="disabled"
			>
				<el-form-item label="告警类型" prop="alarmType">
					<el-select
						v-model="dataForm.alarmType"
						placeholder="请选择"
						style="width:100%"
						@change="alarmTypeChange"
						disabled
					>
						<el-option v-for="item in alarmTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="告警时间" prop="alarmTime">
					<el-input v-model="dataForm.alarmTime" disabled></el-input>
				</el-form-item>
				<el-form-item label="说明" prop="remark">
					<el-input type="textarea" v-model="dataForm.remark" disabled></el-input>
				</el-form-item>
				<el-form-item label="处理人员" prop="personId">
					<el-select v-model="dataForm.personId" placeholder="请选择" style="width:100%">
						<el-option v-for="item in DptPerson" :key="item.id" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="处理措施" prop="dealEasesure">
					<el-input type="textarea" v-model="dataForm.dealEasesure"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<template slot="footer">
			<el-button type="primary" @click="submitForm('dataForm')" v-if="!showDeal">提交处理</el-button>
		</template>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModel = namespace("myStore");

import personList from "../../../../../assets/mockDb/person.js";
import alarmType from "../../../../../assets/mockDb/alarmType.js";
import tools from "../../../../../lib/tools.js";

interface IalarmDetails {
	name: string;
	alarmType: number;
	alarmTime: string;
	dealType: number;
	dealTypeName: string;
	dealTime: string;
	id: number;
	dealEasesure: string;
	personId: number;
	remark: string;
	[prop: string]: string | number;
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
	$message;
	@Prop(Array) readonly detailsInfo!: [ImealsDataObj, IalarmDetails, number];

	private title = "";
	private rules = {
		alarmType: { required: true, message: "该项为必填项", trigger: "blur" },
		alarmTime: { required: true, message: "该项为必填项", trigger: "blur" },
		person: { required: true, message: "该项为必填项", trigger: "blur" },
		dealEasesure: { required: true, message: "该项为必填项", trigger: "blur" }
	};
	private disabled = true;
	private showDeal = true;
	private dataForm = {
		alarmType: "",
		alarmTime: "",
		personId: 0,
		dealEasesure: "",
		remark: ""
	};

	private alarmTypeChange(val) {
		// remark
		this.dataForm.remark = this.alarmTypeList[val].remark;
	}

	private submitForm(formName) {
		(this.$refs[formName] as HTMLFormElement).validate(valid => {
			if (valid) {
				this.submitInfo();
			} else {
				console.log("error submit!!");
				return false;
			}
		});
	}

	private submitInfo() {
		const details = JSON.parse(sessionStorage.alarmDetails);
		const OdetailsData = this.detailsInfo[1];
		OdetailsData.dealType = 2; // 处理中
		OdetailsData.dealTypeName = "处理中"; // 处理中
		OdetailsData.dealTime = tools.dateFormat();
		OdetailsData.personId = this.dataForm.personId;
		OdetailsData.dealEasesure = this.dataForm.dealEasesure;
		details[this.detailsInfo[0].id].splice(
			this.detailsInfo[2],
			1,
			OdetailsData
		);

		const OcoverData = JSON.parse(sessionStorage.coverData);
		const Odata = OcoverData[1];
		let flag = true;
		for (const val of details[Odata.id]) {
			if (val.dealType == 1) {
				flag = false;
				break;
			}
		}
		if (flag) {
			Odata.alarmType = 3;
			OcoverData.splice(1, 1, Odata);
		}
		this.$message.success("告警处理成功");
		sessionStorage.alarmDetails = JSON.stringify(details);
		sessionStorage.coverData = JSON.stringify(OcoverData);
		this.closeDialog();
		this.getCoverData();
		this.setMapCoverInfo();
	}

	get DptPerson() {
		return personList.deptPerson;
	}

	get alarmTypeList() {
		return alarmType;
	}

	@myStoreModel.Mutation("setMapCoverInfo") setMapCoverInfo;

	@Emit("closeDialog")
	closeDialog(e?: MouseEvent) {
		return e;
	}

	@Emit("getCoverData") private getCoverData(e?: MouseEvent) {
		return e;
	}

	private dataFormInit() {
		const formKey = Object.keys(this.dataForm);

		for (const val of formKey) {
			if (this.detailsInfo[1][val]) {
				this.dataForm[val] = this.detailsInfo[1][val];
			}
		}
	}

	private init() {
		this.title = this.detailsInfo[0].name + "-告警信息";
		this.dataFormInit();
		if (this.detailsInfo[1].dealType == 1) {
			this.showDeal = false;
			this.disabled = false;
		}
	}

	created() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>
</style>