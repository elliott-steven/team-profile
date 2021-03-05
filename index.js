const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let employee = [];
let manager = [];
let engineer = [];
let intern = [];

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
                message: "What is the employee's role on this team?"
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
            }

        })
}
