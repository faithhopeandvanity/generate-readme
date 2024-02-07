// external packages
const fs = require("fs");
const path = require("path");
// Inquirer is key to this project.
//use 'require' to retrieve it.
const inquirer = require("inquirer");
//access js file
//when using 'require', I don't need to put '.js' at end of file name
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        //Contact Details
        type: "input",
        name: "name",
        message: "What's your name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log(
                    "Please enter your name! Otherwise I'll put down 'Joe' and people will think it's mine, hehe!"
                );
                return false;
            }
        },
        //Else is used as a catch if nothing is inputted.
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
                console.log("Your email address, please?");
                return false;
            }
        },
    },
    {
        //App details
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
        message: "How to install your programme?",
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
        message: "Instructions for usage:",
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
        //Collaborators
        type: "input",
        name: "contributors",
        message: "How can others contribute to your project?",
        validate: (contributorsInput) => {
            if (contributorsInput) {
                return true;
            } else {
                console.log("How can colleagues contribute?");
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
        //Provides two prevalent license options
        type: "list",
        name: "licenses",
        message: "Which license would you like to use?",
        choices: ["MIT", "CC--0"],
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
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        // create README file, send to 'new' folder
        fs.writeFile("./new/README.md", data, (err) => {
            // in case of error, catch
            if (err) {
                reject(err);
                // 'return' from function so resolve function isn't reiterated
                return;
            }
            // send data to if all inputs are correct
            resolve({
                ok: true,
                message: console.log(
                    'Success! Navigate to the "new" folder to see your README!'
                ),
            });
        });
    });
};

// function to initialise program
function init() {
    return inquirer.prompt(questions);
}


// function call to initialise program
init()
    .then((userInput) => {
        return generateMarkdown(userInput);
    })
    .then((readmeInfo) => {
        return writeToFile(readmeInfo);
    })
    .catch((err) => {
        console.log(err);
    });
