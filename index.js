const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('ODk0OTc2MjgxODM2NDIxMTcx.YVx1nQ.eEsDRZv8vkRbM-5moBxGOCwp4g4');