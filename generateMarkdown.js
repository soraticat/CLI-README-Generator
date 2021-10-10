
function renderLicenseBadge(license) {
  if (license === 'None') {
    const licenseBadge = '';
    return licenseBadge;
  }else{
    const licenseBadge = `![Github License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    console.log(license)
    return licenseBadge;
  }  
}

function renderLicenseLink(license) {
  let licenseURL = '';
  console.log(license)
  switch (license) {
    case 'Apache 2.0':
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
     return licenseURL
    case 'BSD 3':
      licenseURL = 'https://opensource.org/licenses/BSD-3-Clause';
     return licenseURL
    case 'Public Domain':
      licenseURL = 'http://creativecommons.org/publicdomain/zero/1.0/';
     return licenseURL
    case 'GPLv3':
      licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
     return licenseURL
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      return licenseURL;
    default: licenseURL = '';
    return licenseURL;
  }
}

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} <br>
  ${renderLicenseLink(license)}
  `;
}

//creates the markdown text for the readme
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  ## Installation

  ${data.installation}
  
  ## usage

  ${data.usage}
  
  ## Contributing

  ${data.contributing}
  
  ## Tests

  ${data.test}
`;
}

//Export all the functions
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};