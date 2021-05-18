// Created the class 
class Employee {
    // Create the constructor with the parameters that need 
    constructor(id,name,email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // Created all the methos need for this class
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee";
    }
}
// The class is exported so can be used on others files
module.exports = Employee;