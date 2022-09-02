/* 

https://leetcode.com/problems/prison-cells-after-n-days/

957. Prison Cells After N Days
Medium

1310

1595

Add to List

Share
There are 8 prison cells in a row and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.

Return the state of the prison after n days (i.e., n such changes described above).

 

Example 1:

Input: cells = [0,1,0,1,1,0,0,1], n = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
Example 2:

Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000
Output: [0,0,1,1,1,1,1,0]
 

Constraints:

cells.length == 8
cells[i] is either 0 or 1.
1 <= n <= 109
Accepted
146,814
Submissions
374,101

Solution:   https://leetcode.com/submissions/detail/789255013/  beats 90.05% JS Submissions
            
            Calculate value of current cell in newDayCells
            Mainly the first and last cell will be 0 since there is only one 1 neighboring cell.
            Hence we're left with 6 cells in the middle whose values can be 0 or 1 depending on input conditions.
            Thinking of these middle cells as binary number of 6 bits - 2^6 == 63 possible combinations at max.
            Also once on any day an existing cells combination is found then the further days cells will match sequentially as stored before. Hence memoization can be done in an array sequentially whose 0th index will day 1 and last index will be total number of cells combination which will start appearing in cycle.
            This cycle will always start on Day1.


*/


/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDaysUsingMap = function (cells, n) {
    let daysArr = [];
    let i = 1;
    let newDayCells = new Array(8);
    while (i <= n) {
        for (let j = 0; j < 8; j++) {
            if (j == 0 || j == 7) {
                newDayCells[j] = 0;
            } else {
                //calculate value of current cell in newDayCells
                let previousDayCells = daysArr.length == 0 ? cells : daysArr[daysArr.length - 1];
                if (previousDayCells[j - 1] == previousDayCells[j + 1])
                    newDayCells[j] = 1;
                else
                    newDayCells[j] = 0;
            }
        }

        //Mainly the first and last cell will be 0 since there is only one 1 neighboring cell.
        //Hence we're left with 6 cells in the middle whose values can be 0 or 1 depending on input conditions.
        //Thinking of these middle cells as binary number of 6 bits - 2^6 == 63 possible combinations at max.
        // Also once on any day an existing cells combination is found then the further days cells will match sequentially as stored before. Hence memoization can be done in an array sequentially whose 0th index will day 1 and last index will be total number of cells combination which will start appearing in cycle.
        // This cycle will always start on Day1.

        //after calculating the newDayCells if it is same as Day 1 cells, that means repeating cycle found. We don't store the 0th Day in daysArray. We store day 1 as day 0.
        if (i == 1 || newDayCells.some((cell, index) => { return cell != daysArr[0][index]; })) {  //some cell is not matching
            daysArr.push(newDayCells);
            newDayCells = new Array();
            i++;
        } else {
            //all cells are matching with day 0 cells.
            return daysArr[(n - 1) % (i - 1)];
        }
    }
    return daysArr[n - 1];
};


/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDaysBasic = function (cells, n) {
    let daysArr = [];
    daysArr.push(cells);
    let i = 1;
    let newDayCells = new Array(8);

    while (i <= n) {
        for (let j = 0; j < 8; j++) {
            if (j == 0 || j == 7) {
                newDayCells[j] = 0;
            } else {
                //calculate value of current cell in newDayCells
                let previousDayCells = daysArr[daysArr.length - 1];
                if (previousDayCells[j - 1] == previousDayCells[j + 1])
                    newDayCells[j] = 1;
                else
                    newDayCells[j] = 0;
            }
        }

        //after calculating the newDayCells if it is same as Day 0 cells, that means repeating cycle found.
        if (newDayCells.some((cell, i) => { return cell != cells[i]; })) {  //some cell is not matching
            daysArr.push(newDayCells);
            newDayCells = new Array();
            i++;
        } else {
            //all cells are matching with day 0 cells.
            return daysArr[n % i];
        }
    }

    return daysArr[n];

};




var main = () => {
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 7).join('') == [0, 0, 1, 1, 0, 0, 0, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([1, 0, 0, 1, 0, 0, 1, 0], 200).join('') == [0, 0, 1, 0, 0, 0, 1, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 64).join('') == [0, 0, 0, 0, 0, 1, 1, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 14).join('') == [0, 0, 0, 0, 1, 1, 0, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 15).join('') == [0, 1, 1, 0, 0, 0, 0, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 16).join('') == [0, 0, 0, 0, 1, 1, 1, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([0, 1, 0, 1, 1, 0, 0, 1], 17).join('') == [0, 1, 1, 0, 0, 1, 0, 0].join(''));
    console.log(prisonAfterNDaysUsingMap([1, 0, 0, 1, 0, 0, 1, 0], 1000000000).join('') == [0, 0, 1, 1, 1, 1, 1, 0].join(''));

    // console.log(prisonAfterNDaysUsingMap([1, 0, 0, 1, 0, 0, 1, 0], 200));
    // console.log(prisonAfterNDaysUsingMap([1, 0, 0, 1, 0, 0, 1, 0], 1000000000));

    /* 
        [0, 0, 1, 1, 0, 0, 0, 0]
        [0, 0, 1, 0, 0, 0, 1, 0]
        [0, 0, 0, 0, 0, 1, 1, 0]
        [0, 0, 0, 0, 1, 1, 0, 0]
        [0, 1, 1, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 1, 1, 1, 0]
        [0, 1, 1, 0, 0, 1, 0, 0] */
};

main();


/* 
Testcases
[0,1,0,1,1,0,0,1]
7
[1, 0, 0, 1, 0, 0, 1, 0]
200
[0, 1, 0, 1, 1, 0, 0, 1]
64
[0, 1, 0, 1, 1, 0, 0, 1]
14
[0, 1, 0, 1, 1, 0, 0, 1]
15
[0, 1, 0, 1, 1, 0, 0, 1]
16
[0, 1, 0, 1, 1, 0, 0, 1]
17

Expected
[0,0,1,1,0,0,0,0]
[0,0,1,0,0,0,1,0]
[0,0,0,0,0,1,1,0]
[0,0,0,0,1,1,0,0]
[0,1,1,0,0,0,0,0]
[0,0,0,0,1,1,1,0]
[0,1,1,0,0,1,0,0]
[0,0,1,1,1,1,1,0]
 */