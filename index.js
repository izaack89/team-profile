// Included the packages that I will need on the system 
const fs = require('fs'); 
const inquirer = require('inquirer');

// Import the classes of Engineer,Manager and Intern into this file so I can use it
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Declare the variable that will save the information of the team

const teamInfo = []

//I create the questions for the manager profile
const questionsManager = [
    {
        name: 'managerId',
        message: 'What is the team  manager\'s Id?'
    },
    {
        name: 'managerName',
        message: 'What is the team  manager\'s Name?'
    },
    {
        name: 'managerEmail',
        message: 'What is the team  manager\'s email?'
    },
    {
        name: 'managerOfficeNumber',
        message: 'What is the team  manager\'s Office Number?'
    }
];


//I create the questions for the engineer profile
const questionsEngineer = [
    {
        name: 'engineerId',
        message: 'What is the engineer\'s Id?'
    },
    {
        name: 'engineerName',
        message: 'What is the engineer\'s Name?'
    },
    {
        name: 'engineerEmail',
        message: 'What is the engineer\'s email?'
    },
    {
        name: 'engineerGithub',
        message: 'What is the engineer\'s GitHub username?'
    }
];


//I create the questions for the intern profile
const questionsIntern = [
    {
        name: 'internId',
        message: 'What is the intern\'s Id?'
    },
    {
        name: 'internName',
        message: 'What is the intern\'s Name?'
    },
    {
        name: 'internEmail',
        message: 'What is the intern\'s email?'
    },
    {
        name: 'internSchool',
        message: 'What is the intern\'s School?'
    }
];


//I create the question to add a member on the team
const questionMember= [
    {
        type: 'list',
        name: 'addMember',
        message: 'Which type of team member would you like to add',
        choices: ['Engineer', 'Intern','I don\'t want to add any more team members']
    }
];

// I create a function to DRY and reuse the inquirer , but with the difference that I set a swtich to manage the actions depending on the part of the system 
const inquirerDisplay = function (questions,afterActions) {
    // I call inquirer, I set on the prompt the question that was defined before 
inquirer
    .prompt(questions)
    .then(dataQuestions => {
        switch (afterActions) {
            case 'manager':
                // I create an instance of the Manager class to storage the information providen on the questionnarie
                const manager = new Manager(dataQuestions.managerId, dataQuestions.managerName, dataQuestions.managerEmail, dataQuestions.managerOfficeNumber);
                // I save the instance of the class into an array , this will help me to use it when I print the HTML 
                teamInfo.push(manager); 
                // I call the question of add a Member once I saved the information of the Manager
                inquirerDisplay(questionMember, 'addMember');
            break;
            case 'addMember':
                if (dataQuestions.addMember === "Engineer") {
                    // I call the question of the engineeer 
                    inquirerDisplay(questionsEngineer, 'engineer');
                } else if (dataQuestions.addMember === "Intern") {
                    // I call the question of the engineeer 
                    inquirerDisplay(questionsIntern, 'intern');
                } else {
                    // If this happend I will call the function that create the HTML file 
                    console.log(teamInfo); 
                }
                
                break;
            case 'engineer':
                // I create an instance of the Engineer class to storage the information providen on the questionnarie
                const engineer = new Engineer(dataQuestions.engineerId, dataQuestions.engineerName, dataQuestions.engineerEmail, dataQuestions.engineerGithub);
                // I save the instance of the class into an array , this will help me to use it when I print the HTML 
                teamInfo.push(engineer);
                // I call the question of add a Member once I saved the information of the Engineer
                inquirerDisplay(questionMember, 'addMember');
                break;
            case 'intern':
                // I create an instance of the Intern class to storage the information providen on the questionnarie
                const intern = new Intern(dataQuestions.internId, dataQuestions.internName, dataQuestions.internEmail, dataQuestions.internSchool);
                // I save the instance of the class into an array , this will help me to use it when I print the HTML 
                teamInfo.push(intern);
                // I call the question of add a Member once I saved the information of the Intern
                inquirerDisplay(questionMember, 'addMember');
                break;
        }
    });
}


const init = function () {
    // I initialize the system to display the information of the manager 
    inquirerDisplay(questionsManager, 'manager');
}
// Function call to initialize app
init();