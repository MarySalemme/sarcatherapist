var self = this

function Controller() {
  this.bot = new Bot();
  this.parser = new Parser();
  this.setUpListener();
};

Controller.prototype.setUpListener = function() {
  se.inputListener()
}
