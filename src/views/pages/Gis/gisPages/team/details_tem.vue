<template>
	<MyDialog :title="detailsInfo.name" @closeDialog="closeDialog">
		<div class="details">
			<div class="team-details">
				<p class="details-p team-leader">所属部门：{{ detailsInfo.department }}</p>
				<el-row :gutter="20" class="details-p">
					<el-col :span="12">负责人：{{ detailsInfo.leaderPerson }}</el-col>
					<el-col :span="12">
						负责人电话：{{ detailsInfo.leaderTel }}
						<span
							@click="doTel(detailsInfo.leaderTel)"
							class="tel el-icon-phone-outline"
						></span>
					</el-col>
				</el-row>
				<p class="details-p team-remark">备注：{{ detailsInfo.remark }}</p>
			</div>
			<div class="team-person">
				<h3 class="h3_tit">队伍人员</h3>
				<div class="person-p" v-for="item in personObj.teamPerson[detailsInfo.id]" :key="item.id">
					<el-row :gutter="20">
						<el-col :span="12">
							<span>姓名：{{ item.name }}</span>
						</el-col>
						<el-col :span="12">
							联系电话：{{ item.tel }}
							<span @click="doTel(item.tel)" class="tel el-icon-phone-outline"></span>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import person from "../../../../../assets/mockDb/person.js";

@Component
export default class TeamDetails extends Vue {
	$message;

	@Prop(Object) readonly detailsInfo;

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
}
</script>

<style lang="scss" scoped>
.details {
	.details-p {
		margin-top: 10px;
		&:first-child {
			margin-top: 0;
		}
	}
	.team-details {
		margin-bottom: 15px;
	}
	.person-p {
		margin-bottom: 10px;
		:last-child {
			margin-bottom: 0;
		}
	}
	.h3_tit {
		font-size: 16px;
		margin-bottom: 15px;
		color: $color;
	}
	.tel {
		margin-left: 10px;
		cursor: pointer;
		&:hover {
			color: $color;
		}
	}
}
</style>