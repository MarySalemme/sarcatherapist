function Bot(parser) {
  this._inputType = null,
  this._greetingKeyWords = greetKey,
  this._seriousKeyWords = seriousKey,
  this._mildNegativeKeyWords = mildNegativeKey,
  this._yesKeyWords = yesKey,
  this._curseKeyWords = ["substitute", "substitute", "substitute"],
  this._parser = parser
}

Bot.prototype.produceResponse = function (userInput) {
  var testParser = this._getParser()
  var processedArray = testParser.entireParseProcess(userInput);
  this._categoriseUserInput(processedArray);
  return this._pickAppropriateResponse();
};


Bot.prototype._checkForGreeting = function(userInput) {
  var self = this
  return userInput.some(function(input) { return self._greetingKeyWords.includes
  (input) })
};

Bot.prototype._checkForYes = function(userInput) {
  var self = this
  return userInput.some(function(input) { return self._yesKeyWords.includes
  (input) })
};

Bot.prototype._checkForMildNegative = function(userInput) {
  var self = this
  return userInput.some(function(input) { return self._mildNegativeKeyWords.includes
  (input) })
};


Bot.prototype._checkForCurse = function(userInput) {
  var self = this
  return userInput.some(function(input) { return self._curseKeyWords.includes
  (input) })
};

Bot.prototype._checkForSerious = function(userInput) {
  var self = this
  return userInput.some(function(input) { return self._seriousKeyWords.includes
  (input) })
};


Bot.prototype._categoriseUserInput = function(userInput) {
  if (this._checkForGreeting(userInput)) {
      this._inputType = "greeting"
  } else if (this._checkForCurse(userInput)) {
      this._inputType = "curse"
  }  else if (this._checkForSerious(userInput)) {
      this._inputType = "serious"
  }  else if (this._checkForMildNegative(userInput)) {
      this._inputType = "mild"
  }  else if (this._checkForYes(userInput)) {
      this._inputType = "yes"
  } else {
      this._inputType = "generic"
  }
};

Bot.prototype._getParser = function () {
  return this._parser;
};

Bot.prototype._sampledCurseResponse = function () {
  var curseResponse = "Go Freud yourself."
    return curseResponse;
};

Bot.prototype._sampledMildResponse = function () {
  var mildResponse = mildNegativeResponse[Math.floor(Math.random() * mildNegativeResponse.length)];
  return mildResponse
};

Bot.prototype._sampledSeriousResponse = function () {
  return seriousResponse
};

Bot.prototype._sampledYesResponse = function () {
  var yeahResponse = yesResponse[Math.floor(Math.random() * yesResponse.length)];
  return yeahResponse
};

Bot.prototype._sampledGreetingResponse = function () {
  var greetingResponse = greetResponse[Math.floor(Math.random() * greetResponse.length)];
  return greetingResponse
};

Bot.prototype._sampledGenericResponse = function () {
  var genResponse = genericResponse[Math.floor(Math.random() * genericResponse.length)];
  return genResponse
};

Bot.prototype._pickAppropriateResponse = function () {
  hash = {"curse": this._sampledCurseResponse(), "yes": this._sampledYesResponse(), "mild": this._sampledMildResponse(), "serious": this._sampledSeriousResponse(), "greeting": this._sampledGreetingResponse(), "generic": this._sampledGenericResponse()}
  return hash[this._inputType]
}
