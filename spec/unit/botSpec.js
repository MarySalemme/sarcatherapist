describe("Bot", function() {
  var bot;

  beforeEach(function() {
    bot = new Bot();
  });

  describe("produceResponse", function() {
    it("gives a response to a sad user", function () {
      bot.produceResponse("sad");
      expect(bot._response).toEqual("Have you tried drinking?");
    });

    it("gives a response to an ok user", function(){
      bot.produceResponse("ok");
      expect(bot._response).toEqual("Can you be less boring, please?");
    });

    it("gives a response to a happy user", function(){
      bot.produceResponse("happy");
      expect(bot._response).toEqual("It's a trap");
    });

    it("gives a response to a user who is dead inside", function(){
      bot.produceResponse("dead");
      expect(bot._response).toEqual("Wow dude. You are dead inside, just like me.");
    });
  });
});
