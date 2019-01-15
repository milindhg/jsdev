/* https://leetcode.com/problems/validate-stack-sequences/

TYPE: TRICKY
TYPE: STACK


Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
 

Note:

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed is a permutation of popped.
pushed and popped have distinct values.


SOLUTION:   https://leetcode.com/submissions/detail/195679203/    beats 51.61% JS Submissions.
            Keep a temp stack to keep track of the pushed elements as you traverse through the pushed elements.
            Also keep a Set to track visited elements i.e. visited a they are pushed to stack.
            Now always keep checking if the current element from the popped array is present in the visited elements sets.
            Now if current element from popped array is already visited, then it must be on top of the temp stack currently. Only then this element could have been popped. Otherwise return false.
            If the current element from popped array is already visited, and also present on top of the temp stack, 
              that means now we must execute the popped array step and move forward in the popped array to track new element which will be popped. Keep popping till this condition is true.
            So it means if an element in popped array us visited, but is not currently the top of the temp stack that means its false information that this elements was popped. 
            So return false.

            At last if all the elements in the pushed array are traversed or all elements in popped array are traversed and the temp stack is also actually empty, then return true.
            If temp stack is not actually empty, that means the sequence of push and pop given in input is wrong. So return false.


*/

 /**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var currPushedIdx = -1;
    var currPoppedIdx = 0;
    var visitedNodes = new Set();
    var myStk = [];
    while(currPushedIdx < pushed.length && currPoppedIdx < popped.length){
        if(visitedNodes.has(popped[currPoppedIdx])){
            if(popped[currPoppedIdx] == myStk[myStk.length-1]){
                myStk.pop();
                currPoppedIdx++;
            }
            else{
                return false;   //current poppedElem cannot be popped unless it is top of the stack.
            }
        }
        else{
            currPushedIdx++;
            myStk.push(pushed[currPushedIdx]);
            visitedNodes.add(pushed[currPushedIdx]);
            
        }        
    }
    if(myStk.length > 0)
        return false;
    return true;
    //return false;
};

var main = function(){
    console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));
    console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]));
};

main();