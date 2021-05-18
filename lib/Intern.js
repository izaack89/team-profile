// Import the class of Employee into this file so I can use it
const Employee = require('./Employee');
// Declare the Intern Class 
class Intern extends Employee {
    // Create the contructor for this class with the paramaeters needed 
    constructor (name, id, email, school) {
        // I call the constructor of Employee with the word super and the parameters of that constructor
        super(name, id, email);
        // I set the value of officeNumber
        this.school = school; 
    }
    // Create new method 
    getSchool() {
        return this.school;
    }
    // With this I override the method that is on the Employee class
    getRole () {
        return "Intern";
    }
}
// I export the class 
module.exports = Intern; 