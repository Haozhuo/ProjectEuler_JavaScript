//Project Euler #1 on Hackerrank
function processData(input) {
    //Enter your code here
	function sumFormula(first, last, terms){
		return ((first + last)* terms) / 2;
	}

    var inputArr = input.split('\n');
    if(inputArr[0] === 0)
    	console.log('0');

    else{
    	for(var i = 1; i < inputArr.length; i++){
    		var upper = Number(inputArr[i]) - 1;
    		var numDividedByThree = (upper - upper % 3) / 3;
    		var numDividedByFive = (upper - upper % 5) / 5;
    		var numDividedByFifteen = (upper - upper % 15) / 15;
    		var sum = sumFormula(3, upper - upper % 3, numDividedByThree) + 
    				  sumFormula(5, upper - upper % 5, numDividedByFive) + 
    				  - sumFormula(15, upper - upper % 15, numDividedByFifteen);

    		console.log(sum);
    	}
    }
} 



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
