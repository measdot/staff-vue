<template>
	<layout-golden class="main">
		<gl-stack>
			<gl-component title="Dashboard">
				<h2>CompA</h2>
			</gl-component>
		</gl-stack>
	</layout-golden>
</template>

<script>
import Vue from 'vue'
import vgl from 'vue-golden-layout'

Vue.use(vgl)
// vgl.init()
export default {
  name: 'dash-board'
}
</script>

<style lang="css">
	.main {
		top: 50px;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}
</style>





