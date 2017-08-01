

var inputListener = function() {

$('#').on("keydown", function(e) {
	if (e.which == '13') {
  userInput = $('#').val();
  	if (userInput != '') {
    // Here we are taking user input and bot response.
    // We then covert into html elements.
    } else {
      console.log("empty field")
    }
  };
});

};
