
  function Bot(parser) {
    this._inputType = null

    this._greetingKeyWords = ["hi", "hello", "salutations"]
    this._curseKeyWords = ["substitute", "substitute", "substitute"]

    this.greetingResponse = "Oh, it's you. Let's make this quick"
    this.curseResponse = "Go Freud yourself."
    this.genericResponse = "Have you tried drinking more?"
    this._parser = parser;
  }

  Bot.prototype.getParser = function () {
    return this._parser;
  };

  Bot.prototype.checkForGreeting = function(userInput) {
    var self = this
    return userInput.some(function(input) { return self._greetingKeyWords.includes
    (input) })
  };

  Bot.prototype.checkForCurse = function(userInput) {
    var self = this
    return userInput.some(function(input) { return self._curseKeyWords.includes
    (input) })
  };

  Bot.prototype.categoriseUserInput = function(userInput) {
    if (this.checkForGreeting(userInput)) {
      this._inputType = "greeting"
    } else if (this.checkForCurse(userInput)) {
      this._inputType = "curse"
    } else {
      this._inputType = "generic"
    }
  };

  Bot.prototype.sampleResponse = function() {
    if (this._inputType === "curse") {
      return this.curseResponse;
    } else if (this._inputType === "greeting") {
      return this.greetingResponse;
    } else {
      return this.genericResponse;
    }
  };

  Bot.prototype.produceResponse = function (userInput) {
    var testParser = this.getParser()
    var processedArray = testParser.entireParseProcess(userInput);
    this.categoriseUserInput(processedArray);
    return this.sampleResponse();
  };
