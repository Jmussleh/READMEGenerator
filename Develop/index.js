// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      
      {
        type: 'input',
        message: 'Write a short description of your project...',
        name: 'description',
      },
    
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
      },
    
      {
            type: 'input',
            message: 'What should the user use this application for?',
            name: 'usage',
            default: 'To dynamically generate a professional README.md file.'
      },

      {
        type: 'list',
        message: 'What license was used for this project?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla 2.0', 'GNU GPLv3', 'None' ],
        default: 'None',
      },
    
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribute',
      },  

      {
        type: 'input',
        message: 'What testing was done for this project?',
        name: 'test',
      },

      {
        type: 'input',
        message: 'Enter your GitHub username.',
        name:'github',
      },

      {
        type: 'input',
        message: 'Enter your email.',
        name: 'email',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
