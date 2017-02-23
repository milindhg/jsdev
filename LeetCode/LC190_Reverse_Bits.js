/**
 * 
https://leetcode.com/problems/reverse-bits/?tab=Description
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
 * 
 */

//TODO this problem is yet incomplete.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var ans = 0;
    var i = 0;
    while (i < 32) {
        var lastBit = n & 1;
        ans <<= 1;
        ans += lastBit;
        n = n >> 1;
        i += 1;
    }
    console.log('ans currently is: ' + ans);
    return Math.abs(ans);
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