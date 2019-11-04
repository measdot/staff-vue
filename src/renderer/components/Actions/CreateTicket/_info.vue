<template>
  <a-row>
	<a-col :span="24">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="8" style="margin: 10px 0; padding:2px; fontSize:15px; fontWeight:500;">Action steps</a-col>
      </a-row>
      <a-steps direction="vertical">
        <a-step title="Step1" description="This is a description." />
        <a-step title="Step2" description="This is a description." />
        <a-step title="Step3" description="This is a description." />
      </a-steps>
    </a-col>
  </a-row>
</template>

<script>
	export default {
	  name: 'action-info'
	}
</script>

<style lang="css">
</style>





