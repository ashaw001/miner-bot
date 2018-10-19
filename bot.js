const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});


client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!casino")) {
	message.react("👌");  //Acknowledge
function casino () {
message.channel.send('+ca');
		}
	var initia1 = setTimeout(function() {casino(1)}, 200);
	var initia2 = setInterval(function() {casino(1)}, 4500000);
 }});

	

//________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
