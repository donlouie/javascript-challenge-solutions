/*
Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.
*/

const noIfsNoButs = (a, b) => {
	switch (true) {
		case a > b:
			return `${a} is greater than ${b}`;
			break;
		case a < b:
			return `${a} is smaller than ${b}`;
			break;
		default:
			return `${a} is equal to ${b}`;
			break;
	}
};

console.log(noIfsNoButs(1, 1));

// Other Solution
// Solution 1
/*
var noIfsNoButs = function (a,b) {
  switch (Math.sign(a-b)) {
    case 1: return `${a} is greater than ${b}`;
    case -1:return `${a} is smaller than ${b}`;
    case 0: return `${a} is equal to ${b}`;
  }
}
*/
