const fs = require('fs');
const inquirer = require('inquirer');

const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');

const createHTML = require('./src/createHTML');
const myTeam = [];

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        }, 
   
    ]).then(answers => {
        const teamManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        myTeam.push(teamManager);

        mainMenuPrompt();
    });
};

managerPrompt();

const engineerPrompt = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
      },
    ]).then(answers => {
      const teamEngineer = new engineer(answers.name, answers.id, answers.email, answers.github);
      myTeam.push(teamEngineer);
  
      mainMenuPrompt();
    });
  };

  const internPrompt = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
      },
    ]).then(answers => {
      const teamIntern = new intern(answers.name, answers.id, answers.email, answers.school);
      myTeam.push(teamIntern);
  
      mainMenuPrompt();
    });
  };

  const mainMenuPrompt = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
      },
    ]).then(answer => {
      switch (answer.choice) {
        case 'Add an engineer':
          engineerPrompt();
          break;
        case 'Add an intern':
          internPrompt();
          break;
        case 'Finish building my team':
          const html = createHTML(myTeam);
          fs.writeFile('./dist/index.html', html, err => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Team profile page generated successfully!');
          });          
      }
    });
  };
  
  
  