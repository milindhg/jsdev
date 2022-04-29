/* 
https://leetcode.com/problems/shortest-path-in-binary-matrix/description/

In an N by N square grid, each cell is either empty (0) or blocked (1).

A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
C_1 is at location (0, 0) (ie. has value grid[0][0])
C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.

 

Example 1:

Input: [[0,1],[1,0]]


Output: 2

Example 2:

Input: [[0,0,0],[1,1,0],[1,1,0]]


Output: 4

 

Note:

1 <= grid.length == grid[0].length <= 100
grid[r][c] is 0 or 1

Solution:   

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    var queue = [];
    var ans = 0;
    if(grid[0][0]==1 || grid[grid.length-1][grid[0].length-1]==1) return -1;  //first or last cell is 1
    if(grid.length==1 && grid[0][0]==0) return 1;   //Only 1 cell and that is 0
    
    var m = grid.length;
    var n = grid[0].length;
    
    queue.push('$');        //prepare queue and push root/first cell and mark it as visited.
    if(grid[0][0] == 0){
        queue.push([0,0]);
        grid[0][0]='#';
    }
    
    while(queue.length >1){
        var coords = queue.shift();
        if(coords[0]==m-1 && coords[1]==n-1 && grid[m-1][n-1]=='#') return ans; 
        if(coords=='$'){
            ans++;
            queue.push('$');
            continue;
        }
        var directions = [[0,1], [0,-1], [1,0], [-1,0], [1,1], [-1,-1], [1,-1], [-1,1]];
        for(var index in directions){
            var direction = directions[index];
            var r = coords[0] + direction[0];
            var c = coords[1] + direction[1];
            if(r>=0 && r<m && c>=0 && c<n && grid[r][c]=='0'){
                queue.push([r,c]);
                grid[r][c] = '#';
            }
        }
        if(queue.length==1 && !(coords[0]==m-1 && coords[1]==n-1)) return -1;   //If blocked then check queue and return -1
    }
    return ans;
};

var main = () => {
    console.log(shortestPathBinaryMatrix([[0,0,1],[1,1,0],[1,1,0]]));
    console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));
    console.log(shortestPathBinaryMatrix([[0,0,1],[1,1,1],[1,1,0]]));
    console.log(shortestPathBinaryMatrix([[0,1],[1,1]]));
    console.log(shortestPathBinaryMatrix([[0,0],[0,0]]));
    console.log(shortestPathBinaryMatrix([[0]]));
    console.log(shortestPathBinaryMatrix([[1]]));
    console.log(shortestPathBinaryMatrix([[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]));
};

main();