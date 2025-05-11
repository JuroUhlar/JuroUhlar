#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const output = fs.readFileSync(path.join(__dirname, "README.md"), "utf8");
console.log(output);
