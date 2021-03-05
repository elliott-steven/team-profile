//requires parent class
const Employee = require('./Employee');

//Intern class will extend the parent class
class Intern extends Employee {

    constructor(name, id, email, college) {
        
        super(name, id, email);
        this.college = college;
    }

    getCollege() {
        return `College: ${this.college}`
    }

    getRole() {
        return `Intern`
    }
}

module.exports = Intern;