<template>
  <div>
    <div id="main-sub-content"></div>
  </div>
</template>

<script>
  import Layout from '@/helpers/layout'
  import Info from './_info.vue'
  import Logs from './_logs.vue'
  import Action from './_main.vue'

  export default {
    name: 'main-sub-content',
    components: {Info, Action, Logs},
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
          {
            type: 'column',
            content: [{
              type: 'row',
              content: [
                {
                  type: 'component',
                  width: 70,
                  vueComponent: Action
                },
                {
                  type: 'component',
                  vueComponent: Info
                }
              ]
            },
            {
              type: 'component',
              height: 25,
              vueComponent: Logs
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





