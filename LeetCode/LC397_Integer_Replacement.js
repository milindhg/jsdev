/* https://leetcode.com/problems/integer-replacement/description/

TYPE: TESLA
TYPE: Integers


Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1


Solution:   https://leetcode.com/submissions/detail/201891854/ beats 78.95% JS Submissions.
            Approach 1 is iterative.
            When we're given a number n and n is even. We're good, simply divide by 2.
            However when n is odd at any point, then we're at a decision point. Whether to choose n+1 or n-1 as the operation.
            To decide this for odd numbers we check how many 1s are present in the binary representation of n+1 and n-1. Whichever has lesser 1s we go with that.
            In case the number of 1s is same for both the n+1 and n-1, then we basically try to find the answer recursively for both these - n+1 and n-1 and go with the one whose answer is less.

            https://leetcode.com/submissions/detail/201894983/ BEST Solution. beats 89.71% JS Submissions.
            Approach 2: is recursive. This is best approach if done with memoization.
            Here we try to find the answer to n+1 and n-1 and add 1. Sort of tree like recursion or fibonacci like recursion method.
            To do memoization store a memoization json object in outer scope of recursion so that it is available all the time in recursion stack, or keep passing it in the method argument since json is pass by reference, it will be same object accessible anywhere in the recursion stack.

 */


/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    var ans = 0;
    while(n>1){
        if(n&1==1){     //if n is odd
            var addOrSub = toAddOrSubtractOneForOddApproach2(n);
            // console.log("addOrSub = " + addOrSub);
            switch(addOrSub){
                case "add": n+=1;
                            break;
                case "sub": n-=1;
                            break;
                default:    n-=1;
                            break;
            }
            // n = n+1;
        }else{      // if n is even
            n=n/2;
        }
        // console.log("now n = " + n);
        ans++;
    }
    return ans;
};

var toAddOrSubtractOneForOdd = function(n){
    var inputNum = n;
    var cnt = 0;
    var addOneChecker = 1;
    var subtractOneChecker = 1;
    while(n>1){
        cnt++;
        n=n>>1;
        addOneChecker = (addOneChecker<<1) + 1;
        subtractOneChecker = (subtractOneChecker<<1);
    }
    cnt++;
    subtractOneChecker += 1;
    if(inputNum == subtractOneChecker)
        return "sub";
    if(inputNum == addOneChecker)
        return "add";
    return "sub";
};


var toAddOrSubtractOneForOddApproach2 = function(n){
    var inputNum = n;
    var cnt = 0;
    if(countOnesInBinary(n+1)>countOnesInBinary(n-1))
        return "sub";
    else if(countOnesInBinary(n-1)>countOnesInBinary(n+1))
        return "add";
    else
        return integerReplacement(n+1) > integerReplacement(n-1) ? "sub" : "add";
};

var countOnesInBinary = function(n){
    var num = n;
    var cnt = 0;
    while(n>0){
        if(n&1==1)cnt++;
        n=n>>1;
    }
    // console.log(num, cnt);
    return cnt;
};


var integerReplacementRecursive = function(n, mem){
    var mem = {};
    return integerReplacementRecursiveHelper(n, mem);
}

var integerReplacementRecursiveHelper = function(n, mem){
    if(mem[n]) return mem[n];
    if(n==1) return 0;
    if(n%2==0){
        mem[n] = 1 + integerReplacementRecursiveHelper(n/2, mem);
    }else{
        mem[n] = 1 + Math.min(integerReplacementRecursiveHelper(n-1,mem), integerReplacementRecursiveHelper(n+1,mem));
    }
    return mem[n];

}



var main = function(){
    console.log(integerReplacement(7));
    console.log(integerReplacement(9));
    console.log(integerReplacement(65535));
    console.log(integerReplacement(65537));
    console.log(integerReplacement(65538));
    console.log(integerReplacement(65539));
    console.log(integerReplacement(10000));
    console.log(integerReplacement(100000000));
    console.log(integerReplacement(7));
    console.log(integerReplacement(3));
    console.log(integerReplacement(764));
    console.log(integerReplacement(762));
    console.log(integerReplacement(2147483647));

    console.log(integerReplacementRecursive(7));
    console.log(integerReplacementRecursive(9));
    console.log(integerReplacementRecursive(65535));
    console.log(integerReplacementRecursive(65537));
    console.log(integerReplacementRecursive(65538));
    console.log(integerReplacementRecursive(65539));
    console.log(integerReplacementRecursive(10000));
    console.log(integerReplacementRecursive(100000000));
    console.log(integerReplacementRecursive(7));
    console.log(integerReplacementRecursive(3));
    console.log(integerReplacementRecursive(764));
    console.log(integerReplacementRecursive(762));
    console.log(integerReplacementRecursive(2147483647));

};

main();

