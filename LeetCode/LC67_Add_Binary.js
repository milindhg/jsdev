/*

Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".


TYPE:   STRING, LINEAR PROBLEMS, ARRAY, ADDITION of NUMBERS

Solution:   https://leetcode.com/submissions/detail/313132952/  beats 93.44% JS Submissions.
            This is easier approach of school level addition basically. Follow method addBinaryEasier below

            The other approach of convertingIntToBin and back is also ok but there is some complexity in conversions and code becomes little complicated.

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

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinaryEasier = function(a, b) {
    var i = a.length-1;
    var j = b.length-1;
    var ans = "";
    var carry = '0';
    while(i>=0 && j>=0){
        var resp = addDigitsAndGetCarry(a[i--],b[j--],carry);
        ans = resp[0] + ans;
        carry = resp[1];
    }
    while(i>=0){
        var resp = addDigitsAndGetCarry(a[i--],0,carry);
        ans = resp[0] + ans;
        carry = resp[1];
    }
    while(j>=0){
        var resp = addDigitsAndGetCarry(0,b[j--],carry);
        ans = resp[0] + ans;
        carry = resp[1];
    }
    if(carry=='1')
        ans = carry + ans;
    return ans;
};

var addDigitsAndGetCarry = (num1, num2, carry) => {
    //Return [additionOfDigits, carry]
    if(num1=='1' && num2=='1')
        return [carry, '1'];
    else if(num1=='1' || num2=='1')
        return [carry==1 ? 0 : 1, carry];
    else return [carry, '0'];
};


var main = function () {
    console.log(addBinary("0", "0"));
    console.log(addBinary("11", "1"));
    console.log(addBinary("11" ,"1"));
    console.log(addBinary("11", "111"));
    console.log(addBinary("11", "11"));
    console.log(addBinary("100", "101"));
    console.log(addBinary("1010", "1011"));

    console.log(addBinaryEasier("0", "0"));
    console.log(addBinaryEasier("11", "1"));
    console.log(addBinaryEasier("11" ,"1"));
    console.log(addBinaryEasier("11", "111"));
    console.log(addBinaryEasier("11", "11"));
    console.log(addBinaryEasier("100", "101"));
    console.log(addBinaryEasier("1010", "1011"));
    // console.log(convertToInteger())
};

main();

