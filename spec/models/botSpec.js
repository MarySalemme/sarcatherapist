describe("Bot", function() {

  beforeEach(function() {
    parser = {}
    bot = new Bot(parser);
  });

  greetingInput = ["hi", "lil", "shrink", "bot"]
  curseInput = ["your", "advice", "is", "substitute"]
  genericInput = ["that's", "a", "loada", "psychobabble"]

  describe("greetingKeyWords", function() {
    it("it will be of the type: array", function(){
      expect(bot._greetingKeyWords.constructor).toEqual(Array)
    })
  });

  describe("curseKeyWords", function(){
    it("will be of the type: array", function(){
      expect(bot._curseKeyWords.constructor).toEqual(Array)
    })
  })

  describe("checkForGreeting", function(){
    it("will return true if user input contains greeting keyword", function(){
      expect(bot.checkForGreeting(greetingInput)).toBe(true)
    })
    it("will return false if user input doesn't contain greeting keyword", function(){
      expect(bot.checkForGreeting(genericInput)).toBe(false)
    })
  })

  describe("checkForCurse", function(){
    it("will return true if user input contains curse keyword", function(){
      expect(bot.checkForCurse(curseInput)).toBe(true)
    })

    it("will return false if user input doesn't contain curse keyword", function(){
      expect(bot.checkForCurse(genericInput)).toBe(false)
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains greeting", function(){
      it("will set input type as such", function(){
        bot.categoriseUserInput(greetingInput)
        expect(bot._inputType).toEqual("greeting")
      })
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains curse", function(){
      it("will set input type as such", function(){
        bot.categoriseUserInput(curseInput)
        expect(bot._inputType).toEqual("curse")
      })
    })
  })

  describe("categoriseUserInput", function(){
    describe("when user input contains no keywords", function(){
      it("will set input type as generic", function(){
        bot.categoriseUserInput(genericInput)
        expect(bot._inputType).toEqual("generic")
      })
    })
  })

  describe("produceResponse", function() {
    describe("when user input type is a greeting", function(){
      it("will give greeting response", function(){
        bot.categoriseUserInput(greetingInput)
        expect(bot.produceResponse()).toEqual("Oh, it's you. Let's make this quick")
      })
    })
  });

  describe("produceResponse", function() {
    describe("when user input type is a curse", function(){
      it("will give curse response", function(){
        bot.categoriseUserInput(curseInput)
        expect(bot.produceResponse()).toEqual("Go Freud yourself.")
      })
    })
  });

  describe("produceResponse", function() {
    describe("when user input type is generic", function(){
      it("will give a generic response", function(){
        bot.categoriseUserInput(genericInput)
        expect(bot.produceResponse()).toEqual("Have you tried drinking more?")
      })
    })
  });

  describe("getParser", function() {
    it("returns the parser", function() {
      expect(bot.getParser()).toEqual({});
    });
  });
});
