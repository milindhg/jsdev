/*
https://leetcode.com/problems/last-stone-weight/description/

We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose
the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed; If x != y, the stone of weight x
is totally destroyed, and the stone of weight y has new weight y-x.  At the end,
there is at most 1 stone left.  Return the weight of this stone (or 0 if there
are no stones left.)

TYPE:   STRAIGHTFORWARD, SIMPLE, EASY PEASY, ARRAY, SORTING MUST, STACK, LESS
PUSH POP, EFFICIENCY, SIMPLE TRICK, ARRAY BUT NOT LINEAR


Example 1:

Input: [2,7,4,1,8,1] Output: 1 Explanation: We combine 7 and 8 to get 1 so the
array converts to [2,4,1,1,1] then, we combine 2 and 4 to get 2 so the array
converts to [2,1,1,1] then, we combine 2 and 1 to get 1 so the array converts to
[1,1,1] then, we combine 1 and 1 to get 0 so the array converts to [1] then
that's the value of last stone.


Note:

1 <= stones.length <= 30 1 <= stones[i] <= 1000


Solution:   https://leetcode.com/submissions/detail/323571775/  beats 92.11% JS
Submissions.  The solution is actually lot easier than your first expectation.
This is simply a problem where Sorting is a must and there is no other way
except if some kind of complicated map is prepared which can also be costly.

But sorting is OK MAINLY because of one very important constraint on the
problem. - i.e. there can be at max 30 elements in the array.

So what can improve performance A very simple fact of lesser number of push and
pop operations on the stack goes a long way as seen in many other problems.  So
try to simplify and make the code more readable by simply sorting the array
everytime and remove 2 add 1 sort of logic.  The intuition is basically to do an
expression evaluation problem using a stack. However sorting is IMPORTANT at
each step.

 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length >= 2) {
        stones = stones.sort((a,b)=>{
            return a-b;
        });
        var elem1 = stones.pop();
        var elem2 = stones.pop();
        if (elem1 != elem2)
            stones.push(Math.abs(elem1 - elem2));
    }
    return stones.length == 1 ? stones[0] : 0;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightEfficient = function (stones) {
    if(stones.length === 0) return 0
    if(stones.length === 1) return stones[0];
    
    stones.sort((a,b)=>{ return b-a;});
    if(stones[0] === stones[1])
        for(i=0; i<=1; i++)
            stones.shift();
    else{
        stones[1] = stones[0] - stones[1];
        stones.shift();
    }
    
    return lastStoneWeight(stones);
};


var main = () => {
    // console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
    console.log(lastStoneWeight([1,2,3,4,5,6,5,4,43,3,23]));
};

main();