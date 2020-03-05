const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files.js');

const UserService= require ('./application/userservice')



const inquirer  = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askCredentials();
  var userService = new UserService()
  var userService =  userService.register(credentials)
  
};

run();