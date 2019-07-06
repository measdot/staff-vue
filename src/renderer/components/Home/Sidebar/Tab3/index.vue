<template>
  <div>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="6" style="padding:2px; fontSize:15px; fontWeight:400;">Settings</a-col>
      <a-col :span="18" style="padding:5px;" align="right">
        <a-button icon="check" ghost>
          Submit Changes
        </a-button>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle" style="padding:10px 0px;">
      <a-input style="margin:3px;" addonBefore="Full Name" defaultValue="Kumar Gaurav" />
      <a-input style="margin:3px;" addonBefore="Email" defaultValue="kgaurav@pipingrock.com" />
      <a-input style="margin:3px;" addonBefore="Server Default User" defaultValue="kgaurav" />
    </a-row>

    <a-row type="flex" justify="space-around" align="middle" style="padding:10px 0px;">
      <a-input style="margin:3px;" addonBefore="Bitbucket User" defaultValue="pr-kgaurav" />
      <a-input style="margin:3px;" addonBefore="Bitbucket Pass" defaultValue="**********" />
    </a-row>

    <a-row type="flex" justify="space-around" align="middle" style="padding:10px 0px;">
      <a-input style="margin:3px;" addonBefore="AWS Access Key Id" defaultValue="AKIBJRJDZBKIL47AJX2Q" />
      <a-input style="margin:3px;" addonBefore="AWS Secret Access Key" defaultValue="9zsBjlMX4ajqJjYaNpKs8y6BD+8cWh10Fx6YU7up" />
    </a-row>
  </div>
</template>
  
<script>
export default {
  name: 'tab-settings',
  components: {}
}
</Script>

<style>
.ant-input-group-addon {
    font-weight: 500;
    background-color: #d7d4f7;
}
</style>
