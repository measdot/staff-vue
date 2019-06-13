<template>
	<div>
		<div id="main-content"></div>
	</div>
</template>

<script>
	import Layout from '@/helpers/layout'
	import Action from './Action'
	
	export default {
	  name: 'main-content',
	  components: {Action},
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
	              vueComponent: Action,
	              isClosable: true,
	              title: 'EC Website'
	            }
	          ]
	        }]
	    }, 'main-content')
	  }
	}
</script>
<style lang="css">
	#main-content {
		height: 100vh;
		width: 100%;
	}
</style>