/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Spoilers: 
Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var outputnumber = 0;
    var negflag = false;
    if (x < 0) {
	x *= -1;
	negflag = true;
    }
    while (x > 0) {
	outputnumber = outputnumber * 10 + (x % 10);
	x = Math.floor(x / 10);
    }
    if (outputnumber > Math.pow(2, 31)) {
	return 0;
    }
    if (negflag) {
	outputnumber *= -1;
    }
    return outputnumber;
};

var main = function() {
    var inputnumber = -100000;
    console.log(reverse(inputnumber));
}

main();