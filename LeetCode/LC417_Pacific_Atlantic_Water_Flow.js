/* 
https://leetcode.com/problems/pacific-atlantic-water-flow/

417. Pacific Atlantic Water Flow
Medium

4472

951

Add to List

Share
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105
Accepted
245,445
Submissions
478,329


 */


/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let pacificSet = new Set();
    let atlanticSet = new Set();
    let arrQPacific = [];
    let arrQAtlantic = [];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let rowCount = heights.length;
    let colCount = heights[0].length;

    //Create 2 sets of each, and 2 queues for BFS on each Pacific cells and Atlantic cells
    for (let i = 0; i < rowCount; i++) {
        pacificSet.add(i.toString() + "$" + (0).toString());
        arrQPacific.push([i, 0]);
        atlanticSet.add(i.toString() + "$" + (colCount - 1).toString());
        arrQAtlantic.push([i, colCount - 1]);
    }
    for (let j = 0; j < colCount; j++) {
        pacificSet.add((0).toString() + "$" + j.toString());
        arrQPacific.push([0, j]);
        atlanticSet.add((rowCount - 1).toString() + "$" + j.toString());
        arrQAtlantic.push([rowCount - 1, j]);
    }

    while (arrQPacific.length > 0) {
        let currCell = arrQPacific.shift();
        let x = currCell[0];
        let y = currCell[1];
        directions.forEach(([x1, y1]) => {
            let newX = x1 + x;
            let newY = y1 + y;
            if (0 <= newX && newX < rowCount && 0 <= newY && newY < colCount) {
                if (!setHasKey(pacificSet, newX, newY) && heights[newX][newY] >= heights[x][y]) {
                    arrQPacific.push([newX, newY]);
                    pacificSet.add((x + x1).toString() + "$" + (y + y1).toString());
                }
            }
        });
    }


    while (arrQAtlantic.length > 0) {
        let currCell = arrQAtlantic.shift();
        let x = currCell[0];
        let y = currCell[1];
        directions.forEach(([x1, y1]) => {
            let newX = x1 + x;
            let newY = y1 + y;
            if (0 <= newX && newX < rowCount && 0 <= newY && newY < colCount) {
                if (!setHasKey(atlanticSet, newX, newY) && heights[newX][newY] >= heights[x][y]) {
                    arrQAtlantic.push([newX, newY]);
                    atlanticSet.add((x + x1).toString() + "$" + (y + y1).toString());
                }
            }
        });
    }


    let answer = [];
    intersectionOfSets(pacificSet, atlanticSet, answer);

    return answer;
};


let setHasKey = (set, i, j) => {
    return set.has(i.toString() + "$" + j.toString());
};

let printSetAndSize = (set) => {
    let setString = "";
    set.forEach(item => setString += item + ",");
    console.log(setString);
    console.log(set.size);
}

let intersectionOfSets = (pacificSet, atlanticSet, answer) => {
    return [...pacificSet].forEach(cell => {
        if (atlanticSet.has(cell)) {
            let [cellX, cellY] = cell.split("$");
            answer.push([parseInt(cellX), parseInt(cellY)]);
        }
    });
}


/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlanticOptimized = function (heights) {
    heights = heights.map((row) => {
        return row.map((height) => {
            return {
                height,
                pacific: {
                    reachable: false,
                    visited: false
                },
                atlantic: {
                    reachable: false,
                    visited: false
                }
            };
        });
    });
    const rows = heights.length;
    const cols = heights[0].length;
    const result = [];
    const dfs = function (ocean, row, col) {
        const current = heights[row][col];
        if (current[ocean].visited) return;
        current[ocean].visited = true;
        if (row > 0 && heights[row - 1][col].height >= current.height) {
            dfs(ocean, row - 1, col);
        }
        if (row + 1 < rows && heights[row + 1][col].height >= current.height) {
            dfs(ocean, row + 1, col);
        }
        if (col > 0 && heights[row][col - 1].height >= current.height) {
            dfs(ocean, row, col - 1);
        }
        if (col + 1 < cols && heights[row][col + 1].height >= current.height) {
            dfs(ocean, row, col + 1);
        }
        current[ocean].reachable = true;
        if (current.atlantic.reachable && current.pacific.reachable) {
            result.push([row, col]);
        }
    };
    for (let i = 0; i < rows; ++i) {
        dfs('pacific', i, 0);
        dfs('atlantic', i, cols - 1);
    }
    for (let i = 0; i < cols; ++i) {
        dfs('pacific', 0, i);
        dfs('atlantic', rows - 1, i);
    }
    return result;
};


var main = () => {
    pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]);
};

main();