// Import the class of Employee into this file so I can use it
const Employee = require('./Employee');
// Declare the Engineer Class 
class Engineer extends Employee {
    // Create the contructor for this class with the paramaeters needed 
    constructor (name, id, email, github) {
        // I call the constructor of Employee with the word super and the parameters of that constructor
        super(name, id, email);
        // I set the value of github
        this.github = github; 
    }
    // Created new method for this class
    getGithub() {
        return this.github;
    }
    // With this I override the method that is on the Employee class
    getRole () {
        return "Engineer";
    }
}
// I export the class 
module.exports = Engineer; 