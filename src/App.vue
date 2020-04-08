<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import amapInit from '@/lib/amapInit.js'
export default Vue.extend({
	created(){
		amapInit.init()
	}
})
</script>

<style lang="scss">
@import "./lib/css/reset.scss";
</style>
