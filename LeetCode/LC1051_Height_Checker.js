/* 
https://leetcode.com/problems/height-checker/description/

Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

 

Example 1:

Input: [1,1,4,2,1,3]
Output: 3
Explanation: 
Students with heights 4, 3 and the last 1 are not standing in the right positions.
 

Note:

1 <= heights.length <= 100
1 <= heights[i] <= 100


Solution:   https://leetcode.com/submissions/detail/252845351/  beats 86.93% JS Submissions.




 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var ans = 0;
    var temp = [...heights];
    heights.sort((a,b)=>{
        return a-b;
    });    
    for(var i in heights){
       if(heights[i]!=temp[i]) ans++;
    }
    return ans;
};

let main = () => {
    console.log(heightChecker([1,1,4,2,1,3]));
};

main();