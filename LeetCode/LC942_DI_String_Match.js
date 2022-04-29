/* 

https://leetcode.com/problems/di-string-match/description/Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
 

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]
 

Note:

1 <= S.length <= 10000
S only contains characters "I" or "D".


Solution:   https://leetcode.com/submissions/detail/274633176/  beats 91.91% JS Submissions

            Very simple approach - Basically what the problem states is have an array of length N (string.length) starting from 0.
            Then traverse the string and if I is found then remove an element from the start i.e. increasing order and if D is found then remove an element from the end of the array.
            Then return the answer.

            TO OPTIMIZE - Instead of storing an array, simply have 2 variables tracking to start - low as 0 and high as N. then keep updating low and high.

 */

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var len = S.length;
    var arr = [];
    var ans = [];
    for(var i=0; i<=len; i++){
        arr.push(i);
    }
    for(var i=0; i<S.length; i++){
        if(S[i]=="I")
            ans.push(arr.shift());
        else
            ans.push(arr.pop());
    }
    ans.push(arr.pop());
    return ans;
};

var main = () => {
    var inputs = ["IDID",
    "III",
    "DDI",
    "D",
    "I"];
    inputs.forEach((input) =>{
        console.log(diStringMatch(input));
    });
};

main();