const fs = require('fs');
const inquirer = require('inquirer');

const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');

const createHTML = require('./src/createHTML');
const myTeam = [];