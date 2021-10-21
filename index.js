const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setActivity('ping', { type: 'STREAMING' })
})

client.on('message', message => {
  if (message.content === 'ping') {
    const embed = new MessageEmbed()
      .setTitle('pong')
      .setColor(`RANDOM`)
      .setDescription(`🏓${client.ws.ping}ms `);
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content === 'hi') {
    const embed = new MessageEmbed()
      .setTitle('Hello')
      .setColor(`RANDOM`)
      .setDescription('```how are u my friend :)```');
    message.channel.send(embed);
  }
});


client.login(process.env.token);//if ur using replit then go to that lock🔒and click on it then make a file name it token then put ur token under that :)
