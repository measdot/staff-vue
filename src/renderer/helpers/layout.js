import Vue from 'vue'
import GoldenLayout from 'golden-layout'
import store from '../store'
const $ = require('jquery')
window.jQuery = $
window.$ = $

const parse = (content, components = []) => {
  content.map((component) => {
    switch (component.type) {
      // this is a vue component
      case 'component' :
        var vueComponent = component.vueComponent
        component.componentName = vueComponent.name
        component.componentState = vueComponent.state || {}
        if (components.indexOf(component.vueComponent) < 0) {
          components.push(component.vueComponent)
          // delete this self added object of vue component
          // delete component.vueComponent
        }
        break
        // this is collection of vueComponents
      default :
        parse(component.content, components)
    }
  })
  return components
}
const renderVueComponentToGoldenLayout = (vueComponent, goldenLayoutContainer, goldenLayoutState) => {
  goldenLayoutContainer.getElement().html('<' + vueComponent.name + ' />')
  setTimeout(() => {
    const ComponentConstructor = Vue
      .component(vueComponent.name, vueComponent)
      .extend({
        store: store
      })

    new ComponentConstructor({
      propsData: {
        lastState: goldenLayoutState || {},
        goldenLayoutContainer: goldenLayoutContainer
      }
    }).$mount(vueComponent.name)
  })
}

var glPool = []

export default {
  init: (config, containerId) => {
    // parse config to golden-layout config and figure out distinct components
    let components = (parse(config.content))

    // new instance of golden-layout
    var pageContainer = $('#' + containerId)
    var myLayout = new GoldenLayout(config, pageContainer)

    // register all distinct components
    components.map((vueComponent) => {
      myLayout.registerComponent(vueComponent.name, (container, state) => {
        renderVueComponentToGoldenLayout(
          vueComponent,
          container,
          state
        )
      })
    })

    myLayout.init()
    glPool.push(myLayout)

    myLayout.on('componentCreated', function (component) {
      component.container.on('resize', function () {
        glPool.forEach(gl => {
          gl.updateSize()
        })
      })
    })

    $(window).on('resize', function () {
      myLayout.updateSize()
    })

    return myLayout
  }
}
