(function(exports) {

  function Controller() {
    this.bot = new Bot();
    this.parser = new Parser();
  };


  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#textbox').on("keydown", function(e) {
        if (e.which == '13') {
          userInput = jQuery('#textbox').val();
          if (userInput != '') {
            self._createResponse(document);
            jQuery("#textbox").val('');
          } else {
            console.log("empty field")
          };
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
    botPara.innerHTML = "Have you tried drinking more?"
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
