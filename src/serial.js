class Serial {
    async write(str) {
        for (let char of str) {
            await new Promise(resolve => setTimeout(resolve, 1));
            this.port.write(char);
        }
    }

    data_handler(chunk) {

    }
    constructor(port) {
        this.port = port;
        this.port.on("data", chunk => {
            if (chunk.toString() === "UART_OK!") {
                this.port.on("data", this.data_handler);
            }
        });
        this.write("UART_OK?");
        console.log(this.port.read());
    }
}

module.exports = Serial;