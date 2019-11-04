// With ES5
var JiraApi = require('jira-client')

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'pipingrock.atlassian.net',
  username: 'kgaurav@pipingrock.com',
  password: 'Pipin#123',
  apiVersion: '2'
})

jira.findIssue('ECI-38')
  .then(function (issue) {
    console.log(issue)
  })
  .catch(function (err) {
    console.error(err)
  })
