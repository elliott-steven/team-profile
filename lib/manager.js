//requires parent class
const Employee = require('./Employee');

//Manager class will extend the parent class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return `Manager`
    }
}

module.exports = Manager;
