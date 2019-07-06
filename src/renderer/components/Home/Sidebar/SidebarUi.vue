<template>
  <div class="container" id="app">
    <div>
      <a-tabs defaultActiveKey="1" :tabPosition="mode" :style="{ height: '100%'}">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon style="fontSize:25px" type="laptop" />
          </span>
          <DevBox></DevBox>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon style="fontSize:25px" type="cloud" />
          </span>
          <Cloud></Cloud>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon style="fontSize:25px" type="setting" />
          </span>
          <Settings></Settings> 
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>

import DevBox from '@/components/Home/Sidebar/Tab1'
import Cloud from '@/components/Home/Sidebar/Tab2'
import Settings from '@/components/Home/Sidebar/Tab3'

export default {
  name: 'sidebar-ui',
  components: {DevBox, Cloud, Settings}
}
</script>


<style lang="scss">
  // #sidebar .lm_content{
  //   overflow: auto;
  // }
  .ant-tabs .ant-tabs-left-content {
    padding-left: 2px;
    padding-right: 2px;
  }
  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab, .ant-tabs .ant-tabs-right-bar .ant-tabs-tab {
    padding: 10px 10px;
  }
  .components-input .ant-input {
    margin: 8px 8px 8px 0px;
  }
  .ant-tabs-bar {
    margin: 0 0 0 0;
  }
</style>
