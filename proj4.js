//Project Euler #4
var number = 999 * 999;
var divide = number;

function is_palindrome(number){
	var number_string = number.toString();
	var number_reverse = number_string.split('').reverse().join('');
	return number_string === number_reverse;
}


console.log((function(){
	while(number >= 100000){
		var factor = Math.floor(Math.sqrt(number));
		if(is_palindrome(number)){
			while(factor >= 100){
				while(number % factor != 0)
					factor--;

				if(number % factor === 0 && factor >= 100 && (number / factor <= 999)  && factor <=999 && (number / factor >= 100))
					return number;

				factor--;
			}
		}

		number--;
	}




}()));






