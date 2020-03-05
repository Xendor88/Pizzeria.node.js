const inquirer = require('inquirer');

module.exports = {
  askCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your username.:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
        
          }
        }
      },

      {
        name: 'email',
        type: 'email',
        message: 'Enter your email:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your email.';
        
          }
        }
      },
    
      
      
    ];
    return inquirer.prompt(questions);
  },
};