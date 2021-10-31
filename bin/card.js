#!/usr/bin/env node

// Import Third-party Dependencies
import kleur from "kleur";

// Import Internal Dependencies
import Card from "../src/card.class.js";

const wh = kleur.white;

new Card(70, {
  borderColor: "gray",
  borderPadding: 3
})
  .addLine(kleur.white(`Thomas GENTILHOMME - ${kleur.yellow("fraxken")}`))
  .addLine("")
  .addLine(`${kleur.gray(">")} API & Node.js lead at ${kleur.green("MyUnisoft")}`)
  .addLine(`${kleur.gray(">")} Node.js ${kleur.green("Security")} Working Group`)
  .addLine(`${kleur.gray(">")} OSS Hacker (${wh("@NodeSecure")}, ${wh("@SlimIO")}, ${wh("@NodeLint")})`)
  .addLine("")
  .addLine(`Twitter: ${kleur.cyan("@fraxken")}`)
  .addLine(`GitHub: ${kleur.cyan("https://github.com/fraxken")}`)
  .addLine(`LinkedIn: ${kleur.cyan("https://www.linkedin.com/in/thomas-gentilhomme/")}`)
  .print();
