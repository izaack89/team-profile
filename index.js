// Included the packages that I will need on the system 
const fs = require('fs'); 
const inquirer = require('inquirer');

// Import the classes of Engineer,Manager and Intern into this file so I can use it
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Declare the variable that will save the information of the team

const team = []

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
        choices: ['Engineer', 'Intern','None'],
        default: 'None'
    }
];