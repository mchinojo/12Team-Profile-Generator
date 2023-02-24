// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
let Employee = require('./Employee.js');

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getName() {
        return this.name;
    }
    getRole() {
        return 'Intern';
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;