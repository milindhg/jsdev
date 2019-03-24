/* https://leetcode.com/problems/boats-to-save-people/description/

The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

 

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
Note:

1 <= people.length <= 50000
1 <= people[i] <= limit <= 30000



Solution:   https://leetcode.com/submissions/detail/217274486/ beats 75.90% JS Submissions.
            Simple solution is to sort the people array with lightest at front and heaviest at back.
            Then similar to the problem 2 number sum matching target in a sorted array, keep 2 pointers at start and end.
            Only a different aspect here is that the heaviest person could be the only person fitting in boat at a time. 
            So that needs to be handled in the if condition separately.

            Also no need to actually prepare the array of boats containing people. 
            Preparing array and then returning count of answer array degrades performance. 
            Since different boats contents are not asked, just keep a count and return count. That improved performance number from 25% -> 75%.
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort(function(a,b){
        return a - b;
    });
    // console.log(people);
    var i=0,j=people.length-1;
    var ans = [];
    while(i<=j){
        var temp=[];
        if(people[i] + people[j] > limit || people[j]==limit){
            temp.push(people[j--]);
        }else if(people[i] + people[j] <=limit){
            temp.push(people[i++]);
            temp.push(people[j--]);
        }
        ans.push(temp);
    }
    return ans.length;
};

var main = function(){
    // var ans = numRescueBoats([3,2,2,1],3);
    // console.log(ans + ' ' + ((ans==3) ? 'Correct' : 'Incorrect'));
    ans = numRescueBoats([44,10,29,12,49,41,23,5,17,26],50);
    console.log(ans + ' ' + ((ans==6) ? 'Correct' : 'Incorrect'));
};

main();