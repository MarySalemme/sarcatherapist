var self = this
function Controller() {
  this.bot = new Bot();
  this.parser = new Parser();
};

Controller.prototype.setUpListener = function() {
  self.inputListener()
}
