const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('ready', () => {
  console.log('?[??????????????????????????????????]?');
  console.log('')
  console.log('            ?[????????????]?')
  console.log('              Bot Is Online')
  console.log('            ?[????????????]?')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('?[????????????????????????????????????]?')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '423934297376817172').setName("༺");  
client.channels.find('id', '423934297376817172').setName("༺W");
client.channels.find('id', '423934297376817172').setName("༺WE");
client.channels.find('id', '423934297376817172').setName("༺WEL");
client.channels.find('id', '423934297376817172').setName("༺WELC");
client.channels.find('id', '423934297376817172').setName("༺WELCO");
client.channels.find('id', '423934297376817172').setName("༺WELCOM");
client.channels.find('id', '423934297376817172').setName("༺WELCOME");  
client.channels.find('id', '423934297376817172').setName("༺WELCOME T");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO F");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FI");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FIN");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINE");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINEX");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINEX༺");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINEX༺🌹");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINEX༺🌹");
client.channels.find('id', '423934297376817172').setName("༺WELCOME TO FINEX༺🌹");  
  }, 3000);
});




console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 
client.on("message", message => {
 
  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }
 
  if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
    message.channel.send("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else
 
if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}
 
});
const config = require('./config.json');

 
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;
 
client.on("ready", () => {
    client.user.setPresence({ game: { name: `RAINBOW (= FX` }, type: 0 });
    console.log("RAINBOW (= FX");
});


client.login(process.env.BOT_TOKEN);
