/* https://leetcode.com/problems/shortest-distance-to-a-character/description/

TYPE: Array
TYPE: STRING

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.


Solution:   https://leetcode.com/submissions/detail/200759681/ beats 25% of JS Submissions.
            First prepare a list of all the positions of C in the S.
            Once you get the positions of C in S, then run a loop for each C position to check its nearby elements in S and update their distance.
            The really nice part is the loop condition for each C position. The condition should be until we find nearest e or end of array. SO the runtime becomes better.
 */

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    //Get all positions of C in S.
    var positionsOfC = [];
    var answer = [];
    for(var i in S) answer.push(Number.MAX_VALUE);
    for(var i in S){
        if(S[i]==C){
            positionsOfC.push(i);
            answer[i] = 0;
        }
    }
    //console.log(positionsOfC);

    //For each C position, check its nearby elements in S and update their distance.
    for(var index in positionsOfC){
        var currPositionOfC = parseInt(positionsOfC[index]);
        var i = currPositionOfC - 1;
        var j = currPositionOfC + 1;
        while(i>=0 && S[i]!=C){
            var distance = currPositionOfC - i;
            if(answer[i]>distance) answer[i] = distance;
            i--;
        }
        while(j<S.length && S[j]!=C){
            var distance = j - currPositionOfC;
            if(answer[j]>distance) answer[j] = distance;
            j++;
        }
        //console.log(answer);
    }

    return answer
};

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToCharBetter = function(S, C) {
    //Get all positions of C in S.
    var answer = [];
    for(var index=0; index<S.length; index++) answer.push(Number.MAX_VALUE);
    for(var index=0; index<S.length; index++){
        if(S[index]==C){
            answer[index] = 0;
            var currPositionOfC = index;
            var i = currPositionOfC - 1;
            var j = currPositionOfC + 1;
            while(i>=0 && S[i]!=C){
                var distance = currPositionOfC - i;
                answer[i] = Math.min(answer[i],distance);
                i--;
            }
            while(j<S.length && S[j]!=C){
                var distance = j - currPositionOfC;
                answer[j] = Math.min(answer[j],distance);
                j++;
            }
            //console.log(answer);
    
        }
    }

    return answer
};


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToCharBest = function(S, C) {
    var a = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] == C) {
            a.push(i);
        }
    }
    
    var res = [];
    for (i = 0; i < S.length; i++) {
        var low = 10000;
        for (var j = 0; j < a.length; j++) {
            if (Math.abs(i - a[j]) < low)
                low = Math.abs(i - a[j]);
        }
        res.push(low);
    }
    return res;
};


var main = function(){
    var S = "loveleetcode";
    var C = 'e';
    console.log("answer = ");
    console.log(shortestToCharBetter(S,C));
};

main();