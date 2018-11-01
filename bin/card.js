#!/usr/bin/env node

// Require Third-party Dependencies
const chalk = require("chalk");

// Require Internal Dependencies
const Card = require("../src/card.class");

new Card(80, {
    borderColor: "cyan",
    borderPadding: 3
})
    .addLine(`Thomas GENTILHOMME - ${chalk.yellow("fraxken")}`)
    .addLine(`ECMAScript & Node.js Evangelist. Founder of ${chalk.green("@ES-Community")}`)
    .addLine("")
    .addLine(`Twitter: ${chalk.yellow("@fraxken")}`)
    .addLine(`GitHub: ${chalk.green("https://github.com/fraxken")}`)
    .addLine(`LinkedIn: ${chalk.green("https://www.linkedin.com/in/thomasgentilhomme-58192195/")}`)
    .addLine("")
    .addLine(`Card: npx ${chalk.yellow("fraxken")}`)
    .print();
