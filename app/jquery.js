var inputListener;

	$(document).ready(function(){
		inputListener = function() {
		$('#textbox').on("keydown", function(e) {
			if (e.which == '13') {
				userInput = $('#textbox').val();
				if (userInput != '') {
					// Here we are taking user input and bot response.
					// We then convert into html elements.
					log = document.getElementById('log');
					console.log(log);
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
	};
});
