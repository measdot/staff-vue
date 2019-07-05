<template>
	<div>
		<div id="home"></div>
	</div>
</template>

<script>
	import Layout from '@/helpers/layout'
	import Sidebar from '@/components/Home/Sidebar'
	import Content from '@/components/Home/Content'

	export default {
	  name: 'home',
	  components: {Sidebar, Content},
	  data () {
	    return {}
	  },
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
	        {type: 'row',
          content: [
	            {
	              type: 'component',
	              vueComponent: Sidebar,
	              width: 30
	            },
	            {
	              type: 'component',
	              vueComponent: Content
	            }
	          ]
	        }]
	    }, 'home')
	  }
	}
</script>
<style lang="css">
	#home {
		top: 0px;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}
	.lm_content {
    	background: #e1e1e1;
    	border: 0px solid #cccccc;
	}
</style>