// Import Third-party Dependencies
import kleur from "kleur";
import stringLength from "string-length";

export default class Card {
  /**
     * @constructor
     * @param {Number=} [width=90] card minimum width
     * @param {Object=} options card option
     * @param {String} [options.borderColor=green] card borderColor
     */
  constructor(width = 90, options = {}) {
    const { borderPadding = 5, borderColor = "green" } = options;
    this.width = width;

    this.padding = borderPadding;
    this.borderColor = borderColor;

    /** @type {String[]} */
    this.lines = [];
  }

  /**
     * @function addLine
     * @param {String=} text line text
     * @return {Card}
     */
  addLine(text = "") {
    this.lines.push(text);

    return this;
  }

  /**
     * @function print
     * @return {void}
     */
  print() {
    const borderColor = kleur[this.borderColor]().bold;
    const padding = " ".repeat(this.padding);
    const border = borderColor("║");

    console.log("");
    console.log(borderColor(`╔${"═".repeat(this.width)}╗`));
    console.log(borderColor(`║${" ".repeat(this.width)}║`));
    for (const line of this.lines) {
      const diff = (this.width - (this.padding * 2)) - stringLength(line);
      console.log(`${border}${padding}${line}${" ".repeat(diff)}${padding}${border}`);
    }
    console.log(borderColor(`║${" ".repeat(this.width)}║`));
    console.log(borderColor(`╚${"═".repeat(this.width)}╝`));
    console.log("");
  }
}
