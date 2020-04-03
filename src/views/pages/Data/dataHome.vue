<template>
	<div class="DataHome clearfix overflowCss">
		<div class="dataHome_left fl">
			<ul>
				<li class="nav_li" :class="{cur:item.id===curId }" v-for="item in navMenu" :key="item.id">
					<p class="nav_li_p1" @click="navMenuClick(item)">
						<el-image class="nav_icon" :src="require(`../../../assets/icon/${item.icon}.png`)"></el-image>
						<span class="nav_name">{{item.name}}</span>
					</p>
				</li>
			</ul>
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
	private curPath = "";

	private init() {
		this.$router.push(this.navMenu[0].path);
	}

	private navMenuClick(data: InavMenu) {
		if (this.curId === data.id) {
			return false;
		}
		this.curId = data.id;

		if (this.curPath !== data.path) {
			this.curPath = data.path;
			this.$router.push({ path: "/" + data.path });
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
				padding-left: 41px;
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
			}
			&:first-child {
				border-top: none;
			}
			&.cur,
			&:hover {
				.nav_li_p1 {
					background: $active-color;
					color: $color;
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