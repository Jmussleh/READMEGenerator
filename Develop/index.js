// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Boost Software License 1.0', 'The Unlicense', 'None' ],
        default: 'None',
      },
    
      {
        type: 'input',
        message: 'Provide guidelines on how other developers can contribute to your project.',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Success! Your README.md file has been generated")
});
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
  const userResponses = inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);

        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        writeFileAsync('README.md', markdown);

      //} try (err) {
      //   console.log(err);
      
};

// Function call to initialize app
init();
