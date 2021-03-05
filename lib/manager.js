//requires parent class
const Employee = require('./Employee');

//Manager class will extend the parent class
class Manager extends Employee {

    constructor(name, id, email, officeNum) {
        
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return `Manager`
    }
}

module.exports = Manager;
