<template>
	<MyDialog :title="detailsInfo.name" @closeDialog="closeDialog">
		<div class="mealDetails">
			<div class="mealDetails-header">
				<div class="mealDetails-deader-item">
					<p class="item-icon">
						<el-image :src="require('@/assets/icon/icon02.png')"></el-image>
					</p>
					<p class="item-tit">员工数</p>
					<p class="item-num">{{detailsInfo.personNum}}</p>
				</div>
				<div class="mealDetails-deader-item">
					<p class="item-icon">
						<el-image :src="require('@/assets/icon/icon03.png')"></el-image>
					</p>
					<p class="item-tit">摄像头数</p>
					<p class="item-num">{{detailsInfo.diviceNum}}</p>
				</div>
				<div class="mealDetails-deader-item">
					<p class="item-icon">
						<el-image :src="require('@/assets/icon/icon04.png')"></el-image>
					</p>
					<p class="item-tit">投诉数</p>
					<p class="item-num">{{detailsInfo.complaint}}</p>
				</div>
				<div class="mealDetails-deader-item">
					<p class="item-icon">
						<el-image :src="require('@/assets/icon/icon07.png')"></el-image>
					</p>
					<p class="item-tit">自检数</p>
					<p class="item-num">{{detailsInfo.inspect}}</p>
				</div>
			</div>
			<div class="mealDetails-content">
				<el-row class="content-item" :gutter="20">
					<el-col :span="12">
						<span class="s1">负责人：</span>
						<span class="s2">{{ detailsInfo.leaderName }}</span>
					</el-col>
					<el-col :span="12">
						<span class="s1">联系方式：</span>
						<span class="s2">{{ detailsInfo.leaderTel }}</span>
						<span @click="doTel(detailsInfo.leaderTel)" class="s3 el-icon-phone-outline"></span>
					</el-col>
				</el-row>
				<el-row class="content-item" :gutter="20">
					<el-col :span="12">
						<span class="s1">地址：</span>
						<span class="s2">{{ detailsInfo.address }}</span>
					</el-col>
					<el-col :span="12">
						<span class="s1">地图坐标：</span>
						<span class="s2">{{ detailsInfo.lng+' , '+detailsInfo.lat }}</span>
					</el-col>
				</el-row>
				<el-row class="content-item" :gutter="20">
					<el-col :span="12">
						<span class="s1">餐厅类别：</span>
						<span class="s2">{{ detailsInfo.footType == 1? '西餐' :'中餐' }}</span>
					</el-col>
					<el-col :span="12">
						<span class="s1">餐厅面积：</span>
						<span class="s2">{{ detailsInfo.area }}m²</span>
					</el-col>
				</el-row>
				<el-row class="content-item" :gutter="20">
					<el-col :span="12">
						<span class="s1">营业执照：</span>
						<el-image
							style="width:30px;height:20px"
							:preview-src-list="srcList"
							:src="require('@/assets/images/'+detailsInfo.businessLicenseImgId+'.jpg')"
						></el-image>
					</el-col>
					<el-col :span="12">
						<span class="s1">卫生许可证：</span>
						<el-image
							style="width:30px;height:20px"
							:preview-src-list="srcList"
							:src="require('@/assets/images/'+detailsInfo.HealthPermitImgId+'.jpg')"
						></el-image>
					</el-col>
				</el-row>
				<el-row class="content-item" :gutter="20">
					<el-col :span="4" style="width:90px;line-height:20px">餐厅评分：</el-col>
					<el-col :span="20">
						<el-rate
							v-model="detailsInfo.score"
							disabled
							show-score
							text-color="#ff9900"
							score-template="{value}"
						></el-rate>
					</el-col>
				</el-row>
				<el-row class="content-item" :gutter="20">
					<el-col :span="24">
						<span class="s1">备注：</span>
						<span class="s2">{{ detailsInfo.remark }}</span>
					</el-col>
				</el-row>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class MealDetails extends Vue {
	$message;

	private srcList = [];

	private doTel(val) {
		this.$message.success("拨打电话 " + val);
	}

	@Prop(Object) readonly detailsInfo!: object;

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
}
</script>

<style lang="scss" scoped>
.mealDetails {
	.mealDetails-header {
		display: flex;
		margin-bottom: 20px;
		.mealDetails-deader-item {
			flex: 1;
			margin: 0 10px;
			position: relative;
			height: 80px;
			padding: 15px;
			border: 1px solid rgba(98, 167, 255, 1);
			border-radius: 2px;
			.item-icon {
				position: absolute;
				left: 15px;
				top: 15px;
				width: 48px;
				height: 48px;
			}
			.item-tit {
				text-align: right;
				margin-bottom: 5px;
			}
			.item-num {
				text-align: right;
				font-size: 26px;
			}
		}
	}
	.mealDetails-content {
		padding: 0 15px;
		.content-item {
			margin-bottom: 15px;
			.s3 {
				margin-left: 20px;
				cursor: pointer;
				&:hover {
					color: $color;
				}
			}
		}
	}
}
</style>