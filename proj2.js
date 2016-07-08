//Project Euler #2 
function nthTerm(term){
	if(term <= 2)
		return 1;

	return nthTerm(term - 1) + nthTerm(term - 2);
}

function sum(){

	var sumOfEven = 0;
	for(var i = 0;;i++){
		var term = nthTerm(i);
		if(term > 4000000)
			break;

		else{
			if(term % 2 === 0)
				sumOfEven += term;
		}
	}

	return sumOfEven;
}


console.log(sum());
