const inquirer = require('inquirer');
const fs = require('fs');



inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of your project:'
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
},
{
    type: 'input',
    name: 'installation',
    message:'Enter the installation instructions for your project:'
},
{
    type: 'input',
    name: 'usage',
    message:'Enter the usage of your project:'
},
{
    type: 'list',
    name: 'license',
    message:'Choose a license:',
    choices: ['MIT', 'GNU GPL v3.0', 'Apache 2.0', 'BSD 3-Clause', 'ISC']
},
{
    type: 'input',
    name: 'contributing',
    message:'Enter the contribution instructions for your project:'
},
{
    type: 'input',
    name: 'tests',
    message:'Enter any tests for your project:'
},
{
    type: 'input',
    name: 'github',
    message:'Enter your GitHub username:'
},
{
    type: 'input',
    name: 'email',
    message:'Enter your email:'
},
])
.then ((answers) =>{
    const { name, description, installation, usage, license, contributing, tests, github, email} = answers
    const readmeContent = `# ${name}\n\n` + 
    `![License](https://img.shields.io/badge/License-${license}-blue)\n\n` + 
    `## Description\n\n${description}\n\n` +
    `## Table of Contents\n\n` +
    `- [Installation](#installation)\n` + 
    `- [Usage](#usage)\n` + 
    `- [License](#license)\n` + 
    `- [Contributing](#contributing)\n` + 
    `- [Tests](#tests)\n` + 
    `- [Questions](#questions)\n` + 
    `## Installation\n\n${installation}\n\n` + 
    `## Usage\n\n${usage}\n\n` + 
    `## License\n\nThis project is licensed under the ${license} license.\n\n` + 
    `## Contributing\n\n${contributing}\n\n` + 
    `## Tests\n\n${tests}\n\n` + 
    `## Questions\n\nGitHub username: ${github}\nEmail: ${email}`;

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.error('Error writing README.md:', err);
        } else {
            console.log("README.md successfully created.")
        }
    })
})