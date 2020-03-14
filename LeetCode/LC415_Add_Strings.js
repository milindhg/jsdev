/* 
https://leetcode.com/problems/add-strings/description/

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

TYPE:   TRICKY, NUMBERS ADDITION, LINEAR TIME PROBLEMS, STRING AND NUMBERS

Solution:   https://leetcode.com/submissions/detail/312447971/  beats 99.73% JS Submissions.
            This is really very tricky problem.

            The main hint here is to not convert the given input numbers into integers.
            The reason is that there can be integer overflow since the given constraints say that the number length is at max 5099. 
            So imagine a number with 5099 digits cannot fit within an integer.

            So we're left with finding another approach to solve this problem.

            Now you can fall back to the approach of adding numbers like we did in school by adding digits from units place uptil MSB and maintaining and adding carry when necessary.

 */


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var digitAddn = 0;
    var carry = 0;
    var ans = "";
    while (i >= 0 && j >= 0) {
        resp = addDigitsAndGetCarry(parseInt(num1.charAt(i--)) + parseInt(num2.charAt(j--)), carry);
        ans = resp[0]+ans;
        carry = resp[1];
    }
    while (i >= 0) {
        resp = addDigitsAndGetCarry(parseInt(num1.charAt(i--)), carry);
        ans = resp[0]+ans;
        carry = resp[1];
    }
    while (j >= 0) {
        resp = addDigitsAndGetCarry(parseInt(num2.charAt(j--)), carry);
        ans = resp[0]+ans;
        carry = resp[1];
    }
    return carry > 0 ? carry + ans + "" : ans + "";
};


var addDigitsAndGetCarry = (numDigitsAdded, carry) => {
    var ans = "";
    digitAddn = numDigitsAdded + carry;
    if (digitAddn > 9) {
        carry = 1;
        digitAddn = digitAddn % 10;
    } else {
        carry = 0;
    }
    ans = digitAddn + ans;
    return [ans,carry];
};


var main = () => {
    // console.log(addStrings("9190","99220"));
    // console.log(addStrings("","99220"));
    // console.log(addStrings("1","9"));
    console.log(addStrings("36", "6994"));
};

main();