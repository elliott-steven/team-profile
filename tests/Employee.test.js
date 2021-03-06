const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test("Can get name from getName function?", function() {
    var newEmp = new Employee("Mark", "2565", "data")
    expect(newEmp.getName()).toBe("Name: Mark")
})

test("Can get ID from getID function?", function() {
    var newID = new Employee("Mark", "2565", "data")
    expect(newID.getID()).toBe("ID: 2565")
})

test("Can get Email from getEmail function?", function() {
    var newEmail = new Employee("Mark", "2565", "data")
    expect(newEmail.getEmail()).toBe("Email: data")
})

test("Can get Role from getRole function?", function() {
    var newRole = new Employee("Mark", "2565", "data")
    expect(newRole.getRole()).toBe("Employee")
})