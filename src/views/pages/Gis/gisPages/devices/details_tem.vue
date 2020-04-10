<template>
	<div>
		<MyDialog width="980px" :title="detailsInfo.name" @closeDialog="closeDialog">
			<div class="Details">
				<div
					class="details-item"
					v-for="item in detailsInfo.deviceList"
					@click="showDevice(item)"
					:key="item.id"
				>
					<el-image style="width:300px;height:200px" :src="require('@/assets/images/'+item.path+'.jpg')"></el-image>
					<p class="item-tit">{{ item.name }}</p>
				</div>
			</div>
		</MyDialog>
		<MyDialog v-if="closeDeviceFlag" fullscreen :title="deviceTit" @closeDialog="closeDeviceDialog">
			<div class="fullscreenDevice">
				<el-image style="width:100%;height:100%" :src="require('@/assets/images/'+srcData.path+'.jpg')"></el-image>
			</div>
		</MyDialog>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

interface Idevic {
	name: string;
	id: number;
	path: string;
	[a: string]: number | string;
}

interface Idevice {
	name: string;
	id: number;
	address: string;
	coverType: number;
	lng: number;
	lat: number;
	remark: string;
	deviceList: Idevic[];
}

@Component
export default class MealDetails extends Vue {
	@Prop(Object) readonly detailsInfo!: Idevice;

	private closeDeviceFlag = false;
	private deviceTit = "";
	private srcData: Idevic = {
		name: "1",
		id: 1,
		path: "qt01"
	};

	private closeDeviceDialog() {
		this.closeDeviceFlag = false;
	}

	private showDevice(data: Idevic) {
		this.deviceTit = this.detailsInfo.name + "-" + data.name;
		this.srcData = data;
		this.closeDeviceFlag = true;
	}

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
}
</script>

<style lang="scss" scoped>
.Details {
	display: flex;
	width: 940px;
	flex-wrap: wrap;
	.details-item {
		width: 300px;
		height: 200px;
		margin-left: 20px;
		margin-bottom: 20px;
		position: relative;
		&:nth-child(3n + 1) {
			margin-left: 0;
		}
		.item-tit {
			position: absolute;
			left: 0;
			bottom: 0;
			height: 30px;
			width: 100%;
			line-height: 30px;
			text-indent: 20px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #fff;
			background: linear-gradient(
				180deg,
				rgba(229, 240, 255, 0) 0%,
				rgba(48, 52, 57, 0.61) 100%
			);
		}
	}
}
.fullscreenDevice {
	height: 100%;
	background: rgba($color: #000000, $alpha: 0.2);
}
</style>