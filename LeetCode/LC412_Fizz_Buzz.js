/*
https://leetcode.com/problems/fizz-buzz/?tab=Description
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/*
Solution:   https://leetcode.com/submissions/detail/79669795/
            We run a loop from 1 to given number and check divisbility every time. 
            If number is divisible by 3 and 5, then it is definitely divisible by 15. So first we do a check of 15 and put fizzbuzz and proceed to next number.
            If not divisible we check for divisibility by 3 and 5 and at last put the number as it is if not divisible.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var i = 1;
    var outputarray = [];
    while (i <= n) {
        if (i % 15 === 0) {
            outputarray.push("FizzBuzz");
        } else if (i % 3 === 0) {
            outputarray.push("Fizz");
        } else if (i % 5 === 0) {
            outputarray.push("Buzz");
        } else {
            outputarray.push(i.toString());
        }
        i++
    }
    return outputarray;
};