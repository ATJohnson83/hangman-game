var composers = ["bach", "mozart", "beethoven", "debussy", "stravinsky"];
var randomComposer = composers[Math.floor(Math.random() * composers.length)];
var guessComposer = [];


function reset() {

    function wrong() {
        var wg = document.getElementById('wrong');
        wrongGuesses = [];
        wg.innerHTML = wrongGuesses;
        // wrongGuesses = [];
        // console.log(wrongGuesses);
    };

    function numleft() {
        var ele = document.getElementById('remaining');
        guessesLeft = 12;
        ele.innerHTML = guessesLeft;
        // guessesLeft = 12;
        // console.log(guessesLeft);
    };


    for (var i = 0; i < randomComposer.length; i++) {
        guessComposer[i] = "-";
    }
    var guesswrd = document.getElementById('guessword');
    guesswrd.innerHTML = guessComposer.join(" ");

    numleft();
    wrong();

}

for (var i = 0; i < randomComposer.length; i++) {
    guessComposer[i] = "-";
}
var guesswrd = document.getElementById('guessword');
guesswrd.innerHTML = guessComposer.join(" ");


var wrongGuesses = [];
// var eleme = document.getElementById('wrong');
// 		eleme.innerHTML=wrongGuesses;

var guessesLeft = 12;
var ele = document.getElementById('remaining');
ele.innerHTML = guessesLeft;

var wins = 0;
var elem = document.getElementById('numwins');
elem.innerHTML = wins;

var losses = 0;
var loser = document.getElementById('numlosses');
loser.innerHTML = losses;

document.onkeyup = function(event) {

    var userGuess = event.key;

    // el.innerHTML=guessComposer.join(" ");


    for (var j = 0; j < randomComposer.length; j++) {

        if (randomComposer[j] === userGuess) {
            guessComposer[j] = userGuess;
        }
    }

    if (randomComposer.indexOf(userGuess) == -1) {

        if (wrongGuesses.indexOf(userGuess) !== -1) {
            alert("You already tried that key..");
        } else {
            wrongGuesses.push(userGuess);
            guessesLeft--;
            var wg = document.getElementById('wrong');
            wg.innerHTML = wrongGuesses;
        }
    }
    // if (wrongGuesses.indexOf(userGuess) !== -1){
    // 	alert("You already tried that key..");
    // }


    if (guessComposer.every((v, i) => v === randomComposer[i])) {
        alert("Congratulations, You Won!");
        wins++;
        elem.innerHTML = wins;

    }

    if (guessesLeft === 0) {
        alert("You lost, study more music...");
        losses++;
        loser.innerHTML = losses;
    }

    var el = document.getElementById('guessword');
    el.innerHTML = guessComposer.join(" ");

    var ele = document.getElementById('remaining');
    ele.innerHTML = guessesLeft;

}
