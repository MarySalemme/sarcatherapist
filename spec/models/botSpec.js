describe("Bot", function() {

  beforeEach(function() {
    parser = {}
    mockParser = {entireParseProcess: ["This", "is", "a", "test", "sentence"]}
    bot = new Bot(mockParser);
  });

  greetingInput = ["hi", "lil", "shrink", "bot"]
  curseInput = ["your", "advice", "is", "substitute"]
  genericInput = ["that's", "a", "loada", "psychobabble"]

  describe("_greetingKeyWords", function() {
    it("it will be of the type: array", function(){
      expect(bot._greetingKeyWords.constructor).toEqual(Array)
    })
  });

  describe("_curseKeyWords", function(){
    it("will be of the type: array", function(){
      expect(bot._curseKeyWords.constructor).toEqual(Array)
    })
  })

  describe("_checkForGreeting", function(){
    it("will return true if user input contains greeting keyword", function(){
      expect(bot._checkForGreeting(greetingInput)).toBe(true)
    })
    it("will return false if user input doesn't contain greeting keyword", function(){
      expect(bot._checkForGreeting(genericInput)).toBe(false)
    })
  })

  describe("_checkForCurse", function(){
    it("will return true if user input contains curse keyword", function(){
      expect(bot._checkForCurse(curseInput)).toBe(true)
    })

    it("will return false if user input doesn't contain curse keyword", function(){
      expect(bot._checkForCurse(genericInput)).toBe(false)
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains greeting", function(){
      it("will set input type as such", function(){
        bot._categoriseUserInput(greetingInput)
        expect(bot._inputType).toEqual("greeting")
      })
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains curse", function(){
      it("will set input type as such", function(){
        bot._categoriseUserInput(curseInput)
        expect(bot._inputType).toEqual("curse")
      })
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains no keywords", function(){
      it("will set input type as generic", function(){
        bot._categoriseUserInput(genericInput)
        expect(bot._inputType).toEqual("generic")
      })
    })
  })

  describe("sampleResponse", function() {
    describe("when user input type is a greeting", function(){
      it("will give greeting response", function(){
        bot._categoriseUserInput(greetingInput)
        expect(greetResponse).toContain(bot._pickAppropriateResponse())
      })
    })
  });

  describe("sampleResponse", function() {
    describe("when user input type is a curse", function(){
      it("will give curse response", function(){
        bot._categoriseUserInput(curseInput)
        expect(bot._pickAppropriateResponse()).toEqual("Go Freud yourself.")
      })
    })
  });

  describe("sampleResponse", function() {
    describe("when user input type is generic", function(){
      it("will give a generic response", function(){
        bot._categoriseUserInput(genericInput)
        expect(genericResponse).toContain(bot._pickAppropriateResponse())
      })
    })
  });

  describe("getParser", function() {
    it("returns the parser", function() {
      expect(bot._getParser()).toEqual({entireParseProcess: ["This", "is", "a", "test", "sentence"]});
    });
  });

  describe("feedUserInput", function() {
    it("runs the user input through the parser", function() {
      var response = bot._getParser()
      var arrayFromInput = response.entireParseProcess;
      expect(arrayFromInput).toEqual(["This", "is", "a", "test", "sentence"])
    })
  });
});
