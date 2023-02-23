// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
import inquirer from 'inquirer';
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Import necessary libraries

let response = await promptTeamManager();

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
                name: 'mainMenu',
                choices: [
                    'Add an engineer',
                    'Add an intern',
                    'Finish building the team',
                ]
            }
        ]);

};


