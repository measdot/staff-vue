<template>
  <div class="container" id="app">
    <div>
      <a-tabs defaultActiveKey="1" :tabPosition="mode" :style="{ height: '100%'}">
        <a-tab-pane tab="Tab 1" key="1">
          <a-input-search style="margin: 5px 0px" placeholder="Search" @change="onChange" />
          <a-tree
            @expand="onExpand"
            :expandedKeys="expandedKeys"
            :autoExpandParent="autoExpandParent"
            :treeData="gData"
          >
            <template slot="title" slot-scope="{title}">
              <span v-if="title.indexOf(searchValue) > -1">
                {{title.substr(0, title.indexOf(searchValue))}}
                <span style="color: #f50">{{searchValue}}</span>
                {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
              </span>
              <span v-else>{{title}}</span>
            </template>
          </a-tree>
        </a-tab-pane>
        <a-tab-pane tab="Tab 2" key="2">Content of tab 2</a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of tab 3</a-tab-pane>
        <a-tab-pane tab="Tab 4" key="4">Content of tab 4</a-tab-pane>
        <a-tab-pane tab="Tab 5" key="5">Content of tab 5</a-tab-pane>
        <a-tab-pane tab="Tab 6" key="6">Content of tab 6</a-tab-pane>
        <a-tab-pane tab="Tab 7" key="7">Content of tab 7</a-tab-pane>
        <a-tab-pane tab="Tab 8" key="8">Content of tab 8</a-tab-pane>
        <a-tab-pane tab="Tab 9" key="9">Content of tab 9</a-tab-pane>
        <a-tab-pane tab="Tab 10" key="10">Content of tab 10</a-tab-pane>
        <a-tab-pane tab="Tab 11" key="11">Content of tab 11</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ui-component',
  components: {},
  methods: {
    onExpand  (expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onChange (e) {
      const value = e.target.value
      const expandedKeys = dataList.map((item) => {
        if (item.key.indexOf(value) > -1) {
          return getParentKey(item.key, gData)
        }
        return null
      }).filter((item, i, self) => item && self.indexOf(item) === i)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true
      })
    }
  },
  data: () => {
    return {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      gData,
      mode: 'left'
    }
  }
}

const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0'
  const tns = _tns || gData

  const children = []
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`
    tns.push({title: key, key, scopedSlots: { title: 'title' }})
    if (i < y) {
      children.push(key)
    }
  }
  if (_level < 0) {
    return tns
  }
  const level = _level - 1
  children.forEach((key, index) => {
    tns[index].children = []
    return generateData(level, key, tns[index].children)
  })
}
generateData(z)

const dataList = []
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const key = node.key
    dataList.push({ key, title: key })
    if (node.children) {
      generateList(node.children, node.key)
    }
  }
}
generateList(gData)

const getParentKey = (key, tree) => {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey
}
</script>


<style lang="scss">
body .lm_content .container .scroll {
  overflow: auto;
  height: 100%;
}
</style>
