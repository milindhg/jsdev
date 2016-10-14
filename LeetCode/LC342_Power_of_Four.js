/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
        
*/

/**
 * @param {number} num
 * @return {boolean}
 * 
 * 
 * 
 */
var isPowerOfTwo = function (num) {
    // console.log(parseInt(55555555,16).toString(2));
    // 55555555 in Hex is 1010101010101010101010101010101 in Binary. So only odd positions are 1.
    // Anding it if result is anything other than zero, it means some of the odd bit in the number
    // is 1. So got the answer.
    // console.log(parseInt("1010101010101010101010101010101",2)); //This will give the number to be
    // used in decimal format.
    if (num===1){
        return true;
    }
    if (num <= 0) {
        return false;
    }
    if ((num & (num - 1)) !== 0) {
        return false;
    }

    var maskingNumberInHex = parseInt("1010101010101010101010101010101", 16);
    if ((num & maskingNumberInHex) !== 0) {
        return false;
    }
    return true;

};

/**
 * @param {number} num
 * @return {boolean}
 * 
 * Runtime of this approach beats the other javascript solutions by 88.54%
 * 
 */
var isPowerOfFour = function (num) {
    if (isPowerOfTwo(num) && Number.isInteger(log4(num))) {
        return true;
    } else {
        return false;
    }
};



/**
 * @param {number} num
 * @return {boolean}
 * 
 * Runtime of this approach beats the other javascript solutions by 15%
 * 
 */
var isPowerOfFourUsingLog = function (num) {
    // console.log("Log of " + num + " to the base 4 is: " + log4(num));
    if (Number.isInteger(log4(num))) {
        return true;
    } else {
        return false;
    }
};

var log4 = function (num) {
    return Math.log(num) / Math.log(4);
}

var main = function () {
    var num = 16;
    console.log(isPowerOfFour(num));
}

main();