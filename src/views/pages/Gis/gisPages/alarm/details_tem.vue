<template>
	<MyDialog :title="detailsInfo.name" @closeDialog="closeDialog">
		<div class="details">{{ detailsInfo }}</div>
	</MyDialog>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class MealDetails extends Vue {
	@Prop(Object) readonly detailsInfo!: object;

	@Emit("closeDialog")
	closeDialog(e) {
		return e;
	}
}
</script>

<style lang="scss" scoped>
.details {
}
</style>