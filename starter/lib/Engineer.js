// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
let Employee = require('./Employee.js');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name;
    }
    getRole() {
        return 'Engineer';
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;