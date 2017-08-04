
function Dictionary () {
  this.greetkeywords = Dictionary.greetKeywords()
  this.greetResponse = Dictionary.greetResponse()
}

Dictionary.prototype.greetKeywords = function () {
  return [ "hi",
          "hey",
          "howdy",
          "greetings",
          "yo",
          "hiya",
          "aloha",
          "g'day",
          "ciao",
          "sup",
          "bonjour",
          "hola",
          "morning",
          "heya",
          "holler",
          "ahoy",
          "elloello" ]
};


Dictionary.prototype.greetResponse = function () {

  return [ "Oh, it's you let's make this quick",
           "Come into my cyber-office",
           "Not you again",
           "I have issues. You have issues. Let's chat"
        ]
};


// var genericResponse = [
//   "Therapy is for the weak"
// ]
