
  function Bot(parser) {
    this._inputType = null

    this._greetingKeyWords = ["hi", "hello", "salutations"]
    this._curseKeyWords = ["substitute", "substitute", "substitute"]

    this.greetingResponse = "Oh, it's you. Let's make this quick"
    this.curseResponse = "Go Freud yourself."
    this.genericResponse = "Have you tried drinking more?"

    this._parser = parser;
  }

  Bot.prototype.produceResponse = function (userInput) {
    var testParser = this._getParser()
    var processedArray = testParser.entireParseProcess(userInput);
    this._categoriseUserInput(processedArray);
    return this._sampleResponse();
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

  Bot.prototype._sampleResponse = function() {
    if (this._inputType === "curse") {
      return this.curseResponse;
    } else if (this._inputType === "greeting") {
      return this.greetingResponse;
    } else {
      return this.genericResponse;
    }
  };


    Bot.prototype._getParser = function () {
      return this._parser;
    };
