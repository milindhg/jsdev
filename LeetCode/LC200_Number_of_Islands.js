/* 
https://leetcode.com/problems/number-of-islands/description/

Given a 2d grid map of '1's (land) and '0's (water), count the number of
islands. An island is surrounded by water and is formed by connecting adjacent
lands horizontally or vertically. You may assume all four edges of the grid are
all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3


Solution:   https://leetcode.com/submissions/detail/326051205/ beats 56.73% JS
            Submissions. Better follow the numIslandsReadable approach below.

            Simple scan through X+1, X-1, Y+1 and Y-1 cells for each cell.
            A very typical approach is to have a visited matrix also.
            But that can also be improvised by updating the input matrix cell by 0 once visited.

 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var islandsArr = [];
    var isVisited = new Set();
    var island = new Set();    //Set with key is something like comma separated coords like "3,10".
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && !isVisited.has('' + i + ',' + j)) {
                var island = new Set();
                island.add('' + i + ',' + j);
                islandsArr.push(island)
                sweep(i, j, islandsArr, grid, isVisited);
            }
            isVisited.add('' + i + ',' + j);
        }
    }
    return islandsArr.length;
};

//Add the current element and all the neighboring lands into the set.
var sweep = function (x, y, islandsArr, grid, isVisited) {
    var island = islandsArr[islandsArr.length - 1];
    island.add('' + x + ',' + y);
    isVisited.add('' + x + ',' + y);
    if (isValidCoords(x + 1, y, grid) && !isVisited.has('' + (x + 1) + ',' + y) && grid[x + 1][y] == 1) sweep(x + 1, y, islandsArr, grid, isVisited);
    if (isValidCoords(x - 1, y, grid) && !isVisited.has('' + (x - 1) + ',' + y) && grid[x - 1][y] == 1) sweep(x - 1, y, islandsArr, grid, isVisited);
    if (isValidCoords(x, y + 1, grid) && !isVisited.has('' + x + ',' + (y + 1)) && grid[x][y + 1] == 1) sweep(x, y + 1, islandsArr, grid, isVisited);
    if (isValidCoords(x, y - 1, grid) && !isVisited.has('' + x + ',' + (y - 1)) && grid[x][y - 1] == 1) sweep(x, y - 1, islandsArr, grid, isVisited);
}

var isPartOfAnyIsland = function (x, y, islandsArr) {
    var foundInIsland = false;
    for (var i = 0; i < islandsArr; i++) {
        if (!foundInIsland && islandsArr[i].has('' + x + ',' + y)) {
            foundInIsland = true;
            break;
        }
    }
    return foundInIsland;
}

var isValidCoords = function (x, y, grid) {
    return (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsReadable = function (grid) {
    let totalIslandCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                islandHelper(i, j, grid);
                totalIslandCount++;
            }
        };
    };

    return totalIslandCount;
};

var islandHelper = function (x, y, grid) {
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] == 1) {
        grid[x][y] = "0";
        let arr = [[1, 0], [-1, 0], [0, 1], [0, -1]];    //this indicates next and prev row and next and prev column. D, U, R, L
        arr.forEach(([x1, y1]) => {
            islandHelper(x + x1, y + y1, grid);
        });
    }
};


var main = function () {
    console.log(numIslandsReadable([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]));
    console.log(numIslandsReadable([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "1", "1"], ["0", "0", "0", "1", "1"]]));
    console.log(numIslandsReadable([["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]));
    console.log(numIslandsReadable([["1", "0", "1", "1", "1"], ["1", "0", "1", "0", "1"], ["1", "1", "1", "0", "1"]]));
    console.log(numIslandsReadable([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));
};
main();