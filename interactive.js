#!/usr/bin/env node

// You can run this script from anywhere like with node installed like this:
// npx --yes -p jurouhlar/jurouhlar interactive
// Stolen with ❤️ from https://egghead.io/lessons/npm-execute-code-from-a-remote-github-branch-with-npx

import inquirer from 'inquirer';
import cfonts from 'cfonts';
import opn from 'opn';

const actions = {
  GitHub() {
    opn("https://github.com/JuroUhlar");
  },
  Twitter() {
    opn("https://x.com/JurajUhlar");
  },
  Blog() {
    opn("https://medium.com/@jurouhlar");
  },
  LinkedIn() {
    opn("https://www.linkedin.com/in/juraj-uhlar/");
  },
  Quit() {
    process.exit(1);
  },
};

cfonts.say("Juraj Uhlar", {
  font: "chrome",
  colors: ["blue", "white", "blue"],
});

console.log(`Greetings, my name is Juraj Uhlar.
I am a Developer Experience Engineer.
I work at Fingerprint.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: ["GitHub", "Twitter", "Blog", "LinkedIn", "Quit"],
    },
  ])
  .then((answers) => {
    actions[answers.choice]();
    process.exit(1);
  });
