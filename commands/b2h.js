module.exports = {
    name: 'b2h',
    description: "Converts a binary number to hexadecimal",
    execute(message, inputString){
        let result = "";
        
        inputString.forEach(element => {
            result += binaryToHexConverter(element);
        })
        message.channel.send(`0x${result}`);

        function binaryToHexConverter(binary) {
            return parseInt(binary, 2).toString(16).toUpperCase();
        }
    }
}