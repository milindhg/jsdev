/* 
https://leetcode.com/problems/min-stack/description/

Company List: UBER | 

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.


Solution:   https://leetcode.com/submissions/detail/322503317/  beats 85.92% JS Submissions.
            All the trick is to have 2 stacks. Keep pushing min element to minStack everytime to push a new element on main stack.

            Even better approach space complexity wise is to do a check whether the new incoming element is smaller than or equal to minStack top.


 */


/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stk = [];
    this.minStk = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stk.push(x);
    if (this.minStk.length == 0)
        this.minStk.push(x);
    else if (x <= this.minStk[this.minStk.length - 1])
        this.minStk.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let elem = this.stk.pop();
    if (this.minStk[this.minStk.length - 1] == elem)
        this.minStk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stk[this.stk.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStk[this.minStk.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let main = () => {
    let minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    console.log(minStack.getMin()); //--> Returns - 3.
    minStack.pop();
    console.log(minStack.top()); //--> Returns 0.
    console.log(minStack.getMin()); //--> Returns - 2.

};

main();