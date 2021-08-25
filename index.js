const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = (answers) =>
  `# ${answers.title} ![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)

## Description

---

${answers.description}

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

---
${answers.installation}

## Usage

---
${answers.usage}

## License

---
This project is covered the ${answers.license} license

## Contributing

---
In order to contribute ${answers.contributing}

## Tests

---
To test this project, in the command line run ${answers.tests}

## Questions

---
Github: [${answers.github}](https://www.github.com/${answers.github})

If you have further questions, please email me at [${answers.email}](mailto:${answers.email})
`;

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFile("GeneratedREADME.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README!")
    );
  });
