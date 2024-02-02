// external packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project? (Required)',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log("What is your project's name?");
          return false;
      }
  }
},
{type: 'input',
name: 'github',
message: 'What is your Github username? (Req.)',
validate: githubInput =>{
    if (githubInput){
        return true;
    } else{
        console.log('What is your Github username?');
        return false;
    }
}},
{

}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(``)
}

// function to initialize program
function init() {
return inquirer.prompt(questions);
}

// function call to initialize program
init();