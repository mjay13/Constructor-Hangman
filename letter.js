//   * **Letter** : 
// Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.

// packages to call
var inquire = require("inquirer");
var color = require("chalk");
var fs = require("fs");

// // files to reference
var Word = require("./word.js");




var Letter = function() {
    //   // switch statement
    //       // game needs to be played:
    //         // prompt
    //             // guess letters
    //             // promise
    //                 // for loop
    //                 // if correct
    //                 // if not 
    //             // callback

    //       // game is won
    //         // show Lippizaner!!
    //         // fs.readFile("./Lipizzaner.txt", "utf8", function(error, data){
    //           //if error throw error
    //           // console.log(color.cyan(data));
    //         // }

    //       // game is lost
    //         // exit
    this.guess = function() {

        if (Word.blankSpaces.includes("_") === false) {
            console.log(color.cyan("YAY!"));
            fs.readFile("./Lipizzaner.txt", "utf8", function(error, data) {
                // if error throw error
                console.log(color.cyan(data));
            });

        } else if (Word.guessesRemaining <= 0) {
            console.log("Too bad, the breed was " + Word.selector);
            inquire.prompt({
                name: "replay_option",
                message: color.green("Want to play again?"),
                type: "list",
                choices: ["Yes, please!", "No thanks."]
            }).then(function(response) {
                if (response.replay_option === "Yes, please!") {
                    console.log("Yay! More dressage breeds to go! Type 'node game' to play again.");
                } else {
                    console.log("Bummer.");
                }
            });
        } else {
            inquire.prompt({
                name: "letter_guess",
                message: "Please guess a letter.",
                type: "input"
            }).then(function(response) {
                input = response.letter_guess;
                if (Word.guessesRemaining > 0) {
                    if (Word.choiceArray.includes(response.letter_guess)) {
                        for (var i = 0; i < Word.choiceArray.length; i++) {
                            if (Word.choiceArray[i].includes(response.letter_guess)) {
                                Word.blankSpaces.splice([i], 1, response.letter_guess);
                            }
                        }

                        var printCorrect = Word.blankSpaces.join(" ");
                        console.log(color.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                        console.log(color.green("correct!"));
                        console.log(color.yellow("<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
                        console.log(color.green(printCorrect));
                        console.log(color.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>"));

                    } else {
                        var printIncorrect = Word.blankSpaces.join(" ");
                        Word.guessesRemaining--;
                        console.log(color.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                        console.log(color.red("incorrect!"));
                        console.log(color.yellow("<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
                        console.log(color.red(printIncorrect));
                        console.log(color.yellow(">>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                        console.log(color.inverse(Word.guessesRemaining + " guesses left--be cautious!"));
                    }
                    this.guess();
                }
            });
            // end of else
        }

        // end guess function
    };
    // end Letter constructor
};




// // exporting
module.exports = Letter;




// test

// fs.readFile("./Lipizzaner.txt", "utf8", function(error, data) {
//     // if error throw error
//     console.log(color.cyan(data));
// });