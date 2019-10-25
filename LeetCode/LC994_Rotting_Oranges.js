/* 
https://leetcode.com/problems/rotting-oranges/description/

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

TYPE: BFS, MATRIX, GRID, NICE, NEIGHBORS 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.

Solution:   https://leetcode.com/submissions/detail/273067741/  beats 88.08% JS Submissions.

            The basic idea of the solution is BFS using queue.
            First go through the matrix and note the count of fresh oranges and push rotten oranges in queue for further processing.
            Then increment the timer to 1 sec/min/hour and start processing the queue.
            Every time while processing the queue mark the rottenable fresh oranges as rotten and add them to the queue for next sec/min/hour.
            Keep on doing this until the queue is empty or the fresh oranges are finished.

            Tips - For processing Left, Right, Up and Down typically we don't need that if else structure now. We should work with an array loop.
            Prepare an array with the combinations and do whatever is necessary for each element in the array as done in this problem.

            Also Make use of sentinel in the BFS queue to mark or distinguish each sec/min/hour/level.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var queue = [];
    queue.push('$');
    var freshOrangeCountArr = [];
    freshOrangeCountArr.push(0);
    var timeCounter = 0;
    for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[0].length; j++){
            if(grid[i][j]==2) queue.push([i,j]);
            if(grid[i][j]==1) freshOrangeCountArr[0]++;
        }
    }
    
    while(queue.length>1 && freshOrangeCountArr[0]>0){
        var item = queue.shift();
        if(item=='$'){
            queue.push('$');
            timeCounter++;
        }
        else{
            var i = item[0];
            var j = item[1];
            // rottenTheNeighbors using the array for loop of 4 possible combinations.
            var combinationArr = [[i+1,j],[i-1,j],[i,j+1],[i,j-1]];
            combinationArr.forEach(function(currCoords){
                var x=currCoords[0];
                var y=currCoords[1];
                if(isValidCell(x,y,grid) && grid[x][y]==1){
                    grid[x][y]=2;
                    freshOrangeCountArr[0]--;
                    queue.push([x,y]);
                }
            });

        }
    }
    return freshOrangeCountArr[0]>0 ? -1 : timeCounter;
};    
    
var isValidCell = function(i,j,grid){
    if(i<grid.length && i>=0 && j<grid[0].length && j>=0) return true;
    return false;
}


var main = () => {
    var inputs = [[[2,1,1],[1,1,0],[0,1,1]],
    [[2,1,1],[0,1,1],[1,0,1]],
    [[0,2]],
    [[0,1]],
    [[2,2],[1,1],[0,0],[2,0]]];
    inputs.forEach((input) => {
        console.log(orangesRotting(input));
    });
    
};

main();