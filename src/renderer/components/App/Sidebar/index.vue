<template>
  <div>
    <div id="sidebar"></div>
  </div>
</template>

<script>
  import Layout from '@/helpers/layout'
  import Tab1 from './Tab1'
  import Tab2 from './Tab2'
  import Tab3 from './Tab3'

  export default {
    name: 'sidebar',
    components: {Tab1, Tab2, Tab3},
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
          borderWidth: 0,
          minItemHeight: 10,
          minItemWidth: 10,
          headerHeight: 25,
          dragProxyWidth: 300,
          dragProxyHeight: 200
        },
        labels: {
          close: 'close',
          maximise: 'maximise',
          minimise: 'minimise',
          popout: 'open in new window'
        },
        content: [{
          type: 'stack',
          content: [
            {
              type: 'component',
              vueComponent: Tab1,
              isClosable: false,
              title: 'Devbox'
            },
            {
              type: 'component',
              vueComponent: Tab2,
              isClosable: false,
              title: 'Cloud'
            },
            {
              type: 'component',
              vueComponent: Tab3,
              isClosable: false,
              title: 'Settings'
            }
          ]
        }]
      }, 'sidebar')
    }
  }
</script>
<style lang="css">
  #sidebar {
    height: 100vh;
  }

#sidebar .lm_tab {
      height: 19px !important;
      line-height:19px;
    }
    
#sidebar .lm_close_tab {
      height: 18px !important;
    }
    
#sidebar .lm_controls {
      top:7px;
    }
</style>