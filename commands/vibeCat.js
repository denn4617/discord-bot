module.exports = {
    name: 'vibeCat',
    description: "Just a vibing cat",
    execute(message, inputString) {
        message.channel.send({embed: { 
            color: '#fbfd25', description:'Vibe Cat', 
            image:  {
                url: "https://media1.tenor.com/images/a3d46881428aaca13e9cda7ce95fd145/tenor.gif?itemid=18260767"
            }
        }});

    }
}