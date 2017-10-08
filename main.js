

var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
 botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	displayPlayerResult("You played rock.");
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
var botsWeapon=getRandomWeapon();
checkWhoWon(botsWeapon, "scissors");
displayPlayerResult("You played scissors.");

}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
var botsWeapon=getRandomWeapon();
checkWhoWon(botsWeapon, "paper");
displayPlayerResult("You played paper.");

}
document.getElementById("lizard").onclick=playerThrowsLizard;
function playerThrowsLizard(){
var botsWeapon=getRandomWeapon();
checkWhoWon(botsWeapon, "lizard");
displayPlayerResult("You played lizard.");

}

document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsSpock(){
var botsWeapon=getRandomWeapon();
checkWhoWon(botsWeapon, "spock");
displayPlayerResult("You played Spock.")

}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	displayBotResult("The Bot played rock.")

	if(randomNumber<.2){
		botsWeapon="scissors";
		displayBotResult("The Bot played scissors.")
	}
	else if(randomNumber<.4){
		botsWeapon="paper";
		displayBotResult("The Bot played paper.")
	}

else if(randomNumber<.6){
	botsWeapon="lizard";
	displayBotResult("The Bot played lizard.")
}

else if(randomNumber<.8){
	botsWeapon="spock";
	displayBotResult("The Bot played Spock.");
}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie. :|");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="spock" && playersWeapon=="rock")||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="lizard" && playersWeapon=="spock")||
		(botsWeapon=="paper" && playersWeapon=="spock")

		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser.:(");
}
function increasePlayerScore(){
playerScore+=1;
document.getElementById("humanScore").innerHTML=playerScore;
displayCompleteMessage("You win! :)");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displayPlayerResult(msg){
	document.getElementById("playerItem").innerHTML=msg;
}

function displayBotResult(msg){
	document.getElementById("botItem").innerHTML=msg;
}
