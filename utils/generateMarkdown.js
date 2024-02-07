const fs = require("fs");

//
//
function showLicenseBadge(license) {
    if (!license) {
        return ``;
    } else {
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${showLicenseLink(
            license
        )})`;
    }
}

// License link
function showLicenseLink(license) {
    if (license === "MIT") {
        return `https://lbesson.mit-license.org/`;
    }

    if (license === "CC--0") {
        return `https://creativecommons.org/licenses/by-nd/4.0`;
    }
}

// License section of README
// Return an empty string if no license
function showLicenseSection(license) {
    if (!license) {
        return ``;
    } else {
        return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
    }
}

// Generate markdown
function generateMarkdown(data) {
    return `# ${data.title}

  ${showLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Questions?](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ${showLicenseSection(data.licenses)}

  ## Any questions?
  Get in touch!
  Email: ${data.email}
  GitHub: https://github.com/${data.github}  
  
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
