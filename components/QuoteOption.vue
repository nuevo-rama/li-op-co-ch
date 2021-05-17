<template>
	<div class="cuote-option">
		<div class="shipping"><h4>{{value.descripcion}}</h4></div>
			<div class="total" v-if="value.Total===0"><h4>Gratis</h4></div>
			<div class= "total" v-else><h4>$ {{value.Total}}</h4></div>
		<div class= "shipping-time"><h4>{{value.PlazoEntrega}}</h4></div>
	</div>
</template>

<script>
	
export default {
	
	props: {
		value: {
			type: Object,
			required: true
		}
	}

}

</script>

<style lang="scss" scoped>
</style>
