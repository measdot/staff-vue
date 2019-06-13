<template>
	<div>
		<div id="golden"></div>
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
	    }, 'golden')
	  }
	}
</script>
<style lang="css">
	#golden {
		top: 0px;
		right: 0;
		left: 0;
		position: absolute;
		bottom: 0;
	}
/* 
	body .lm_content{
  	overflow: auto;
	} */
</style>