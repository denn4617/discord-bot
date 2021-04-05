module.exports = {
    name: 'help',
    description: "Lists all the available commands",
    execute(message, inputString, Discord) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#fbfd25')
            .setTitle('Command List')
            .setAuthor('dunnis\' bot', 'https://preview.redd.it/wr61jnqaa9k51.jpg?auto=webp&s=70d5b5a078233d10c60f1a54aec33f6df57d1b28')
           
            .addFields(

                { name: '#h2b <hexadecimal>', value: 'Converts hexadecimal to binary' },
                { name: '#b2h <binary>', value: 'Converts binary to hexadecimal' },
                { name: '#help', value: 'Display all the commands' },
                { name: '#vibecat', value: 'Never vibe alone' },
                { name: '#php', value: 'Just fuck PHP'},                
            )

            .setTimestamp()

        message.channel.send(exampleEmbed);
    }
}