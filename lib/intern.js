//requires parent class
const Employee = require('./Employee');

//Intern class will extend the parent class
class Intern extends Employee {

    constructor(name, id, email, school) {
        
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return `School: ${this.school}`
    }

    getRole() {
        return `Intern`
    }
}

module.exports = Intern;