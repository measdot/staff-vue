var shell = require('shelljs')
shell.config.execPath = shell.which('node').stdout
var version = shell.exec('git --version', {async: false}).stdout
console.log(version)
