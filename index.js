// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
// const generateMarkdown = require('./utils/generateMarkdown')




// // TODO: Create an array of questions for user input
// const questions =
//     [
//         'What is your GitHub username?',
//         'What is your email address?',
//         'Please write a brief description of your project',
//         'What kind of license should your project have?',
//         'What command should be run to install dependencies?',
//         'What command should be run to run tests?',
//         'What does the user need to know about using the repo?',
//         'What does the user need to know about contributing to the repo?'
//     ];


// // TODO: Create a function to write README file

// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }
// // inquirer.prompt(questions)
// //     .then((inquirerResponse, data) => {
// //         console.log("Creating a ReadMe file");
// //         fs.writeFileSync("ReadMe.md", inquirerResponse, data);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     })

// // Function call to initialize app
// init();

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'name',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'BSD', 'APACHE']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests? ',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribution',
        },
    ])
    .then((answers) => {
        console.log(answers)
        const htmlPageContent = generateHTML(answers);
    fs.writeFile('README.md', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme file')
);
    });

const generateHTML = (obj) => {
    let licenseText =""
    if(obj.license == "MIT")
        licenseText = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    else 
    if(obj.license == "BSD")
        licenseText = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    else
     if(obj.license == "APACHE") 
        licenseText = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"


    return `# ${obj.name}

## Questions
[Github Profile](http://github.com/${obj.github})

## License
${licenseText}
## Installation
${obj.install}
## Tests
${obj.test}
## Contribution
${obj.contribute}
## Description
${obj.description}

`

};
