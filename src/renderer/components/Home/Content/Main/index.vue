<template>
	<div>
		<div id="main-tab-group"></div>
	</div>
</template>

<script>
	import Layout from '@/helpers/layout'
	import Dummy from './dummy_ui'

	export default {
	  name: 'main-tab-group',
	  components: {Dummy},
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
	              vueComponent: Dummy,
	              isClosable: true,
	              title: 'Create Ticket'
	            }, {
	              type: 'component',
	              vueComponent: Dummy,
	              isClosable: false,
	              title: 'Run Crons'
	            }
	          ]
	        }]
	    }, 'main-tab-group')
	  }
	}
</script>
<style lang="css">
	#main-tab-group {
		height: 100vh;
		width: 100%;
	}
</style>