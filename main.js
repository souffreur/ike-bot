const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone hello guys!', { disableEveryone: false});
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), hello guys!');
  
});

client.login('NjY2MDE0OTI1MzUyNTk5NTY5.XhuA6w.y58tEAOlN0wr6J39npD5zkI_7uc');