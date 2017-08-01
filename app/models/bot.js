
  function Bot() {
    this._response = null
  }

  Bot.prototype.produceResponse = function(emotion) {
    if (emotion.toLowerCase() === "sad") {
      this._response = "Have you tried drinking?";
    } else if (emotion.toLowerCase() === "ok") {
      this._response = "Can you be less boring, please?";
    } else if (emotion.toLowerCase() === "happy") {
      this._response = "It's a trap";
    } else {
      this._response = "Wow dude. You are dead inside, just like me."
    }
  };
