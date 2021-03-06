//   **Word**: 
// Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.
var color = require("chalk");

var Letter = require("./letter.js"); // calling functions/data from letter.js
var Guess = new Letter(); // making new input for the Letter constructor

// dressage breeds to guess <3
var choices = ["Akhal Teke", "Andalusian", "Belgian Warmblood", "Dutch Warmblood", "Fresian", "Hanoverian", "Holsteiner", "Lipizzaner", "Lustiano", "Oldenburg", "Selle Francais", "Trakehner"];
var selector = choices[Math.floor(Math.random() * choices.length)]; // select which breed
var choiceArray = selector.toLowerCase().split(""); // takes the name and splits it into an array
var guessesRemaining = choiceArray.length; // remaining guesses
var blankSpaces = []; 


var Word = function () {
	
	this.emptyWord = function() {
		
		// for loop for figuring out how many guesses and blank spaces
		for (var i = 0; i < choiceArray.length; i++){
			blankSpaces.push("_");
		}
		// print blank spaces
		var spacesPrint = blankSpaces.join(" ");
		console.log(color.cyan(">>>>>>>>>>>>>>>>>>>>>>>>>>>"));
		console.log(color.green(spacesPrint));
		console.log(color.cyan("<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
		// print how many guesses left
		console.log(color.red(guessesRemaining + " guesses left!"));
		// call game
		this.gameStart();
		


	};

	// function for the game
	this.gameStart = function () {
		// calls from letter.js the prompts and such
		Guess.guess();
	};


};

// exporting // put in an object?
module.exports.selector = selector;
module.exports.choiceArray = choiceArray;
module.exports.guessesRemaining = guessesRemaining;
module.exports.blankSpaces = blankSpaces;
module.exports = Word;

