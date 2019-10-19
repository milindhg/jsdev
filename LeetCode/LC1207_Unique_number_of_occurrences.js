/* 
https://leetcode.com/problems/unique-number-of-occurrences/description/

Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

Solution:   https://leetcode.com/submissions/detail/271353413/  beats 87.20% JS Submissions.

 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    var map = {};
    var i = 0;
    while (i < arr.length) {
        if (!map[arr[i]]) map[arr[i]] = 0;
        map[arr[i]] = map[arr[i]] + 1;
        i++;
    }
    var mySet = new Set();
    for (var item in map) {
        // console.log(map[item]);
        if (mySet.has(map[item])) return false;
        mySet.add(map[item]);
    }
    return true;
};

var main = () => {
    var input = [
        [1, 2, 2, 1, 1, 3],
        [1, 2],
        [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
    ];
    var answers = [
        true, false, true
    ];
    for(var i in input){
        // console.log(input[i]);
        var arr = input[i];
        var answer = uniqueOccurrences(arr);
        console.log("Input: " + arr + " answer= " + answer + " " + (answer == answers[i] ? "Correct" : "Incorrect"));
    }
};

main();