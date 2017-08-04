
function Parser() {
}

Parser.prototype._splitUserInput = function(userInput) {
  return userInput.split(" ")
};

Parser.prototype.entireParseProcess = function(userInput) {
  return this._splitUserInput(userInput);
};
