function Parser() {
}

Parser.prototype._splitUserInput = function(userInput) {
  return userInput.split(" ")
};

Parser.prototype.selectKeyword = function(userInput) {
  var splitInput = this._splitUserInput(userInput)
  if (splitInput.includes("sad")) {
    return "sad"
  } else if (splitInput.includes("happy")) {
    return "happy"
  } else if (splitInput.includes("ok")) {
    return "ok"
  } else {
    return "meh"
  }
};
