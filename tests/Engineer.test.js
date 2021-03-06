const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("Can get github username from getGithub function?", function() {
    var newGithub = new Engineer("Mark", "2565", "data", "test")
    expect(newGithub.getGithub()).toBe("GitHub: test")
})

test("Can get Role from getRole function?", function() {
    var newRole = new Engineer("Mark", "2565", "data")
    expect(newRole.getRole()).toBe("Engineer")
})