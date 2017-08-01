function Parser() {
}

Parser.prototype._splitUserInput = function(userInput) {
  var splitInput = userInput.split(" ")
  return splitInput
};

Parser.prototype.selectKeyword = function(splitInput) {
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
