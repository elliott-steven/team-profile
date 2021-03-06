const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHtml = require('./src/html-template');
const writeFile = require('./src/create-site');

let manager = [];
let engineer = [];
let intern = [];
let empArray = {manager,engineer,intern};

function Prompt() {

    return inquirer

        .prompt([
            {
                type: 'text',
                name: 'employee',
                message: "What is the employee's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the employee's ID number?"
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email address?"
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role on this team?",
                choices: ['Manager', 'Engineer', 'Intern']
            },
        ])

        .then(({ employee, id, email, role }) => {

            if (role === "Manager") {

                return inquirer

                    .prompt([{
                        type: 'text',
                        name: 'officeNum',
                        message: "What is your office phone number?"
                    },
                    {
                        type: 'confirm',
                        name: 'anotherEmp',
                        message: "Would you like to add another employee?",
                        default: false
                    }
                    ])
                    .then(({officeNum, anotherEmp}) => {
                        manager.push(new Manager(employee, id, email, officeNum))
                        if(anotherEmp) {
                            return Prompt();
                        }
                    })
            }

            else if (role === "Engineer") {

                return inquirer

                .prompt([{
                    type: 'text',
                    name: 'github',
                    message: "What is your GitHub username? (without the @)"
                },
                {
                    type: 'confirm',
                    name: 'anotherEmp',
                    message: "Would you like to add another employee?",
                    default: false
                }
                ])
                .then(({github, anotherEmp}) => {
                    engineer.push(new Engineer(employee, id, email, github))
                    if(anotherEmp) {
                        return Prompt();
                    }
                })
            }

            else if (role === "Intern") {

                return inquirer
                
                .prompt([{
                    type: 'text',
                    name: 'school',
                    message: "What school is the Intern attending or has attended?"
                },
                {
                    type: 'confirm',
                    name: 'anotherEmp',
                    message: "Would you like to add another employee?",
                    default: false
                }
                ])
                .then(({school, anotherEmp}) => {
                    intern.push(new Intern(employee, id, email, school))
                    if(anotherEmp) {
                        return Prompt();
                    }
                })
            }

        })
}

Prompt ()
.then(userData => {
    return createHtml(empArray)
})

.then(pagehtml => {
    return writeFile(pagehtml)
})