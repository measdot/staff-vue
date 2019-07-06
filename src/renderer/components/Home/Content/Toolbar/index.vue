<template>
<div>
  <a-row style="padding:5px; height:50px" type="flex" align="middle" justify="space-around">
	  <a-col :span="16">
		<a-breadcrumb>
			<a-breadcrumb-item href="">
				<a-icon type="home" />
			</a-breadcrumb-item>
			<a-breadcrumb-item href="">
				<a-icon type="user" />
				<span>DevBox</span>
			</a-breadcrumb-item>
			<a-breadcrumb-item>
				<a-icon type="user" />
				<span>Ec Website</span>
			</a-breadcrumb-item>
			<a-breadcrumb-item href="">
				<span>Create Ticket</span>
			</a-breadcrumb-item>
		</a-breadcrumb>
	  </a-col>
	  <a-col :span="8" align="right">
		<a-button-group>
			<a-button type="primary">
				<a-icon type="sync" />
			</a-button>
			<a-button type="primary">
				<a-icon type="play-circle" />
			</a-button>
		</a-button-group>
	  </a-col>
  </a-row>
</div>
</template>

<script>
	export default {
	  name: 'toolbar'
	}
</script>

<style lang="css">
</style>



