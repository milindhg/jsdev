/**
 * 
https://leetcode.com/problems/reverse-bits/?tab=Description
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer

Solution: Simple approach reverse the digits i.e. keep picking last bit from input number.
1. Initialize answer as 0
2. Pick last bit from n and then right shift n
3. Right shift answer and append the last bit on to answer as the LSB.
4. Do this for all 32 bits of the input number n.

 * 
 */



/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var ans = 0;
    var i = 0;
    while (i < 32) {
        var lastBit = n & 1;
        ans = ans << 1;
        ans = ans | lastBit;
        n = n >> 1;
        i += 1;
    }
    console.log('ans currently is: ' + ans);
    return Math.abs(ans);
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBitsEasyRead = function(n) {
    let result = 0b0;
    let curr = n;
    
    for (let i = 0; i < 32; i += 1) {
        const lastBit = curr & 0b1;   // Get last bit
        result = result << 1;         // Make space for new last bit
        result = result | lastBit;    // Apply last bit to result
        curr = curr >> 1;             // destroy last bit of current 
    }
    
	// Fix results less than zero (destroy sign bit)
    return result >>> 0;
};

var main = function () {
    var n = 43261596;
    console.log(reverseBits(n));
    var n = 1;
    console.log(reverseBits(n));
    var n = 4294967295;
    console.log(reverseBits(n));
};

main();