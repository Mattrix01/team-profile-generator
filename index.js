// Bring in all your classes
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");

// link to page creation
const generateHTML = require("./src/html-page-template.js");

//team array
const teamArray = [];

// inquirer which gets the manager details
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the manager?",
      },
      {
        type: "input",
        name: "userid",
        message: "What is the user's id?",
      },
      { type: "input", name: "email", message: "What is the manager's email?" },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((AnswerData) => {
      console.log(AnswerData.userid);
      var example = new Manager(
        AnswerData.name,
        AnswerData.userid,
        AnswerData.email,
        AnswerData.officeNumber
      );
      teamArray.push(example);
      console.log(teamArray);
      Menu();
    });
};
const Menu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add next?",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((MenuData) => {
      console.log(MenuData);
      if (MenuData.choice === "Engineer") {
        addEngineer();
      }
    });
};

// inquirer which adds engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engiener?",
      },
      {
        type: "input",
        name: "userid",
        message: "What is the user's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "githubName",
        message: "What is the github account?",
      },
    ])
    .then((AnswerData) => {
      console.log(AnswerData.userid);
      var example = new Engineer(
        AnswerData.name,
        AnswerData.userid,
        AnswerData.email,
        AnswerData.githubName
      );
      teamArray.push(example);
      console.log(teamArray);
      Menu();
    });
};

// after you get the manager details ask if he wants to create engineer, intern or nothing
addManager();
// if engineer trigger function which uses inquirer to get details on engineer

// same as above for intern

// after adding eng / intern you ask again, do you want to create another eng, another intern, or nothing

// after they select nothing you have an array full of the employees objects

// pass that array into src / template js file

// new notes to follow!!
//  do same for intern asking questions,
// do a finish that stops asking questions which emans we are done, all these thigns inpoutted go into the array fo objects in team array.
// create index.html with all the answers, build the html template firs tin src, then I fill out with the answers that were provided, string literals etc
// create file with the writeFile method.
