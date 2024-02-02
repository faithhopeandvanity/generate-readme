// external packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?  (Required)',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Please tell us your project name!');
          return false;
      }
  }
},

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();