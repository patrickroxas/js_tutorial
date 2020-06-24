let a = ["ant", "bat", "cat", 42];


// // Listing 5.13 with function instead of fat-arrow
// a.forEach(function(element) {
// 	console.log(element);
// });

// Listing 5.13 rewritten with fat-arrow
a.forEach((element => {
	console.log(element);
}));

// Listing 5.15
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
	console.log(character);
});