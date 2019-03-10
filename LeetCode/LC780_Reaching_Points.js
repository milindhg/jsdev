/* https://leetcode.com/problems/reaching-points/description/

A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).

Given a starting point (sx, sy) and a target point (tx, ty), return True if and only if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). Otherwise, return False.

Examples:
Input: sx = 1, sy = 1, tx = 3, ty = 5
Output: True
Explanation:
One series of moves that transforms the starting point to the target is:
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)

Input: sx = 1, sy = 1, tx = 2, ty = 2
Output: False

Input: sx = 1, sy = 1, tx = 1, ty = 1
Output: True

Note:

sx, sy, tx, ty will all be integers in the range [1, 10^9].

Solution:   https://leetcode.com/submissions/detail/213616151/
Pattern: Reduce answer to problem.

            Do certain basic checks like,
                If both source and target coordinates are same return true.
                If either x or y coordinate of target is less than corresponding coordintate of source then definitely we cannot reach the target point.
                If x or y coordinates of source and target are same respectively, then try to see if incrementally adding the other coordinate value in target's other coordinate can prepare target answer. To do this basically come from target to source. [Thats the trick in this problem!!].
                And otherwise none of the above base cases match, then basically reduce the target to a another in step target, by reducing the larger of x or y coordinate by subtracting the other coordinate value, and hence you get the 1 step previous target. Give this new pre-target to the same problem as input. If you end up on source, you conclude your target is reachable. Else given input target is not reachable point.

                Last tricky base case is that assume that if target x and y coordinates are same, then all 4 - i.e. source coordinates and target coordinates must be same. i.e. only way x and y of target can be same is that source = target point. Otherwise you basically cannot reach target, because you cannot derive pre-target point by deducting either x from y or y from x.


Test Cases
9
5
12
8

 */

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    if(sx == tx && sy == ty)    //both source and target coords are same
        return true;
    else if(ty < sy || tx < sx) //either one of the coordinates of target are smaller than source
        return false;
    else if(sx == tx)   //x coords of source and target are same
        return (ty-sy) % tx == 0
    else if(sy == ty)   //y coords of source and target are same
        return (tx-sx) % ty == 0
    else if(ty > tx)      //reduce the target coords by subtracting smaller of the x and y of target from the other coord of target.
        return reachingPoints(sx, sy, tx, ty-tx);
    else if(tx>ty)
        return reachingPoints(sx, sy, tx-ty, ty);
    else if(ty==tx)
        return false;

};

var main  = function(){
    console.log(reachingPoints(9,5,12,8));
    console.log(reachingPoints(9,10,9,19));
    console.log(reachingPoints(1,1,2,2));
    console.log(reachingPoints(1,1,3,5));
    console.log(reachingPoints(1,1,1,1));
};

main();