module.exports = {
    name: 'php',
    description: "fuck php",
    execute(message, inputString) {
        const rando_imgs = [
            'https://i.imgur.com/by6xKf4.jpg',
            'https://i.imgur.com/30TM2vP.jpg',
            'https://preview.redd.it/szh73097hl6z.png?width=960&crop=smart&auto=webp&s=37f7c11972a087758c59817f1c613f2440d17791',
            'https://i.redd.it/85ajto5ekac11.png',
            'https://img.devrant.com/devrant/rant/r_1791503_bE9T2.jpg',
            'https://external-preview.redd.it/RBnbljpNpJ1igjVJ3iZtrbiUjXy5eSYsc1qbpH1DsPk.png?width=960&crop=smart&auto=webp&s=7dfe16917836ead7274c10f170fcab2dfd24f2b2',
            'https://i.redd.it/letxx1scsjh41.jpg',
            'https://img.devrant.com/devrant/rant/r_1431819_xVZSF.jpg',
            'https://i.imgflip.com/1cla53.jpg',
            'https://starecat.com/content/wp-content/uploads/whats-the-most-fcked-up-thing-youve-done-for-money-use-php.jpg',
            'https://i.redd.it/oul3gz1bvwwy.jpg',
            'https://img.devrant.com/devrant/rant/r_1411443_i938D.jpg',
            'https://preview.redd.it/iff651dphmv51.jpg?width=960&crop=smart&auto=webp&s=a6953c4ffecb7a44104ab401d6fe1b141dc5de30',
        ]
        
        message.channel.send({embed: { 
            color: '#fbfd25', description:'fuck PHP <:fuckphp:808110722482438204>', 
            image:  {
                url: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
            }
        }});
        
    }
}