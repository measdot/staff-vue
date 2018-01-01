<template>
	<div>
		<div id="menu" style="top: 0px; right: 0;left: 0; position: absolute; height: 50px;">
		</div>
		<div id="container" style="top: 50px; bottom: 0; right: 0; left: 0; position: absolute;"></div>
	</div>
</template>

<script>
// import LandingPage from './LandingPage'
export default {
  name: 'golden-layout',
  mounted: function () {
    window.$ = window.jQuery = require('jquery')
    const GoldenLayout = require('golden-layout')

    var config = {
      menu: {
        settings: {
          hasHeaders: true,
          showPopoutIcon: false,
          showCloseIcon: false,
          showMaximiseIcon: false
        },
        content: [{
          type: 'stack',
          content: [
            {
              type: 'component',
              isClosable: false,
              title: 'Home',
              componentName: 'testComponent',
              componentState: {label: 'A'}
            },
            {
              type: 'component',
              isClosable: false,
              title: 'All',
              componentName: 'testComponent',
              componentState: {label: 'B'}
            }, {
              type: 'component',
              isClosable: false,
              title: 'Filters',
              componentName: 'testComponent',
              componentState: {label: 'C'}
            }
          ]
        }]
      },
      container: {
        settings: {
          hasHeaders: true,
          showPopoutIcon: false,
          showCloseIcon: false,
          showMaximiseIcon: false
        },
        content: [{
          type: 'stack',
          content: [
            {
              type: 'component',
              isClosable: false,
              title: 'Dashboard ',
              componentName: 'testComponent',
              componentState: {label: 'D'}
            },
            {
              type: 'component',
              isClosable: true,
              title: 'Filters::Product',
              componentName: 'testComponent',
              componentState: {label: 'F'}
            }
          ]
        }]
      }
    }
    let menuLayout = new GoldenLayout(config.menu, '#menu')
    menuLayout.registerComponent('testComponent', function (container, componentState) {
      container.getElement().html('<div id="toolbar-' + componentState.label + '"></div>')
    })
    menuLayout.init()
    let containerLayout = new GoldenLayout(config.container, '#container')
    containerLayout.registerComponent('testComponent', function (container, componentState) {
      container.getElement().html('<h2>' + componentState.label + '</h2>')
    })
    containerLayout.init()
    window.addEventListener('resize', () => {
      menuLayout.updateSize()
      containerLayout.updateSize()
    })
  }
}
</script>