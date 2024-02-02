// external packages
const fs = require("fs");
const path = require("path");
// Inquirer is key to this project.
const inquirer = require("inquirer");
//access js file
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What's your name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log(
                    "Please enter your name! Otherwise I'll put down 'Joe' and people will think it's mine!"
                );
                return false;
            }
        },
    },
    {
        type: "input",
        name: "github",
        message: "Your Github username:",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log(
                    "What is your Github @? People will want to see your other projects!"
                );
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log(
                    "Your email address, please? You want your user to be able to contact you!"
                );
                return false;
            }
        },
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("No good having no title! Please try again.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Submit project description:",
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log(
                    "Please provide a basic description of the project"
                );
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "How to install?",
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please write instructions for installation!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions:",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide some instructions for the user.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contributors",
        message: "How can others contribute to this project?",
        validate: (contributorsInput) => {
            if (contributorsInput) {
                return true;
            } else {
                console.log("How did/can your colleagues contribute?");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "tests",
        message: "What are your app's tests?",
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Your app's tests?");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmLicenses",
        message: "Include a license?",
        default: false,
    },
    {
        type: "list",
        name: "licenses",
        message: "Which license?",
        choices: ["MIT", "CC--0", ""],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        },
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(``);
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init();
