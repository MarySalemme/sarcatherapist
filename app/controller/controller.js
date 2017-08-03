(function(exports) {

  function Controller() {
    this.parser = new Parser();
    this.bot = new Bot(this.parser);
  };

  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#textbox').on("keydown", function(e) {
        if (e.which == '13') {
          userInput = jQuery('#textbox').val();
          self._createResponse(document);
          jQuery("#textbox").val('');
        };
        self._chatLogAutoScroll(jQuery);
      });
    });
  };

  Controller.prototype._createElements = function(document) {
    log = document.getElementById('log');
    userPara = document.createElement('p');
    botPara = document.createElement('p');
  };

  Controller.prototype._setElements = function(document) {
    userPara.innerHTML = userInput;
    if (userInput != '') {
      botPara.innerHTML = this.bot.produceResponse(userInput.toLowerCase());
    } else {
      botPara.innerHTML = "How can I tell you to drink more if you don't ask me a question?!"
    };
  };

  Controller.prototype._appendElements = function(document) {
    log.appendChild(userPara);
    setTimeout(function() {
      log.appendChild(botPara);
    }, 1000);
  };

  Controller.prototype._createResponse = function(document) {
    this._createElements(document);
    this._setElements(document);
    this._appendElements(document);
  };

  Controller.prototype._chatLogAutoScroll = function (jQuery) {
    var div = jQuery('#log');
    setInterval(function(){
      var pos = div.scrollTop();
      div.scrollTop(pos + 2);
    }, 0)
  };

  exports.Controller = Controller
})(this);
