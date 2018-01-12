/*

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return convertIntToBin(add(convertToInteger(a), convertToInteger(b)));
};

var add = function (x, y) {
    // Iterate till there is no carry
    while (y != 0) {
        // carry now contains common set bits of x and y
        var carry = x & y;

        // Sum of bits of x and y where at least one of the bits is not set
        x = x ^ y;

        // Carry is shifted by one so that adding it to x gives the required sum
        y = carry << 1;
    }
    return x;
};

var convertToInteger = function (binaryNumberString) {
    var answer = 0;
    var multiplier = 1;
    for (var i = binaryNumberString.length - 1; i >= 0; i--) {
        answer += binaryNumberString[i] * multiplier;
        multiplier *= 2;
    }
    return answer;
}

var convertIntToBin = function (integerNumber) {
    var answer = "";
    while (integerNumber > 0) {
        var remainder = integerNumber % 2;
        integerNumber = Math.floor(integerNumber / 2);
        answer = remainder + answer;
    }
    return (answer == "" ? 0 : answer);
}

var main = function () {
    console.log(addBinary("0", "0"));
    console.log(convertToInteger("0"));
    console.log(add(0, 0));
    console.log(convertIntToBin(0));
    // console.log(convertToInteger())
};

main();