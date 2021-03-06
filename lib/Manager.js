// Import the class of Employee into this file so I can use it
const Employee = require('./Employee');
// Declare the Manager Class 
class Manager extends Employee {
    // Create the contructor for this class with the paramaeters needed 
    constructor (id, name, email, officeNumber) {
        // I call the constructor of Employee with the word super and the parameters of that constructor
        super(id, name, email);
        // I set the value of officeNumber
        this.officeNumber = officeNumber; 
    }
    // With this I override the method that is on the Employee class
    getRole () {
        return "Manager";
    }
}
// I export the class 
module.exports = Manager; 