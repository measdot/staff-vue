<template>
  <div>
    <div id="main-action"></div>
  </div>
</template>

<script>
  import Layout from '@/helpers/layout'
  import ToolBar from '@/components/Home/Content/Toolbar'
  import Main from '@/components/Home/Content/Main'

  export default {
    name: 'main-action',
    components: {ToolBar, Main},
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
          {type: 'column',
            content: [{
              type: 'component',
              vueComponent: ToolBar,
              height: 20
            }, {
              type: 'component',
              vueComponent: Main
            }]
          }]
      }, 'main-action')
    }

  }
</script>

<style lang="css">

#main-action {
  height: 100vh;
  width: 100%;
}

#main-action > .lm_goldenlayout > .lm_item > .lm_splitter { 
  visibility: hidden; pointer-events: none; 
}
</style>





