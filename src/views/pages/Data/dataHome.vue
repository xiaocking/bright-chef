<template>
	<div class="DataHome clearfix overflowCss">
		<div class="dataHome_left fl">
			<div class="nav_li" v-for="item in navMenu" :key="item.id">
				<p class="nav_li_p1" :class="{cur:item.id===curId }" @click="navMenuClick(1,item)">
					<el-image class="nav_icon" :src="require(`../../../assets/icon/${item.icon}.png`)"></el-image>
					<span class="nav_name">{{item.name}}</span>
				</p>
				<div class="navChildren" v-if="item.id===curId && item.hasChildren">
					<div class="navChildren-item" v-for="item2 in item.children" :key="item2.id">
						<p class="nav_li_p1" :class="{cur:item2.id===curId2 }" @click="navMenuClick(2,item2)">
							<i class="el-icon-menu" style="position:relative;top:2px;margin-right:5px;"></i>
							<span class="nav_name">{{item2.name}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="dataHome_right fr">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import navList from "../../../assets/mockDb/navList.js";

interface InavMenu {
	name: string;
	id: number;
	path: string;
	icon: string;
	hasChildren: boolean;
	children: Array<InavMenu>;
}

@Component
export default class DataHome extends Vue {
	$router;
	private navMenu = navList;

	private curId = 1;
	private curId2 = 0;
	private curPath = "";

	private init() {
		this.$router.push(this.navMenu[0].path);
	}

	private navMenuClick(num, data: InavMenu) {
		if (num == 1) {
			if (this.curId === data.id) {
				return false;
			}
			this.curId = data.id;
			this.curId2 = 0;

			if (this.curPath !== data.path) {
				this.curPath = data.path;
				this.$router.push({ path: "/" + data.path });
			}
		} else {
			if (this.curId2 === data.id) {
				return false;
			}
			this.curId2 = data.id;

			if (this.curPath !== data.path) {
				this.curPath = data.path;
				this.$router.push({ path: "/" + data.path });
			}
		}
	}

	created() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>
.DataHome {
	height: 100%;
	.dataHome_left {
		height: 100%;
		width: 266px;
		padding: 10px 0;
		.nav_li {
			border-top: 1px solid #eee;
			.nav_li_p1 {
				height: 47px;
				padding-left: 15px;
				cursor: pointer;
				.nav_icon {
					display: inline-block;
					vertical-align: middle;
					width: 24px;
					height: 24px;
					margin-right: 15px;
				}
				.nav_name {
					display: inline-block;
					vertical-align: middle;
					height: 47px;
					line-height: 47px;
				}
				&.cur,
				&:hover {
					background: $active-color;
					color: $color;
				}
			}
			&:first-child {
				border-top: none;
			}
			.navChildren {
				padding: 10px 5px;
				background: #f3f3f3;
				.navChildren-item {
					border-top: 1px solid #e9e9e9;
					.nav_li_p1 {
						padding-left: 30px;
					}
					&:last-child {
						border-bottom: 1px solid #e9e9e9;
					}
				}
			}
		}
	}
	.dataHome_right {
		height: 100%;
		width: calc(100% - 266px);
		background: #eef0f4;
		padding: 30px;
	}
}
</style>