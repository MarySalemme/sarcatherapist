

$('#emotion').on("keydown", function(e) {
	if (e.which == '13') {
  userInput = $('#emotion').val();
  	if (userInput != '') {
		log = document.getElementById('log');
    userPara = document.createElement('p');
    botPara = document.createElement('p');
    userPara.innerHTML = userInput;
    botPara.innerHTML = "Have you tried drinking more?"
    log.appendChild(userPara);
    log.appendChild(botPara);
    } else {
      console.log("empty field")
    }
  };
});
