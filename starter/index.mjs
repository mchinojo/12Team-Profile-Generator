// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
import inquirer from 'inquirer';
// const path = require("path");
import path from 'path';
// const fs = require("fs");
import fs from 'fs';
// const render = require("./src/page-template.js");
import render from './src/page-template.mjs';

// const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_DIR = path.resolve(new URL('output/', import.meta.url).pathname);
const outputPath = path.join(OUTPUT_DIR, "team.html");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
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
                name: 'number',
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
                name: 'gitHub',
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

// let manager = await promptTeamManager();
// let engineer = await promptEngineer();
// let intern = await promptIntern();


let employeeData = [];
let manager = await promptTeamManager();
employeeData.push(manager);
let menuResponse = await promptMenu();

if (menuResponse.menu === 'Add an engineer') {
    let engineer = await promptEngineer();
    employeeData.push(engineer);
    menuResponse = await promptMenu();
} else if (menuResponse.menu === 'Add an intern') {
    let intern = await promptIntern();
    employeeData.push(intern);
    menuResponse = await promptMenu();
} else if (menuResponse.menu === 'Finish building the team') {
    const data = render(employeeData);

    fs.writeFile(outputPath, data, function (err) {

        if (err) {
            // If there is an error writing the file, log the error message.
            console.error(err);
            return;
        }
        // If the file is successfully written, log "Saved!"
        console.log('Saved!');
    });

}
console.log(employeeData);