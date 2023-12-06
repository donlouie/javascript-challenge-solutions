/*
https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let value = init;

	const counter = {
		increment() {
			return (value += 1);
		},
		decrement() {
			return (value -= 1);
		},
		reset() {
			return (value = init);
		},
	};

	return counter;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Other Solution
// Solution 1
