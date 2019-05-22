<template>
	<div>
		<div class="flex-end" style="height: 80px">
			<at-tag color="error">Devbox is offline !!</at-tag>
			<at-button type="text" icon="icon-settings"></at-button>
			<at-button type="text" icon="icon-alert-octagon"></at-button>
		</div>
		<div id="golden"></div>
	</div>
</template>

<script>
	import Layout from '../helpers/layout'
	import FormComponent from './AppMain.vue'
	import AnotherFormComponent from './AppMenu'

	export default {
	  name: 'app-main',
	  components: {FormComponent, AnotherFormComponent},
	  data () {
	    return {}
	  },
	  mounted () {
	    var appLayout = Layout.init({
	      settings: {
	        hasHeaders: true,
	        constrainDragToContainer: false,
	        reorderEnabled: true,
	        selectionEnabled: false,
	        popoutWholeStack: false,
	        blockedPopoutsThrowError: true,
	        closePopoutsOnUnload: true,
	        showPopoutIcon: false,
	        showMaximiseIcon: false,
	        showCloseIcon: false
	      },
	      dimensions: {
	        borderWidth: 5,
	        minItemHeight: 10,
	        minItemWidth: 10,
	        headerHeight: 20,
	        dragProxyWidth: 300,
	        dragProxyHeight: 200
	      },
	      labels: {
	        close: 'close',
	        maximise: 'maximise',
	        minimise: 'minimise',
	        popout: 'open in new window'
	      },
	      content: [
	        {type: 'stack',
	          content: [
	            {
	              type: 'component',
	              vueComponent: FormComponent,
	              // isClosable: false,
	              title: 'All'
	            },
	            {
	              type: 'component',
	              vueComponent: AnotherFormComponent,
	              // isClosable: false,
	              title: 'Frequent'
	            },
	            {
	              type: 'component',
	              vueComponent: FormComponent,
	              // isClosable: false,
	              title: 'Favourite'
	            }
	          ]
	        }]
	    }, 'golden')
	    return appLayout
	  }
	}
</script>
<style lang="css">
	#golden {
		top: 40px;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}
</style>