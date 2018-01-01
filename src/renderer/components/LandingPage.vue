<template>
	<div>
		<app-menu></app-menu>
		<app-main></app-main>
	</div>
</template>

<script>
	import AppMenu from './AppMenu'
	import AppMain from './AppMain'

	export default {
	  name: 'landing-page',
	  components: {AppMenu, AppMain}
	}
</script>