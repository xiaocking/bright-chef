<template>
	<div>
		<div>
			<router-link to="/home">Home</router-link>|
			<router-link to="/about">About</router-link>
		</div>
		<div>
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Entrance extends Vue {}
</script>

<style lang="scss" scoped></style>