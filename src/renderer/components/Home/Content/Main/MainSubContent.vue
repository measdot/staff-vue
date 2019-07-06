<template>
  <div>
    <div id="main-sub-content"></div>
  </div>
</template>

<script>
  import Layout from '@/helpers/layout'
  import Dummy from '@/components/Home/Content/Main/dummy_ui.vue'
  import Add from '@/components/Home/Content/Main/AddAction.vue'

  export default {
    name: 'main-sub-content',
    components: {Dummy, Add},
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
              vueComponent: Add,
              height: 65
            }, {
              type: 'component',
              vueComponent: Dummy
            }]
          }]
      }, 'main-sub-content')
    }

  }
</script>

<style lang="css">
  #main-sub-content {
    height: 100vh;
    width: 100%;
  }
</style>





