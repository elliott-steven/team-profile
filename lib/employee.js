//this is the parent class
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

        return `Name: ${this.name}`
    }

    getID() {

        return `Name: ${this.id}`
    }

    getEmail() {

        return `Name: ${this.email}`
    }

    getRole() {

        return `Employee`
    }
}

module.exports = Employee;