/*
https://leetcode.com/problems/robot-bounded-in-circle/

On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.
The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
"G": move one step. Position: (0, 1). Direction: South.
"G": move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
Based on that, we return true.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
"G": move one step. Position: (-1, 1). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
"G": move one step. Position: (-1, 0). Direction: South.
"L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
"G": move one step. Position: (0, 0). Direction: East.
"L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
Based on that, we return true.
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.




 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    var currD = 0;
    //var dirLookup = {0:'N', 1:'E', 2:'S', 3:'W'};
    
    var currCoords = [0,0]
    
    //for (var i = 0; i < 4; i++){
        var j = 0;
        while(j < instructions.length){
            var c = instructions.charAt(j);
            //console.log(c);
            if (c == 'G'){
                switch(currD){
                    case 0: currCoords[1]++; 
                        break;
                    case 1: currCoords[0]++; 
                        break;
                    case 2: currCoords[1]--; 
                        break;
                    case 3: currCoords[0]--; 
                        break;  
                }
            }
            else if(c == 'L')
                currD=(currD-1)%4; if(currD<0) currD = 4+currD;
            else if (c == 'R')
                currD=(currD+1)%4;
            j++;
            //console.log("completing current while iteration " + "currCoords is " + currCoords + " and currD is " + currD);
        }
        if((currCoords[0]==0 && currCoords[1]==0) || (currD != 0))
        return true;
        return false;
    //}
    
    //console.log(currCoords);
    if(currCoords[0]==0 && currCoords[1]==0)
        return true;
    return false;
    
};

var main = () => {
    console.log(isRobotBounded("GG"));
    console.log(isRobotBounded("GL"));
    console.log(isRobotBounded("GGLLGG"));
    console.log(isRobotBounded("GLRLGLLGLGRGLGL"));
};

main();