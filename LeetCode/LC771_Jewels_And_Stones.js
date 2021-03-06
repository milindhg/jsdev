/* https://leetcode.com/problems/jewels-and-stones/description/

You're given strings J representing the types of stones that are jewels, and S
representing the stones you have.  Each character in S is a type of stone you
have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are
letters. Letters are case sensitive, so "a" is considered a different type of
stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

Solution:   https://leetcode.com/submissions/detail/163950291/ beats 82.03% of
JS Submissions.

Using a const and let of ES6 constructs, and a better set than map, performance
improves like below
https://leetcode.com/submissions/detail/333077641/ - beats 91.95% JS Submissions

 */

 /**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jewelMap = {};
    for(var i in J){
        jewelMap[J[i]] = 1;
    }

    var numberOfJewels=0;
    for(var i in S){
        if(jewelMap[S[i]])
            numberOfJewels++;
    }

    console.log(jewelMap);
    return numberOfJewels;
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStonesBetter = function(J, S) {
    const jSet = new Set(J);
    let count = 0;
    for(let i=0; i<S.length; i++){
        if(jSet.has(S.charAt(i)))
            count++;
    };
    return count;
};

var main = function(){
    var J = "aA", S = "aAAbbbb";
    console.log(numJewelsInStones(J, S));
};

main();