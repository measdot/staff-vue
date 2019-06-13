<template>
	<div>
		<div id="main-action-tab-group"></div>
	</div>
</template>

<script>
	import Layout from '../helpers/layout'
	import ContentTabComponent from './MainActionHeader'

	export default {
	  name: 'main-action-tab-group',
	  components: {ContentTabComponent},
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
	              vueComponent: ContentTabComponent,
	              isClosable: true,
	              title: 'Create Ticket'
	            }, {
	              type: 'component',
	              vueComponent: ContentTabComponent,
	              isClosable: false,
	              title: 'Run Crons'
	            }
	          ]
	        }]
	    }, 'main-action-tab-group')
	  }
	}
</script>
<style lang="css">
	#main-action-tab-group {
		height: 100vh;
		width: 100%;
	}
</style>