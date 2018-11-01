// Require Third-party Dependencies
const chalk = require("chalk");
const stringLength = require("string-length");

// CONSTANT
const DEFAULT_OPTIONS = {
    borderColor: "green"
};

/**
 * @class Card
 */
class Card {

    /**
     * @constructor
     * @param {Number=} [width=90] card minimum width
     * @param {Object=} opt card option
     * @param {String} [opt.borderColor=green] card borderColor
     */
    constructor(width = 90, opt = Object.create(DEFAULT_OPTIONS)) {
        this.width = width;

        this.padding = opt.borderPadding || 5;
        this.borderColor = opt.borderColor || "green";

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
        const borderColor = chalk[this.borderColor];
        const padding = " ".repeat(this.padding);
        const border = borderColor("║");

        console.log(borderColor(`╔${"═".repeat(this.width)}╗`));
        console.log(borderColor(`║${" ".repeat(this.width)}║`));
        for (const line of this.lines) {
            const diff = this.width - this.padding * 2 - stringLength(line);
            console.log(`${border}${padding}${line}${" ".repeat(diff)}${padding}${border}`);
        }
        console.log(borderColor(`║${" ".repeat(this.width)}║`));
        console.log(borderColor(`╚${"═".repeat(this.width)}╝`));
    }

}

module.exports = Card;
