
//log info about functions
console.log('%cisPrime %creturns true if the input is prime, false otherwise', 'font-weight:bold', 'color:blue');
console.log('%cgetPrime %creturns the nth prime number', 'font-weight:bold', 'color:blue');
console.log('%cgetPrimes %creturns an array of primes of given size', 'font-weight:bold', 'color:blue');
console.log('%cgetPrimeLessThan %creturns the largest prime number less than given number, default 2', 'font-weight:bold', 'color:blue');
console.log('%cgetPrimesLessThan %creturns an array with primes less than given number', 'font-weight:bold', 'color:blue');
console.log('%cgetPrimeGreaterThan %creturns the smallest prime number greater than given number', 'font-weight:bold', 'color:blue');
console.log('%cgetBoolArrayPrimes %creturns an array of booleans that are true if the number at that index is prime, false otherwise (0 indexed)', 'font-weight:bold', 'color:blue');

// AKS algorithm
// only have to loop up to sqrt(num)
// primes are 6k+1 or 6k-1, so we can increment i by 2 or 4 each time
// returns true if num is prime, false otherwise
function isPrime(num) {
	if(num <= 1)
		return false;
	if(num == 2 || num == 3)
		return true;
	if(num % 2 == 0 || num % 3 == 0)
		return false;
	for(i=5, w=2; i*i<=num; i+=w, w=6-w) {
		if(num % i == 0)
			return false;
	}
	return true;
}

// returns the nth prime number
function getPrime(nthPrime) {
	let numPrimes = 0;
	let test = 1;
	while(numPrimes < nthPrime) {
		test++;
		if(isPrime(test) )
			numPrimes++;
	}
	return test;
}

// returns an array of primes of given size
function getPrimes(numPrimes) {
	let primes = [];
	let test = 2;
	while(primes.length < numPrimes) {
		if(isPrime(test) )
			primes.push(test);
		test++;
	}
	return primes;
}

// returns the largest prime number less than given number, default 2
function getPrimeLessThan(num) {
	let test = num-1;
	while(test > 1) {
		if(isPrime(test) )
			return test;
		test--;
	}
	return 2;
}

// returns an array with primes less than given number
function getPrimesLessThan(numMax) {
	let primes = [];
	let test = 2;
	while(test < numMax) {
		if(isPrime(test) )
			primes.push(test);
		test++;
	}
	return primes;
}

// returns the smallest prime number greater than given number
function getPrimeGreaterThan(num) {
	let test = num + 1;
	while(true) {
		if(isPrime(test) )
			return test;
		test++;
	}
}

// return an array of booleans that are true if the number at that index is prime, false otherwise
// 0 indexed
function getBoolArrayPrimes(numNums) {
	let bools = [];
	let test = 0;
	while(bools.length < numNums) {
		bools.push(isPrime(test) );
		test++;
	}
	return bools;
}
