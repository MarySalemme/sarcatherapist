describe("controller", function() {

    mockParser = { entireParseProcess: ["I", "hate", "my", "life"] }
    mockBot = { produceResponse: "Great I have to work now"}
    var controller = new Controller(mockParser, mockBot);

  describe("attributes", function() {
    it("creates a new bot", function() {
      expect(controller.bot).not.toBeNull();
    });

    it("creates a new parser", function() {
      expect(controller.parser).not.toBeNull();
    });
  });
});
