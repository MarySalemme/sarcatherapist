describe("Bot", function() {
  var bot;

  beforeEach(function() {
    bot = new Bot();
  });

  describe("produceResponse", function() {
    it("gives a response to a sad user", function () {
      bot.produceResponse("sad")
      expect(bot._response).toEqual("Have you tried drinking?");
    });

    it("gives a response to a neutral user", function(){
      bot.produceResponse("neutral")
      expect(bot._response).toEqual("Can you be less boring, please?");
    });

    it("gives a response to a happy user", function(){
      bot.produceResponse("happy")
      expect(bot._response).toEqual("It's a trap");
    });
  });
});
