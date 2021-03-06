const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("Can get Role from getRole function?", function() {
    var newRole = new Manager("Mark", "2565", "data", "test")
    expect(newRole.getRole()).toBe("Manager")
})