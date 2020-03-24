const colors = require("colors/safe");

module.exports = {
    fn: (args, serial) => {
        serial.write(args[1]);
        console.log("wrote");
    },
    name: "poke",
    description: "<address> <value>: write a value to a memory address.",
    color: colors.cyan
};