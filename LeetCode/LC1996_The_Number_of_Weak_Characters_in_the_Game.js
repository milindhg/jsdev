/* 

https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/

1996. The Number of Weak Characters in the Game
Medium

2017

66

Add to List

Share
You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.

Return the number of weak characters.

 

Example 1:

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.
Example 2:

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.
Example 3:

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.
 

Constraints:

2 <= properties.length <= 105
properties[i].length == 2
1 <= attacki, defensei <= 105
Accepted
61,839
Submissions
146,639

Solution:   https://leetcode.com/submissions/detail/796524644/  beats 71.43% JS Submissions
            This is a very very special problem since there is a sorting done with 2 dimensions in the 2D Array.
            So sort the array in ascending order of attack. But if attack is same, then sort by defence in descending order. 
            This way, the groups are formed automatically to sort the array overall by attack but within a group of attack sort by defence in non-increasing order.

 */

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
    console.log(JSON.stringify(properties));
    let attackDefenceSort = properties.sort((a, b) => {
        if (a[0] == b[0])
            return b[1] - a[1];
        else
            return a[0] - b[0];
    });
    console.log(JSON.stringify(attackDefenceSort));

    let ans = 0;
    let maxDefence = attackDefenceSort[attackDefenceSort.length - 1][1];
    let j = attackDefenceSort.length - 2;
    while (j >= 0) {
        if (attackDefenceSort[j][1] < maxDefence)
            ans++;
        else
            maxDefence = Math.max(maxDefence, attackDefenceSort[j][1]);
        j--;
    }

    return ans;
};

let main = () => {
    console.log(numberOfWeakCharacters([[2, 2], [2, 9], [6, 6]]));
    console.log(numberOfWeakCharacters([[5, 5], [6, 3], [3, 6]]));
    console.log(numberOfWeakCharacters([[2, 2], [3, 3]]));
    console.log(numberOfWeakCharacters([[1, 5], [10, 4], [4, 3]]));
};

main();

// [2,2], [2,9], [6,6]

// A: [2,2], [2,9], [6,6]




// D: [2,2], [6,6], [2,9]

// Ans = 1







// [1,5],[10,4],[4,3]]