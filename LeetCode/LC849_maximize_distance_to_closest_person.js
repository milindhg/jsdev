/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 *
 * https://leetcode.com/problems/maximize-distance-to-closest-person/description/
 *
 * algorithms
 * Easy (42.34%)
 * Likes:    712
 * Dislikes: 99
 * Total Accepted:    58.6K
 * Total Submissions: 138K
 * Testcase Example:  '[1,0,0,0,1,0,1]'
 *
 * In a row of seats, 1 represents a person sitting in that seat, and 0
 * represents that the seat is empty. 
 * 
 * There is at least one empty seat, and at least one person sitting.
 * 
 * Alex wants to sit in the seat such that the distance between him and the
 * closest person to him is maximized. 
 * 
 * Return that maximum distance to closest person.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,0,0,0,1,0,1]
 * Output: 2
 * Explanation: 
 * If Alex sits in the second open seat (seats[2]), then the closest person has
 * distance 2.
 * If Alex sits in any other open seat, the closest person has distance 1.
 * Thus, the maximum distance to the closest person is 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,0,0,0]
 * Output: 3
 * Explanation: 
 * If Alex sits in the last seat, the closest person is 3 seats away.
 * This is the maximum distance possible, so the answer is 3.
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= seats.length <= 20000
 * seats contains only 0s or 1s, at least one 0, and at least one 1.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let posMap = new Map();
    posMap.set(1, new Array());
    posMap.set(0, new Array());
    seats.forEach( (seat, index) => seat==1 ? posMap.get(1).push(index) : posMap.get(0).push(index));
    console.log(posMap);
    let ans = 0;
    let occupiedSeats = posMap.get(1);
    let i = 0;
    if(posMap.get(0).length==1) 
        return 1;
    
    
    posMap.get(0).forEach( index => {
        while(i<occupiedSeats.length-1 && index>=occupiedSeats[i+1])
            i++;
        
        ans = Math.max(ans, Math.min(Math.abs(index-occupiedSeats[i]), occupiedSeats[i+1]-index || Infinity));
    });
    return ans;
};
// @lc code=end

let main = () => {
    console.log(maxDistToClosest([1,0,0,0,1,0,1]));
    console.log(maxDistToClosest([1,0,0,1,1,1,1]));
    console.log(maxDistToClosest([1,1,0,1,1,1,1]));
    console.log(maxDistToClosest([1,0,0,0,0]));
    console.log(maxDistToClosest([1,0,0,0]));
    console.log(maxDistToClosest([1,0,0,0,1]));
    console.log(maxDistToClosest([0,0,0,1]));
    console.log(maxDistToClosest([1,1,1,0,1,0,1,1,0,0,1]));
};

main();