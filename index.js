const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = (answers) =>
  `# ${answers.title}

## Description
${answers.description}

## Table of Contents
 - [Installation] (#installation)
 - [Usage] (#usage)
 - [License] (#license)
 - [Contributing] (#contributing)
 - [Tests] (#tests)
 - [Questions] (#questions)

## Installation
To run this application you need to run the necessary dependencies
---
${answers.installation}
---

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Github: [${answers.github}](https://www.github.com/${answers.github})
If you have further questions, please email me at [${email}](mailto:${email})
`;

inquirer.prompt([
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
    message: "Please enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter what the user needs to know about contributing",
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
    choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "Apache 2.0", "none"],
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
]);
