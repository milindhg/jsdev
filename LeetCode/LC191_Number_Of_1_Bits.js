/*

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * this is a new way suggested by Thube. But did give some errors. Check this.
 * 
 */
var hammingWeightCheck = function (n) {
    var ans = 0;
    if(n===Math.pow(2, 32)-1){
        return 32;
    }
    while (n > 0) {
        ans += 1;
        n = (n & (n - 1));
    }
    return ans;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * beats 49.23% javascript submissions
 * 
 */
var hammingWeight = function (n) {
    var ans = 0;
    while (n > 0) {
        ans = ans + n % 2;
        n = Math.floor(n / 2);
    }
    return ans;
};

var main = function () {
    console.log(hammingWeight(11));
};

main();