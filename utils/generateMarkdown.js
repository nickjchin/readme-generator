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
  - [Demo](#demo)
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

  ## Demo

  ---
  [Demo](https://drive.google.com/file/d/1HdgibFseJQgjxPdjlDH2fACb0xFvC9QM/view?usp=sharing)
  
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
