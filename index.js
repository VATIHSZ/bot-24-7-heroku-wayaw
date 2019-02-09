const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Asyiap`);
});

client.on('message', msg => {
  if (msg.content === 'Hi!') {
    msg.reply('Hi too!');
  }
});

client.login('process.env.BOT_TOKEN');
