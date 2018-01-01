<template>
	<layout-golden class="main">
		<gl-stack>
			<gl-component title="Dashboard">
				<ui-component></ui-component>
			</gl-component>
		</gl-stack>
	</layout-golden>
</template>

<script>
import Vue from 'vue'
import vgl from 'vue-golden-layout'

import UiComponent from './UiComponent'
Vue.use(vgl)
// vgl.init()
export default {
  name: 'app-main',
  components: {UiComponent}
}
</script>

<style lang="css">
	.main {
		top: 55px;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}
</style>





