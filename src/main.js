const fs = require("fs");
const colors = require("colors");
const IO = require("./io");

const io = new IO();

console.log("Welcome to memutil.js!".rainbow);

let modules = {};

fs.readdirSync("./src/modules").forEach(file => {
    const module = require(`./modules/${file}`);
    modules[module.name] = module;
});
console.log(modules);
io.write(0b1011, 0xff);
