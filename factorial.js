// Exercise 6.3.4.1
// Function that returns the product of all elements in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Factorial: Imperative solution
function imperativeFactorial(elements) {
	let product = 1;
	elements.forEach(function(n) {
		product *= n;
	});
	return product;
}
console.log(imperativeFactorial(numbers));

// Factorial: Functional solution
function functionalFactorial(elements) {
	return elements.reduce((product, n) => {return product *=n; })
}
console.log(functionalFactorial(numbers));