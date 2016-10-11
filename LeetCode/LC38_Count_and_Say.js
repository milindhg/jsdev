/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

*/

/**
 * @param {number} n
 * @return {string}
 * 
 * This approach iterative - beats 62.91% javascript solutions
 * 
 */
var countAndSay = function (n) {
    var i = 1;
    var outputstring = "1";
    while (i < n) {
        outputstring = parseAndPrepare(outputstring);
        i++
    }
    return outputstring;
};

/**
 * @param {number} n
 * @return {string}
 * 
 * This approach recursive - beats 2.91% javascript solutions
 * 
 */
var countAndSayRecursive = function (n) {
    var ansToReturn = calcCount(n);
    return ansToReturn;
};

var calcCount = function (n) {
    if (n === 0 || n === 1) {
        return "1";
    } else {
        var prevans = calcCount(n - 1);
        // console.log("prevans: " + prevans);
        return parseAndPrepare(prevans);
    }
}

var parseAndPrepare = function (stringN) {
    var countCurrDigit = 0;
    var currDigit = stringN[0];
    var output = "";
    for ( var index in stringN) {
        if (stringN[index] == currDigit) {
            countCurrDigit++;
        } else {
            output = output + "" + countCurrDigit + "" + currDigit;
            countCurrDigit = 1;
            currDigit = stringN[index];
        }
    }
    output = output + countCurrDigit + currDigit;
    return output;
}

var main = function () {
    var n = 8;
    // console.log(parseAndPrepare("312211"));
    console.log(countAndSay(n));
}

main();