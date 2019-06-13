<template>
	<div>
		<div id="content-tabs"></div>
	</div>
</template>

<script>
	import Layout from '../helpers/layout'
	import ContentTabComponent from './MainAction'

	export default {
	  name: 'content-tabs',
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
	              title: 'EC Website'
	            }, {
	              type: 'component',
	              vueComponent: ContentTabComponent,
	              isClosable: false,
	              title: 'DevBox'
	            }
	          ]
	        }]
	    }, 'content-tabs')
	  }
	}
</script>
<style lang="css">
	#content-tabs {
		height: 100vh;
		width: 100%;
	}
</style>