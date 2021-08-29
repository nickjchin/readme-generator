// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (lisense !== "None") {
    return `www.github.com/licesnse/${data.license} ...`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  
  ---
  
  ${data.description}
  
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
  ${data.installation}
  
  ## Usage
  
  ---
  ${data.usage}
  
  ## License
  
  ---
  This project is covered by the ${data.license} license
  
  ## Contributing
  
  ---
  ${data.contributing}
  
  ## Tests
  
  ---
  To test this project, in the command line run ${data.tests}
  
  ## Questions
  
  ---
  Github: [${data.github}](https://www.github.com/${data.github})
  
  If you have further questions, please email me at [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
