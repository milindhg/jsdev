/* Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

Solution:   https://leetcode.com/submissions/detail/177008215/  beats 100% js submissions.
            Keep 2 queues - and keep switching between them as active queue.
            WHen pushing, enqueue to active queue.
            When popping, dequeue all but 1 elements to inactive queue. and dequeue and return the last element. Then swap active inactive queues.
            For top easier is to keep a variable topElem and keep updating it on pushing or popping elements.
 */

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
    this.currQueue = this.queue1;
    this.inactiveQueue = this.queue2;
    this.topElem;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    console.log(this.queue1);
    this.currQueue.push(x);
    this.topElem = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.currQueue.length>1){
        this.topElem = this.currQueue.shift();
        this.inactiveQueue.push(this.topElem);
    }
    var tempQueue = this.inactiveQueue;
    this.inactiveQueue = this.currQueue;
    this.currQueue = tempQueue;
    return this.inactiveQueue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topElem;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.currQueue.length==0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */