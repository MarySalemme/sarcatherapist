
  function Bot(parser) {
    this._inputType = null
    this._greetingKeyWords = ["hi", "hello", "salutations"]
    this._curseKeyWords = ["substitute", "substitute", "substitute"]
    this._parser = parser;
  }

  Bot.prototype.produceResponse = function (userInput) {
    var testParser = this._getParser()
    var processedArray = testParser.entireParseProcess(userInput);
    this._categoriseUserInput(processedArray);
    return this.giveApproriateResponse();
  };


  Bot.prototype._checkForGreeting = function(userInput) {
    var self = this
    return userInput.some(function(input) { return self._greetingKeyWords.includes
    (input) })
  };

  Bot.prototype._checkForCurse = function(userInput) {
    var self = this
    return userInput.some(function(input) { return self._curseKeyWords.includes
    (input) })
  };

  Bot.prototype._categoriseUserInput = function(userInput) {
    if (this._checkForGreeting(userInput)) {
      this._inputType = "greeting"
    } else if (this._checkForCurse(userInput)) {
      this._inputType = "curse"
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

  Bot.prototype._sampledGreetingResponse = function () {
    var greetingResponse = "Oh, it's you. Let's make this quick"
    return greetingResponse
  };

  Bot.prototype._sampledGenericResponse = function () {
    var genericResponse = "Have you tried drinking more?"
    return genericResponse
  };

  Bot.prototype.giveApproriateResponse = function () {
    hash = {"curse": this._sampledCurseResponse(), "greeting": this._sampledGreetingResponse(), "generic": this._sampledGenericResponse()}
    return hash[this._inputType]
  }
