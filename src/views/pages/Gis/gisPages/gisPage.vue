<template>
	<div class="GisPage">GisPage</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import mapInit from "../../../../lib/amapInit.js";

@Component
export default class GisPage extends Vue {
	mounted() {
		// mapInit.init();
		console.log(mapInit);
	}
}
</script>

<style lang="scss" scoped></style>