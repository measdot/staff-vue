<template>
  <div>
    <div id="dash-board"></div>
  </div>
</template>

<script>
  import Layout from '../helpers/layout'
  import MainActionHeader from './MainActionHeader'
  import MainActionTabGroup from './MainActionTabGroup'

  export default {
    name: 'dash-board',
    components: {MainActionHeader},
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
              vueComponent: MainActionHeader,
              height: 20,
              isClosable: true,
              title: 'MainActionHeader'
            }, {
              type: 'component',
              vueComponent: MainActionTabGroup,
              isClosable: false,
              title: 'MainActionTabs'
            }]
          }]
      }, 'dash-board')
    }

  }
</script>

<style lang="css">
#dash-board {
  height: 100vh;
  width: 100%;
}
#dash-board > .lm_goldenlayout > .lm_item > .lm_splitter { visibility: hidden; pointer-events: none; }
</style>





