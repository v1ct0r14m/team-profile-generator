const fs = require('fs')
const inquirer = require('inquirer')

const generateHTML = require('./src/generate-html')

const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const Employee = require('./lib/employee')