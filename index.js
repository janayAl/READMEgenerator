// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');




// TODO: Create an array of questions for user input
const questions = 
[
    'What is your GitHub username?',
    'What is your email address?', 
    'Please write a brief description of your project',
    'What kind of license should your project have?' ,
    'What command should be run to install dependencies?' ,
    'What command should be run to run tests?',
    'What does the user need to know about using the repo?',
    'What does the user need to know about contributing to the repo?'
    ];
const generateHTML = (ANSWERS) => "";

    // TODO: Create a function to write README file
    
    function writeToFile(fileName, data) { }

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your GitHub username?',
//       name: 'name',
//     },
//     {
//       type: 'input',
//       message: 'What is your email address?',
//       name: 'input',
//     },
//     {
//       type: 'input',
//       message: 'What is your project name?',
//       name: 'input',
//     },
//     {
//       type: 'input',
//       message: 'What kind of license should your project have?',
//       name: 'input',
//     },
//     {
    //       type: 'input',
    //       message: 'What command should be run to install dependencies?',
    //       name: 'input',
    //     },
    //{
//       type: 'input',
//       message: 'What command should be run to run tests? ',
//       name: 'input',
//     },
//      {
//       type: 'input',
//       message: 'What does the user need to know about using the repo?',
//       name: 'input',
//     },
//      {
//       type: 'input',
//       message: 'What does the user need to know about contributing to the repo?',
//       name: 'input',
//     },
//   ])
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers); })




//         fs.writeFile('index.html', htmlPageContent, (err) => 
// err ? console.log(err): console.log('Successfully created index.html!')       
//  );
//   });