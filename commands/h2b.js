module.exports = {
    name: 'h2b',
    description: "Converts a hexadecimal to a binary number",
    execute(message, inputString){
        let result = "";
        
        if (inputString.includes('x')) {
            inputString[0] = inputString[0].split('x').pop();
        }
        inputString.forEach(element => {
            result += hexToBinaryConverter(element);
        })
        message.channel.send(result);


        function hexToBinaryConverter(hex) {
            return (parseInt(hex, 16).toString(2)).padStart(8, '0');
        }
    }
    
}