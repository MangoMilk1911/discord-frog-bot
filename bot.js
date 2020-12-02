require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_PREFIX = "~"
const FROG_PIC = "froggy"

client.on('ready', () => {
    console.log('Ribbit 🐸');
});

client.on('message', msg => {
    if (msg.content === `${BOT_PREFIX}${FROG_PIC}`) {
        sendFrog(msg)
    }
});

function sendFrog(msg) {
    const froggy = Math.floor(Math.random() * 54) + 1;
    if (froggy < 10) {
        msg.channel.send(`http://www.allaboutfrogs.org/funstuff/random/000${froggy}.jpg`)
    } else {
        msg.channel.send(`http://www.allaboutfrogs.org/funstuff/random/00${froggy}.jpg`)
    }
    msg.react('🐸')
}

client.login(process.env.BOT_TOKEN);