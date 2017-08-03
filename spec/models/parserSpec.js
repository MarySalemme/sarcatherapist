describe("Parser", function() {

  var parser = new Parser();

  describe("_splitUserInput", function() {
    var input = "I feel sad";
    it ("splits the sentence into words", function() {
    expect(parser._splitUserInput(input)).toEqual(["I", "feel", "sad"])
    });
  });

  // describe("selectKeyword", function() {
  //   var input = "I feel sad";
  //   it ("assigns a keyword", function() {
  //   expect(parser.selectKeyword(input)).toEqual("sad")
  //   });
  // });
  //
  // describe("selectKeyword", function() {
  //   var input = "I feel happy";
  //   it ("assigns a keyword", function() {
  //   expect(parser.selectKeyword(input)).toEqual("happy")
  //   });
  // });
  //
  // describe("selectKeyword", function() {
  //   var input = "I feel ok";
  //   it ("assigns a keyword", function() {
  //   expect(parser.selectKeyword(input)).toEqual("ok")
  //   });
  // });
  //
  // describe("selectKeyword", function() {
  //   var input = "I feel angry";
  //   it ("assigns a keyword", function() {
  //   expect(parser.selectKeyword(input)).toEqual("meh")
  //   });
  // });
});
