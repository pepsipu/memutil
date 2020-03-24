const fs = require("fs");
const colors = require("colors");
const SerialPort = require("serialport");
const Serial = require("./serial");

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let port = new SerialPort("/dev/ttyUSB0", {
    baudRate: 115200,
});
let serial = new Serial(port);
let modules = {};

console.log("Welcome to memutil.js!".rainbow);
fs.readdirSync("./src/modules").forEach(file => {
    const mod = require(`./modules/${file}`);
    modules[mod.name] = mod;
    console.log(mod.color(`  - ${mod.name} ${mod.description}`));
});
rl.setPrompt('memutil> '.red);

rl.prompt();
rl.on('line', line => {
    let args = line.trim().split(" ");
    if (args[0] in modules) {
        modules[args[0]].fn(args, serial);
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});

