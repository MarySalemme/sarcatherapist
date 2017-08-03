window.onload = function() {
  var controller = new Controller();
  controller.inputListener($, document);
};

var port = process.env.PORT || 8000

let server = require('http').Server(app);

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

server.listen(port, function() {
    console.log("App is running on port " + port);
});
