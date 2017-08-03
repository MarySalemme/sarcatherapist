describe("controller", function() {
  var controller = new Controller();

  describe("attributes", function() {
    it("creates a new bot", function() {
      expect(controller.bot).not.toBeNull();
    });

    it("creates a new parser", function() {
      expect(controller.parser).not.toBeNull();
    });
  });
})
