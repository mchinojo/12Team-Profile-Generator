const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function promptTeamManager() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email address?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
            },
        ])
};

function promptMenu() {

    return inquirer
        .prompt([
            {
                type: 'rawlist',
                message: 'Choose an option',
                name: 'menu',
                choices: [
                    'Add an engineer',
                    'Add an intern',
                    'Finish building the team',
                ]
            }
        ]);
};

function promptEngineer() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the team engineer's GitHub username?",
            },
        ])
};

function promptIntern() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
            },
        ])
};

let employeeData = [];

async function startProgram() {
    let managerData = await promptTeamManager();
    let manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
    );
    employeeData.push(manager);

    let menuSelection = await promptMenu();

    while (menuSelection.menu !== 'Finish building the team') {
        if (menuSelection.menu === 'Add an engineer') {
            let engineerData = await promptEngineer();
            let engineer = new Engineer(
                engineerData.name,
                engineerData.id,
                engineerData.email,
                engineerData.github
            );
            employeeData.push(engineer);

        } else if (menuSelection.menu === 'Add an intern') {
            let internData = await promptIntern();
            let intern = new Intern(
                internData.name,
                internData.id,
                internData.email,
                internData.school
            );
            employeeData.push(intern);
        }
        menuSelection = await promptMenu();
    }
    const data = render(employeeData);
    await fs.writeFile(outputPath, data);
}

startProgram();