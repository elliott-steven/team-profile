const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("Can get github username from getGithub function?", function() {
    var newSchool = new Intern("Mark", "2565", "data", "test")
    expect(newSchool.getSchool()).toBe("School: test")
})

test("Can get Role from getRole function?", function() {
    var newRole = new Intern("Mark", "2565", "data", "test")
    expect(newRole.getRole()).toBe("Intern")
})