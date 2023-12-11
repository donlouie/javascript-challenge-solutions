// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// Example
// Input: [[10,0],[3,5],[5,8]]
// Output: 5

const number = function (busStops) {
	let total = 0;
	for (let i = 0; i < busStops.length; i++) {
		total += busStops[i][0] - busStops[i][1];
	}
	return total;
};

console.log(
	number([
		[10, 0],
		[3, 5],
		[5, 8],
	])
);

// Other Solutions
// Solution 1
/*
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
*/
