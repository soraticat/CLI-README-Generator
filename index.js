//imported packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');


const questions = [
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
        type: 'list',
        message: 'Choose a license from the following list:',
        name: 'license',
        choices: [
            'Apache 2.0',
            'BSD 3',
            'Public Domain',
            'GPLv3',
            'MIT',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'test'
    }
]

//calls the questions prompt on load then generates text which is then written into the readme file
const init = (() => {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown.generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('Your README.md has been created.')
        })  
    })
});

init();