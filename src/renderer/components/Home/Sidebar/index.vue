<template>
	<div>
		<div id="sidebar"></div>
	</div>
</template>

<script>
	import Layout from '@/helpers/layout'
	import SidebarUi from './SidebarUi'

	export default {
	  name: 'sidebar',
	  components: {SidebarUi},
	  mounted () {
	    return Layout.init({
	      settings: {
	        hasHeaders: false,
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
	              vueComponent: SidebarUi,
	              isClosable: false,
	              title: 'SideBar'
	            }
	          ]
	        }]
	    }, 'sidebar')
	  }
	}
</script>
<style lang="css">
	#sidebar {
		height: 100vh;
	}
</style>