<template>
<div class="scroll">
  <a-row style="padding:5px; height:50px" type="flex" align="middle" justify="space-around">
	  <a-col :span="16">
		<a-breadcrumb>
			<a-breadcrumb-item href="">
				<a-icon type="home" />
			</a-breadcrumb-item>
			<a-breadcrumb-item href="">
				<a-icon type="laptop" />
				<span>DevBox</span>
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
  <a-row type="flex">
    <a-col :span="24">
      <a-row type="flex" align="middle" justify="space-around">
        <a-col :span="8" style="margin: 10px 0; padding:2px; fontSize:15px; fontWeight:500;">Action configuration</a-col>
      </a-row>
      <a-form
        id="components-form-demo-validate-other"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          v-bind="formItemLayout"
          label=" Select ticket to setup"
        >
          <a-radio-group v-decorator="['radio-group']">
            <a-row>
              <a-col :span="24">
                <a-radio value="a">
                  Sprint-71 / PRT-1079 / Add Columns to International orders report
                </a-radio>
              </a-col>
              <a-col :span="24">
                <a-radio value="b">
                  Sprint-81 / PRT-1089 / Add Columns to International orders report
                </a-radio>
              </a-col>
              <a-col :span="24">
                <a-input-group compact>
                  <a-select defaultValue="PRT">
                    <a-select-option value="PRT">PRT-</a-select-option>
                  </a-select>
                  <a-input-search style="width: 50%" placeholder="Search by Ticket no" enterButton/>
                </a-input-group>
                <a-radio value="c" style="display:none">
                  Sprint-90 / PRT-1099 / Add Columns to International orders report
                </a-radio>
              </a-col>  
            </a-row>        
          </a-radio-group>
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          label="Select preferences"
        >
          <a-checkbox-group
            v-decorator="['checkbox-group', {initialValue: ['A', 'B', 'C']}]"
            style="width: 100%;"
          >
            <a-row>
              <a-col :span="24">
                <a-checkbox disabled value="A">
                  Assign task to me if not already assigned
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="B">
                  Run Migrations
                </a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox value="C">
                  Open project in Phpstorm
                </a-checkbox>
              </a-col>

            </a-row>
          </a-checkbox-group>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</div>
</template>

<script>

// With ES5
// var JiraApi = require('jira-client')
const signale = require('signale')

signale.success('Operation successful')

// // Initialize
// var jira = new JiraApi({
//   protocol: 'https',
//   host: 'pipingrock.atlassian.net',
//   username: 'kgaurav@pipingrock.com',
//   password: 'Pipin#123',
//   apiVersion: '2'
// })

export default {
  name: 'add-action',
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    normFile  (e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    }
  }
}
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.scroll{
  overflow: auto;
  height: 100%;
}
.ant-form-item {
  margin-bottom: 5px;
}
</style>