const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("im ready!");
});

client.on("message", msg => {
  // bk
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("pong!");
});

client.login(TOKEN);

