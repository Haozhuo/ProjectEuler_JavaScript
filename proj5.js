//Porject Euler #5
function LCM(n1, n2){
	for(var i = 1; i <= n2; i++){
		if((n1 * i) % n2 === 0)
			return n1 * i;
	}
};

function find(num){
	var multiple = 1;
	for(var i = 1; i <= num; i++){
		multiple = LCM(multiple, i);
	}

	return multiple;
};

console.log(find(30));

