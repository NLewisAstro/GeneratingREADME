const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generatemarkdown = require("./utils/generatemarkdown");
// array of questions for user
const questions = [
   {
    type: "input",
    name: "github",
    message: "What is your github username?"
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for this Project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license',
        default: 'MIT',
        choices: [
            'Apache 2.0',
            'MIT',
            'GNU GPL v3.0',
            'BSD 3',
            'None',
        ]
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },
];
// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        console.log("Creating README");
        writeToFile("README.md", generatemarkdown({...answers}));
})

}
// function call to initialize program
init();
