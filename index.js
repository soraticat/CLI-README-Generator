const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Choose a license from the following list:',
        name: 'license',
        choices: [
            '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            
            '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            
            '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
            
            '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

            '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
            
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Enter names of the contribution guidelines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test'
    }
])

.then((response) => {
    fs.writeFile('README.md', JSON.stringify(response), (err) => {
        err ? console.log(err) : console.log('Your README.md has been created.')
    })
})