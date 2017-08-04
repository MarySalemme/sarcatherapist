var self = this

  function Bot(parser, dictionary) {
    this._inputType = null,
    this._curseKeyWords = ["substitute", "substitute", "substitute"],
    this._parser = parser
    this._dictionary = dictionary
  }

  Bot.prototype.produceResponse = function (userInput) {
    var testParser = this._getParser()
    var processedArray = testParser.entireParseProcess(userInput);
    this._categoriseUserInput(processedArray);
    return this._pickAppropriateResponse();
  };


  Bot.prototype._checkForGreeting = function(userInput) {
    var botSelf = this
    return userInput.some(function(input) { return botSelf._greetingKeyWords.includes
    (input) })
  };

  Bot.prototype._checkForCurse = function(userInput) {
    var botSelf = this
    return userInput.some(function(input) { return botSelf._curseKeyWords.includes
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
    var greetingResponse = this._dictionary.greetResponse[Math.floor(Math.random() * dictionary.greetResponse.length)];
    return greetingResponse
  };

  Bot.prototype._sampledGenericResponse = function () {
    var genericResponse = "Have you tried drinking more?"
    return genericResponse
  };

  Bot.prototype._pickAppropriateResponse = function () {
    hash = {"curse": this._sampledCurseResponse(), "greeting": this._sampledGreetingResponse(), "generic": this._sampledGenericResponse()}
    return hash[this._inputType]
  }
