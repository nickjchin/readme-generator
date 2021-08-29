// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your projects's name",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the the command to installation dependecies",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter what the user needs to know to use the repo",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter what the user needs to know about contributing to the repo",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter what command should be ran to run test",
  },
  {
    type: "list",
    name: "license",
    message: "Please select what kind of license your project needs",
    choices: ["MIT", "GNU", "Mozzila", "Apache", "none"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// TODO: Create a function to initialize app
function init() {
  //function init app and generates readme
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}
// Function call to initialize app
init();
