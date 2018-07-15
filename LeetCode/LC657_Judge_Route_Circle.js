/* https://leetcode.com/problems/judge-route-circle/description/

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false

Solution:   https://leetcode.com/submissions/detail/163943171/    beats 98.70% JS Submissions.
            Very trivial problem: 
            Simply loop through the characters in the string and then count number of U or D or L or R movements. 
            total u = total D and total L = total R then return true else return false.
 */


/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var i = 0;
    var currPosition = {x: 0, y: 0}
    for(i=0; i<moves.length; i++){
        var currChar = moves.charAt(i);
        switch(currChar){
            case "L":
                currPosition.x = currPosition.x-1;
                break;
            case "R":
                currPosition.x = currPosition.x+1;
                break;
            case "U":
                currPosition.y = currPosition.y+1;
                break;
            case "D":
                currPosition.y = currPosition.y-1;
                break;
        }
    }
    if(currPosition.x==0 && currPosition.y==0){
        return true;
    }
    return false;
};

var main = function(){
    console.log(judgeCircle("LL"));
    console.log(judgeCircle("UD"));
};

main();