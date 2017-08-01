function Bot() {
  this._response = null
}

Bot.prototype.produceResponse = function(emotion) {
  if (emotion.toLowerCase() === "sad") {
    this._response = "Have you tried drinking?";
  } else if (emotion.toLowerCase() === "neutral") {
    this._response = "Can you be less boring, please?";
  } else {
    this._response = "It's a trap";
  };
};
