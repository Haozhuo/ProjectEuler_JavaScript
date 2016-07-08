//Project Euler #3
function biggest_prime_factor(number){
	var largest_prime = 2;
	var prime = 3;
	while(number % 2 === 0){
		number /= 2;
		largest_prime = 2;
	}

	while(number != 1){
		while(number % prime === 0){
			number /= prime;
			largest_prime = prime;
		}

		prime += 2;
	}

	return largest_prime;
}

console.log(biggest_prime_factor(600851475143));