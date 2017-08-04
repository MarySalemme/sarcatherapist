describe("Parser", function() {

  var parser = new Parser();
  var userInput = "I feel happy";

  describe("entireParseProcess", function() {
    it ("returns the parsed response", function() {
    expect(parser.entireParseProcess(userInput)).toEqual(["I", "feel", "happy"])
    });
  });
});
