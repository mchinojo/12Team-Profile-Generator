// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require('./Employee.js');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return 'Manager';
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;