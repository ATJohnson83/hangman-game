var composers = ["bach","mozart","beethoven","debussy","stravinsky"];
var randomComposer = composers[Math.floor(Math.random() * composers.length)];
var guessComposer = [];
	
	for (var i=0; i<randomComposer.length; i++){
	guessComposer[i] = "-";
	}
	var el = document.getElementById('guessword');
		el.innerHTML=guessComposer.join(" ");


var wrongGuesses = [];
// var eleme = document.getElementById('wrong');
// 		eleme.innerHTML=wrongGuesses;

var guessesLeft = 12;
var ele = document.getElementById('remaining');
		ele.innerHTML=guessesLeft;

var wins = 0;
var elem = document.getElementById('numwins');
		elem.innerHTML=wins;

document.onkeyup = function(event) {
	
	var userGuess = event.key;
	
	// el.innerHTML=guessComposer.join(" ");
	

	for(var j=0; j<randomComposer.length; j++){
		
		if(randomComposer[j]===userGuess){
			guessComposer[j]=userGuess;
			}
	}
	
	if (userGuess !== randomComposer[j]){
			wrongGuesses.push(userGuess);
			guessesLeft --;
			var wg = document.getElementById('wrong');
			wg.innerHTML=wrongGuesses;
		}

		
		if(guessComposer.every((v,i)=>v === randomComposer[i]) ){
			alert("Congratulations, You Won!");
			 wins++;
			elem.innerHTML=wins;

		}

		if(guessesLeft===0){
			alert("You lost, study more music...");
		}

		var el = document.getElementById('guessword');
		el.innerHTML=guessComposer.join(" ");

		var ele = document.getElementById('remaining');
		ele.innerHTML=guessesLeft;

		console.log(randomComposer.length);
}

