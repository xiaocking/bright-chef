<template>
	<div id="Home">
		<header id="home_header">
			<h1 class="home_header_logo">明厨亮灶</h1>
			<nav id="nav">
				<div class="nav-box" v-if="dataOrMap">
					<div
						class="nav-item"
						v-for="item in gisNav"
						:key="item.id"
						:class="{'act':actGisNavIndex === item.id}"
						@click="navClick(item)"
					>
						<p class="nav-icon" v-show="actGisNavIndex !== item.id">
							<el-image :src="require('../assets/navIcon/'+item.icon+'.png')"></el-image>
						</p>
						<p class="nav-icon" v-show="actGisNavIndex === item.id">
							<el-image :src="require('../assets/navIcon/'+item.actIcon+'.png')"></el-image>
						</p>
						<p class="nav-tit">{{ item.name }}</p>
					</div>
				</div>
			</nav>
			<div class="home_header_menu">
				<ul class="clearfix">
					<li class="li1" v-if="dataOrMap" @click="headerMenuClick(1)">
						<i class="el-icon-s-data"></i>
					</li>
					<li class="li2" v-else @click="headerMenuClick(2)">
						<i class="el-icon-map-location"></i>
					</li>
					<li class="li3" @click="headerMenuClick(3)">
						<el-badge v-if="hasMessage" is-dot class="item">
							<i class="el-icon-message"></i>
						</el-badge>
						<i v-else class="el-icon-message"></i>
					</li>
					<li class="li4" @click="headerMenuClick(4)">
						<el-badge v-if="hasAlarm" is-dot class="item">
							<i class="el-icon-message-solid"></i>
						</el-badge>
						<i class="el-icon-message-solid" v-else></i>
					</li>
					<li class="li5">
						<div class="li5_img">
							<el-image
								style="width: 36px; height: 36px;border-radius:50%"
								:src="require('../assets/avatar.png')"
								fit="fill"
							></el-image>
						</div>
						<el-dropdown>
							<span class="el-dropdown-link">
								管理员
								<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>修改密码</el-dropdown-item>
								<el-dropdown-item>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
				</ul>
			</div>
		</header>
		<section id="home_content">
			<router-view />
		</section>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
const myStoreModule = namespace("myStore");

import gisNavList from "../assets/mockDb/gisNavList.js";

interface Inav {
	name: string;
	id: number;
	icon: string;
	actIcon: string;
}

@Component({})
export default class Home extends Vue {
	$message;
	$router;
	$store;

	private headerMenuClick(num: number): void {
		switch (num) {
			case 1:
				this.$router.push("/dataHome");
				this.changeMode(num);
				this.navClick({ id: 1 });
				break;
			case 2:
				this.$router.push("/gisHome");
				this.changeMode(num);
				break;
			case 3:
				this.$message.success("显示通知信息");
				break;
			case 4:
				this.$message.success("显示告警信息");
				break;
			default:
				console.log(num);
				break;
		}
	}

	@myStoreModule.State("actGisNavIndex") actGisNavIndex;
	@myStoreModule.State("hasMessage") hasMessage;
	@myStoreModule.State("hasAlarm") hasAlarm;
	@myStoreModule.State("dataOrMap") dataOrMap;
	@myStoreModule.Mutation("changeGisNav") changeGisNav;
	@myStoreModule.Mutation("changeMode") changeMode;

	private navClick(data) {
		if (this.actGisNavIndex == data.id) {
			return false;
		}
		this.changeGisNav(data.id);
	}

	get gisNav(): Inav[] {
		return gisNavList;
	}
}
</script>

<style lang="scss" scoped>
#Home {
	height: 100%;
	position: relative;

	#home_header {
		display: flex;
		height: 98px;
		background: $color;
		color: #fff;
		position: relative;
		z-index: 100;
		h1 {
			height: 98px;
			line-height: 98px;
			font-size: 30px;
			width: 266px;
			text-align: center;
			background: rgba(98, 167, 255, 1);
			box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
			letter-spacing: 4px;
		}
		nav#nav {
			flex: 1;
			display: flex;
			.nav-box {
				flex: 1;
				display: flex;
				padding: 0 30px;
			}
			.nav-item {
				flex: 1;
				margin-left: 15px;
				display: flex;
				flex-direction: column;
				align-content: center;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				.nav-icon {
					width: 38px;
					height: 38px;
					margin-bottom: 15px;
				}
				&:first-child {
					margin-left: 0;
				}
				&.act {
					background: rgba(223, 237, 255, 0.2);
					color: $text-nav-active-color;
				}
			}
		}
		.home_header_menu {
			padding: 29px 0;
			margin: 0 20px;
			li {
				float: left;
			}
			.li1,
			.li2,
			.li3,
			.li4 {
				font-size: 20px;
				cursor: pointer;
				margin-right: 20px;
				padding: 8px 0;
			}
			.li5 {
				position: relative;
				padding-left: 45px;
				line-height: 36px;
				.li5_img {
					position: absolute;
					top: 0;
					left: 0;
				}
			}
			.el-dropdown {
				color: #fff;
			}
		}
	}
	#home_content {
		height: calc(100% - 98px);
	}
}
</style>