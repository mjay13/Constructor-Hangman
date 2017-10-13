//   * **Letter** : 
// Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.

// packages to call
//var inquire = require("inquirer");
var color = require("chalk");
var fs = require("fs");

// // files to reference
// var THEword = require("./word.js");




// var Letter = function(){
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
          
// };


// // exporting
// module.exports = Letter;

// test

fs.readFile("./Lipizzaner.txt", "utf8", function(error, data){
          // if error throw error
          console.log(color.cyan(data));
        });