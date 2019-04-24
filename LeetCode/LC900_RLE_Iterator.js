/* https://leetcode.com/problems/rle-iterator/description/

Write an iterator that iterates through a run-length encoded sequence.

The iterator is initialized by RLEIterator(int[] A), where A is a run-length encoding of some sequence.  More specifically, for all even i, A[i] tells us the number of times that the non-negative integer value A[i+1] is repeated in the sequence.

The iterator supports one function: next(int n), which exhausts the next n elements (n >= 1) and returns the last element exhausted in this way.  If there is no element left to exhaust, next returns -1 instead.

For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of the sequence [8,8,8,5,5].  This is because the sequence can be read as "three eights, zero nines, two fives".

 

Example 1:

Input: ["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
Output: [null,8,8,5,-1]
Explanation: 
RLEIterator is initialized with RLEIterator([3,8,0,9,2,5]).
This maps to the sequence [8,8,8,5,5].
RLEIterator.next is then called 4 times:

.next(2) exhausts 2 terms of the sequence, returning 8.  The remaining sequence is now [8, 5, 5].

.next(1) exhausts 1 term of the sequence, returning 8.  The remaining sequence is now [5, 5].

.next(1) exhausts 1 term of the sequence, returning 5.  The remaining sequence is now [5].

.next(2) exhausts 2 terms, returning -1.  This is because the first term exhausted was 5,
but the second term did not exist.  Since the last term exhausted does not exist, we return -1.

Note:

0 <= A.length <= 1000
A.length is an even integer.
0 <= A[i] <= 10^9
There are at most 1000 calls to RLEIterator.next(int n) per test case.
Each call to RLEIterator.next(int n) will have 1 <= n <= 10^9.

Solution:   https://leetcode.com/submissions/detail/224596691/  beats 100% JS Submissions.
            Constructor is trivial.
            The next iterator function is basically 4 cases to check in order of precedence.
                Case 1: Always check that the current iterator has not surpassed the available indices. i.e. the length of A.
                Case 2: Of the value at the current iterator is 0, then jump to next iterator and call the function recursively. This will help in cases when the next function is called and the value at current iterator is 0. So ignore the value at next index of current iterator and jump to the next iterator index. i.e. +2.
                Case 3: The called argument in the next function is greater than the value at the iterator then basically the value at your current iterator is insufficient. So you reduce the argument value by the value of the current iterator, proceed to the next available iterator and do a recursive call to let the function handle automatically.
                Case 4: i.e. the last case is to reduce the value at the current iterator and return the value at the next index of current iterator 

                This way the cases simply work atomically and overall all the scenarios are handled.
 */


/**
 * @param {number[]} A
 */
var RLEIterator = function(A) {
    this.A = A;
    this.iter = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    if(this.iter>=this.A.length) 
        return -1;
    if(this.A[this.iter]==0) {
        this.iter+=2;
        return this.next(n);
    }
    if(n>this.A[this.iter]){
        n -= this.A[this.iter];
        this.iter+=2;
        return this.next(n);
    }else{
        this.A[this.iter] = this.A[this.iter] - n;
        return this.A[this.iter+1];
    }
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */

var main = function(){
    var input1 = ["RLEIterator","next","next","next","next"];
    var input2 = [[[3,8,0,9,2,5]],[2],[1],[1],[2]];
    var ans = [];
    ans.push(null);

    var obj = new RLEIterator(input2[0][0]);
    var i = 1;
    while(i<input2.length){
        var param_1 = obj.next(input2[i]);
        ans.push(param_1);
        i++;
    }
    console.log(ans);
};

main();