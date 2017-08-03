describe("Parser", function() {

  var parser = new Parser();

  describe("_splitUserInput", function() {
    var input = "I feel sad";
    it ("splits the sentence into words", function() {
    expect(parser._splitUserInput(input)).toEqual(["I", "feel", "sad"])
    });
  });
});
