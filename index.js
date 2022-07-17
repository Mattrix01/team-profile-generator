// Bring in all your classes
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");

// link to page creation
const generateHTML = require("./src/generateHTML");

//team array
const teamArray = [];

// inquirer which gets the manager details

// after you get the manager details ask if he wants to create engineer, intern or nothing

// if engineer trigger function which uses inquirer to get details on engineer

// same as above for intern

// after adding eng / intern you ask again, do you want to create another eng, another intern, or nothing

// after they select nothing you have an array full of the employees objects

// pass that array into src / template js file
// creating variable and using function to bring in Iquirer, manager, engineer,intern, fs and generate team
