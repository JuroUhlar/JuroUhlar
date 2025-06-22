#!/usr/bin/env node

// You can run this script from anywhere with Node installed like this: 
// npx --yes jurouhlar/jurouhlar
// Stolen with ❤️ from https://egghead.io/lessons/npm-execute-code-from-a-remote-github-branch-with-npx   

import fs from "fs";
import path from "path";

const output = fs.readFileSync(path.join(__dirname, "README.md"), "utf8");
console.log(output);
