<template>
	<div>
		<div id="sidebar"></div>
	</div>
</template>

<script>
	import Layout from '../helpers/layout'
	import SidebarTabComponent from './UiComponent'

	export default {
	  name: 'sidebar',
	  components: {SidebarTabComponent},
	  mounted () {
	    return Layout.init({
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
	              vueComponent: SidebarTabComponent,
	              isClosable: false,
	              title: 'All'
	            }, {
	              type: 'component',
	              vueComponent: SidebarTabComponent,
	              isClosable: false,
	              title: 'Frequent'
	            }, {
	              type: 'component',
	              vueComponent: SidebarTabComponent,
	              isClosable: false,
	              title: 'Favourite'
	            }
	          ]
	        }]
	    }, 'sidebar')
	  }
	}
</script>
<style lang="css">
	#sidebar {
		/*border: 2px solid red;*/
		height: 100vh;
		width: 100%;
	}
</style>