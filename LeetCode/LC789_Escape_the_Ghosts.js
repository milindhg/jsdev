/* 
https://leetcode.com/problems/escape-the-ghosts/description/

You are playing a simplified Pacman game. You start at the point (0, 0), and your destination is (target[0], target[1]). There are several ghosts on the map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions: north, east, west, or south, going from the previous point to a new point 1 unit of distance away.

You escape if and only if you can reach the target before any ghost reaches you (for any given moves the ghosts may take.)  If you reach any square (including the target) at the same time as a ghost, it doesn't count as an escape.

Return True if and only if it is possible to escape.

Example 1:
Input: 
ghosts = [[1, 0], [0, 3]]
target = [0, 1]
Output: true
Explanation: 
You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3) have no way to catch up with you.
Example 2:
Input: 
ghosts = [[1, 0]]
target = [2, 0]
Output: false
Explanation: 
You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.
Example 3:
Input: 
ghosts = [[2, 0]]
target = [1, 0]
Output: false
Explanation: 
The ghost can reach the target at the same time as you.
Note:

All points have coordinates with absolute value <= 10000.
The number of ghosts will not exceed 100.


Solution:   https://leetcode.com/submissions/detail/272792389/  beats 64.10 % JS Submissions.
            The idea here is very simple - the only way a ghost can catch you is if he can reach you before or at the same time you reach the target.
            So basically what that means is the only way ghost can catch you is if the distance of ghost from target is <= your distance from the target.
            To find the distance between two points is simple - total vertical distance plus total horizontal distance between 2 points. 
            
            TIP : No need to worry about the cartesian directions and points. Their + or - value automatically takes care of getting the absolute difference.

 */

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    var myDistToTarget = findDistanceToTarget([0,0],target);
    console.log(myDistToTarget);
    for(var i in ghosts){
        if(findDistanceToTarget(ghosts[i],target)<=myDistToTarget) return false;
    };
    return true;
};

var findDistanceToTarget = function(point, target){
    return Math.abs(point[0]-target[0]) + Math.abs(point[1] - target[1]);
}

