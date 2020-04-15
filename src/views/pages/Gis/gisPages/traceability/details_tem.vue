<template>
	<MyDialog :title="detailsInfo.name" @closeDialog="closeDialog">
		<div class="details">
			<div class="details-header">
				<p class="header-p details-leaderPerson">
					<el-row :gutter="20">
						<el-col :span="12">
							<span>负责人：{{ detailsInfo.leaderName }}</span>
						</el-col>
						<el-col :span="12">
							联系电话：{{ detailsInfo.leaderTel }}
							<span
								@click="doTel(detailsInfo.leaderTel)"
								class="tel el-icon-phone-outline"
							></span>
						</el-col>
					</el-row>
				</p>
				<p class="header-p details-address">地址：{{ detailsInfo.address }}</p>
			</div>
			<div class="details-content">
				<h3 class="h3_tit">食材采购清单</h3>
				<div class="content-time">
					采购日期：
					<el-select v-model="curIndex" placeholder="请选择" @change="selectChange">
						<el-option
							v-for="(item,key) in details.details[detailsInfo.id]"
							:key="key"
							:label="item.time"
							:value="key"
						></el-option>
					</el-select>
				</div>
				<div class="stockDetails">
					<!-- <p class="stock-p stock-time">{{ dataObj.time }}</p> -->
					<p class="stock-p stock-name">
						<el-row :gutter="20">
							<el-col :span="12">
								<span>采购人：{{ dataObj.stockPerson }}</span>
							</el-col>
							<el-col :span="12">
								采购人电话：{{ dataObj.stockPersonTel }}
								<span
									@click="doTel(dataObj.stockPersonTel)"
									class="tel el-icon-phone-outline"
								></span>
							</el-col>
						</el-row>
					</p>
					<p class="stock-p stock-num">
						<el-row :gutter="20">
							<el-col :span="12">采购单号：{{ dataObj.singleNum }}</el-col>
							<el-col :span="12">
								<span>采购食材数： {{ dataObj.stockNum }}</span>
							</el-col>
						</el-row>
					</p>
					<p class="stock-p stock-singleNum"></p>
					<p class="stock-p stock-buyer">采购处：{{ dataObj.buyer }}</p>
					<p class="stock-p stock-buyerPerson">
						<el-row :gutter="20">
							<el-col :span="12">
								<span>采购处负责人：{{ dataObj.buyerPerson }}</span>
							</el-col>
							<el-col :span="12">
								采购处负责人电话：{{ dataObj.buyerPersonTel }}
								<span
									@click="doTel(dataObj.buyerPersonTel)"
									class="tel el-icon-phone-outline"
								></span>
							</el-col>
						</el-row>
					</p>
				</div>
				<div class="stockList">
					<el-table :data="dataObj.stockList" style="width: 100%">
						<el-table-column prop="name" label="食材名"></el-table-column>
						<el-table-column prop="num" label="采购数" width="100">
							<template slot-scope="scope">
								<span>{{ scope.row.ShelfLife+'斤' }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="typeName" label="类型"></el-table-column>
						<el-table-column prop="methodName" label="保存方式"></el-table-column>
						<el-table-column prop="ShelfLife" label="保质期" width="100">
							<template slot-scope="scope">
								<span>{{ scope.row.ShelfLife+'天' }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="ProductionDate" label="生产日期" width="160"></el-table-column>
						<el-table-column prop="ExpirationDate" label="过期日期" width="160"></el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import traceabilityDetails from "../../../../../assets/mockDb/traceability.js";

@Component
export default class TraceabilityDetails extends Vue {
	$message;

	@Prop(Object) readonly detailsInfo;

	private curIndex = 0;
	private dataObj = {
		stockList: []
	};

	private selectChange(val) {
		this.dataObj = this.details.details[this.detailsInfo.id][val];
	}

	private doTel(val) {
		this.$message.success("拨打电话 " + val);
	}

	get details() {
		return traceabilityDetails;
	}

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}

	created() {
		this.selectChange(0);
	}
}
</script>

<style lang="scss" scoped>
.details {
	overflow: hidden;
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
	.details-header {
		margin-bottom: 15px;
		padding-bottom: 15px;
		border-bottom: 1px solid #ccc;
		.header-p {
			margin-top: 10px;
			&:first-child {
				margin-top: 0;
			}
		}
	}
	.details-content {
		.content-time {
			margin-bottom: 15px;
		}
		.stock-p {
			margin-top: 10px;
			&:first-child {
				margin-top: 0;
			}
		}
		.stockList {
			margin-top: 15px;
		}
	}
}
</style>