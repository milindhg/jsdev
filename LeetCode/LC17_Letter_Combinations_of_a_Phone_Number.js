/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

Solution: https://leetcode.com/submissions/detail/91264098/
This can be easily done using a queue. 
1. Push the characters of first digit in queue.
2. Then untill the input digits are not over, each time a digit is found, enqueue the concatenation of dequeued element from queue with the characters of the current digit in picture. 
3. DO step 2 untill the dequeued element size is less than the size of input digits.

Trick: To keep your dequeue instruction limited, use a sentinel character to separate queue elements.

nice methods of javascript
push = push at end
pop = pop from end
so push pop = stack push pop

shift = pop from front
unshift = push at front.
so unshift, shift = stack push pop.

and push, shift and unshift, pop are = queue's enqueue dequeue




*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // use array push and shift methods to emulate enqueue and dequeue Queue DS methods.
    if (digits.length === 0) {
        return [];
    }

    var hm = {
        '1' : '*',
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };

    var currDigitIndex = 0;
    var queue = [];
    var currDigitLetters = hm[digits[currDigitIndex]];
    for ( var charac in currDigitLetters) {
        queue.push(currDigitLetters[charac]);
    }

    queue.push('$'); // push is same as enqueue. push at end.
    currDigitIndex++;

    while (currDigitIndex < digits.length) {
        currDigitLetters = hm[digits[currDigitIndex]];
        var dequeueChar = queue.shift(); // Shift method is same as dequeue method in queue. pop
        // from front.
        while (dequeueChar !== '$') {
            for ( var charac in currDigitLetters) {
                queue.push(dequeueChar + currDigitLetters[charac]);
            }
            dequeueChar = queue.shift();
        }
        queue.push('$');
        currDigitIndex++;
    }
    queue.pop(); // remove lastly pushed sentinel '$'
    return queue;
};

var main = function () {
    var digits = "236";
    console.log(letterCombinations(digits));
};

main();