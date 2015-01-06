$(document).ready(function() {

	var DEBUG_MODE = true;

	var debug = function(msg) {
		if (DEBUG_MODE = true) {
			console.log('DEBUG:', msg);
		}
	}

	$('#enter').click(function() {
		var number = $('#number').val();
		if (isNaN(number)) 
		{
			alert('Must enter a number');
			return false;
		}	
		if(number % 1 != 0) {
			alert('Must enter an integer');
			return false;
		}
		debug('result: ' + fizzBuzz(number));
		$('#result').html(fizzBuzz(number));
	});

	function fizzBuzz(number) {
		var string = '';
		var counter;

		for (counter = 1; counter <= number; counter++) {
			string = string + '<p>'
			if(counter % 15 == 0)	{
				string = string + 'fizz buzz';
			}
			else if(counter % 3 == 0) {
				string = string + 'fizz';
			}
			else if(counter % 5 == 0) {
				string = string + 'buzz';
			}
			else {
				string = string + counter;
			}
			string = string + '</p>';
		}
		return string;
	}
});