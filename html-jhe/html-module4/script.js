// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/
(function(goodbyeLetter, names){
  var self = this;

  self.iterateNames = function(){
    for (var index in names) {
      var currentName = names[index];

      if (startWithLetterGoodbyeLetter(currentName)) {
        byeSpeaker.speak(currentName);
      } else {
        helloSpeaker.speak(currentName);
      }
    }
  }

  self.startWithLetterGoodbyeLetter = function (name) {
    if(name && name.length > 0) {
      return name.charAt(0).toLowerCase() === goodbyeLetter;
    } else {
      return false;
    }
  }

  self.sanitizeLetter = function (letter){
    letter = letter || 'j';
    letter = letter.toLowerCase();

    return letter;
  }

  goodbyeLetter = self.sanitizeLetter(goodbyeLetter);

  self.iterateNames();

})(goodbyeLetter, names);
