const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

//S T A R T______________________________________________________________________________________________

client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!start")) {
	message.react("👌");  //Acknowledge
function strt () {
function routine1(){
	function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');
	//message.channel.send('!tip 5000000000000 <@260241663018926080>');
	}
	function step2(){
	message.channel.send('!buy max fracker');
	}
	function step3(){
	message.channel.send('!buy max swarm');
	}
	function step4(){	
	message.channel.send('!buy max robot');
	}
	function step5(){	
	message.channel.send('!buy max miner');
	message.channel.send('!prestige YESIMSURE');
	}
	var one = setTimeout(function() {step1(1)}, 500);
	var two = setTimeout(function() {step2(1)}, 30000);
	var three = setTimeout(function() {step3(1)}, 40000);
	var four = setTimeout(function() {step4(1)}, 50000);
	var five = setTimeout(function() {step5(1)}, 60000);
	}
function routine2(){
	function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');
	}
	function step2(){	
	//message.channel.send('!tip 5000000000000 <@260241663018926080>');
	//message.channel.send('!tip 2000000000000 <@260241663018926080>');
	//message.channel.send('!tip 50000000000 <@260241663018926080>');
	//message.channel.send('!tip 20000000000 <@260241663018926080>');
	}
	
	function step3(){
	message.channel.send('!buy max swarm');
	}
	function step4(){	
	message.channel.send('!buy max robot');
	}
	function step5(){	
	message.channel.send('!buy max miner');
	message.channel.send('!prestige YESIMSURE');
	}
	var one = setTimeout(function() {step1(1)}, 500);
	//var two = setTimeout(function() {step2(1)}, 30000);
	var three = setTimeout(function() {step3(1)}, 40000);
	var four = setTimeout(function() {step4(1)}, 50000);
	var five = setTimeout(function() {step5(1)}, 60000);
	}
function routine3(){
	function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');
	//message.channel.send('!tip 500000000000000 <@260241663018926080>');
	}
	function step2(){	
	//message.channel.send('!tip 20000000000000 <@260241663018926080>');
	//message.channel.send('!tip 200000000000 <@260241663018926080>');
	//message.channel.send('!tip 5000000 <@260241663018926080>');
	}
	function step3(){
	//message.channel.send('!tip 200000 <@260241663018926080>');
	//message.channel.send('!tip 50000 <@260241663018926080>');
	//message.channel.send('!tip 10000 <@260241663018926080>');
	}
	function step4(){
	message.channel.send('!buy max robot');
	}
	function step5(){	
	message.channel.send('!buy max miner');
	message.channel.send('!prestige YESIMSURE');
	}
	var one = setTimeout(function() {step1(1)}, 500);
	//var two = setTimeout(function() {step2(1)}, 30000);
	//var three = setTimeout(function() {step3(1)}, 40000);
	var four = setTimeout(function() {step4(1)}, 50000);
	var five = setTimeout(function() {step5(1)}, 60000);
	}
function routine4(){
	function step1(){
	message.channel.send('!mine');
	message.channel.send('!collect');
	message.channel.send('!memes');
	}
	/*function step2(){	
	message.channel.send('!buy max fracker');
	}
	function step3(){
	message.channel.send('!buy max swarm');
	}*/
	function step4(){	
	//message.channel.send('!tip 20000000000000 <@260241663018926080>');
	//message.channel.send('!tip 200000000000 <@260241663018926080>');
	//message.channel.send('!tip 5000000 <@260241663018926080>');
	}
	function step5(){
	//message.channel.send('!tip 50000000000 <@260241663018926080>');
	message.channel.send('!buy max miner');
	message.channel.send('!prestige YESIMSURE');
	}
	var one = setTimeout(function() {step1(1)}, 500);
	//var two = setTimeout(function() {step2(1)}, 30000);
	//var three = setTimeout(function() {step3(1)}, 40000);
	//var four = setTimeout(function() {step4(1)}, 50000);
	var five = setTimeout(function() {step5(1)}, 60000);
	}
var routineA = setTimeout(function() {routine1(1)}, 3000);
var routineB = setTimeout(function() {routine2(1)}, 73000);
var routineC = setTimeout(function() {routine3(1)}, 143000);
var routineD = setTimeout(function() {routine4(1)}, 213000);
		}
	var initial1 = setTimeout(function() {strt(1)}, 200);
	var initial2 = setInterval(function() {strt(1)}, 600000);
 }
});



//__________CASINO____________________________________________
client.on('message', message =>{
 if (message.author.id == 260241663018926080 && message.content.includes("!casino")) {
	message.react("👌");  //Acknowledge
function casino () {
message.channel.send('+ca');
		}
function respond () {
var today = new Date();
var minutes = today.getUTCMinutes();
message.channel.send('`Operation collect still active`');
		}
	var initia1 = setTimeout(function() {casino(1)}, 200);
	var initia1 = setInterval(function() {respond(1)}, 30000);
	var initia2 = setInterval(function() {casino(1)}, 3750000);
 }});

	

//________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
