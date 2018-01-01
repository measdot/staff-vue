<template>
	<layout-golden class="menu">
		<gl-stack>
			<gl-component title="Home">
				<div class="row">
					<at-button type="text" icon="icon-download">Download</at-button>
					<at-button type="text" icon="icon-user-plus">Add User</at-button>
					<at-button type="text" icon="icon-edit"></at-button>
					<at-button type="text" icon="icon-search"></at-button>
					<at-button-group>
						<at-button type="text" icon="icon-edit" title="Edit"></at-button>
						<at-button type="text" icon="icon-copy" title="Copy"></at-button>
						<at-button type="text" icon="icon-download" title="Download"></at-button>
					</at-button-group>
					<at-button-group>
						<at-button type="text" ><i class="icon icon-chevron-left"></i>Go back</at-button>
						<at-button type="text" >Go forward<i class="icon icon-chevron-right"></i></at-button>
					</at-button-group>
				</div>
			</gl-component>
			<gl-component title="Home">
				<div class="row">
					<at-button type="text" icon="icon-download">Download</at-button>
					<at-button type="text" icon="icon-user-plus">Add User</at-button>
					<at-button type="text" icon="icon-edit"></at-button>
					<at-button type="text" icon="icon-search"></at-button>
					<at-button-group>
						<at-button type="text" icon="icon-edit" title="Edit"></at-button>
						<at-button type="text" icon="icon-copy" title="Copy"></at-button>
						<at-button type="text" icon="icon-download" title="Download"></at-button>
					</at-button-group>
					<at-button-group>
						<at-button type="text" ><i class="icon icon-chevron-left"></i>Go back</at-button>
						<at-button type="text" >Go forward<i class="icon icon-chevron-right"></i></at-button>
					</at-button-group>
				</div>
			</gl-component>
			<gl-component title="Home">
				<div class="row">
					<at-button type="text" icon="icon-download">Download</at-button>
					<at-button type="text" icon="icon-user-plus">Add User</at-button>
					<at-button type="text" icon="icon-edit"></at-button>
					<at-button type="text" icon="icon-search"></at-button>
					<at-button-group>
						<at-button type="text" icon="icon-edit" title="Edit"></at-button>
						<at-button type="text" icon="icon-copy" title="Copy"></at-button>
						<at-button type="text" icon="icon-download" title="Download"></at-button>
					</at-button-group>
					<at-button-group>
						<at-button type="text" ><i class="icon icon-chevron-left"></i>Go back</at-button>
						<at-button type="text" >Go forward<i class="icon icon-chevron-right"></i></at-button>
					</at-button-group>
				</div>
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
  name: 'app-menu',
  components: {UiComponent}
}
</script>

<style lang="css">
	.menu {
		top: 0px;
		right: 0;
		left: 0;
		position: absolute;
		height: 55px;
	}
</style>





