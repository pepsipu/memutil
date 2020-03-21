const { gpio } = require("onoff");
const { pins } = require("../config");
module.exports = class IO {
    write(byte, address) {
        const bits =  (byte >>> 0).toString(2).split("").map(bit => parseInt(bit));
        console.log(bits);
        pins.data.forEach(pin => {

        });
    }
};