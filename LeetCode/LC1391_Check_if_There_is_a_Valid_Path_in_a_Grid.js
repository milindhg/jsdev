/* 
https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/description/

Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.


You will initially start at the street of the upper-left cell (0,0). A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

 

Example 1:


Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
Example 2:


Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
Example 3:

Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
Example 4:

Input: grid = [[1,1,1,1,1,1,3]]
Output: true
Example 5:

Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
Output: true
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
1 <= grid[i][j] <= 6

 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    var dirMap = {};
    dirMap[1] = [[0, -1], [0, 1]];
    dirMap[2] = [[-1, 0], [1, 0]];
    dirMap[3] = [[0, -1], [1, 0]];
    dirMap[4] = [[0, 1], [1, 0]];
    dirMap[5] = [[0, -1], [-1, 0]];
    dirMap[6] = [[0, 1], [-1, 0]];
    console.log(dirMap);
    console.log("getOuts for 0,0=" + getOuts([0, 0], grid, dirMap));

};

var isReachable = (sourceCoords, targetCoords, inputMatrix, dirMap) => {

};

var traverse = (nextCoords, inputMatrix, dirMap) => {
    if(nextCoords[0]==inputMatrix.length-1 && nextCoords[1]==inputMatrix[0].length-1)
        return true;
    else{
        var outCoordsList = getOuts(nextCoords, inputMatrix, dirMap);
        var i = 0;
        while(i<outoutCoordsList.length){
            var coords = outCoordsList[i];
            var nextCoordsOuts = getOuts(coords, inputMatrix, dirMap);
            if(nextCoordsOuts.some((xy)=>{ return (xy[0]==nextCoords[0] && xy[1]==nextCoords[1]); }))
                
        }
    }
}

var getOuts = (coords, inputMatrix, dirMap) => {
    var ans = [];
    var streetType = inputMatrix[coords[0]][coords[1]];
    dirMap[streetType].forEach((outCoordsOffsets) => {
        var x = coords[0] + outCoordsOffsets[0];
        var y = coords[1] + outCoordsOffsets[1];
        if (x >= 0 && x < inputMatrix.length && y >= 0 && y < inputMatrix[0].length)
            ans.push([x, y]);
    });
    return ans;
};

var main = () => {
    hasValidPath([[2, 4, 3], [6, 5, 2]]);
};

main();