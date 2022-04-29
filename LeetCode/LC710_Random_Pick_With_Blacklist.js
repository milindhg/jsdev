/* https://leetcode.com/problems/random-pick-with-blacklist/description/

Given a blacklist B containing unique integers from [0, N), write a function to return a uniform random integer from [0, N) which is NOT in B.

    Optimize it such that it minimizes the call to system’s Math.random().
    
    Note:
    
    1 <= N <= 1000000000
    0 <= B.length < min(100000, N)
    [0, N) does NOT include N. See interval notation.
    Example 1:
    
    Input: 
    ["Solution","pick","pick","pick"]
    [[1,[]],[],[],[]]
    Output: [null,0,0,0]
    Example 2:
    
    Input: 
    ["Solution","pick","pick","pick"]
    [[2,[]],[],[],[]]
    Output: [null,1,1,1]
    Example 3:
    
    Input: 
    ["Solution","pick","pick","pick"]
    [[3,[1]],[],[],[]]
    Output: [null,0,0,2]
    Example 4:
    
    Input: 
    ["Solution","pick","pick","pick"]
    [[4,[2]],[],[],[]]
    Output: [null,1,3,1]
    Explanation of Input Syntax:
    
    The input is two lists: the subroutines called and their arguments. Solution's constructor has two arguments, N and the blacklist B. pick has no arguments. Arguments are always wrapped with a list, even if there aren't any.


Solution:   
            There can be 2 approaches to solve this.
            Approach 1: Prepare a hashmap with blacklisted numbers as key. 
                        Then iterate through the numbers starting from 0 or 1 and start setting the values of hashmap.
                        If the number is already a blacklisted number then continue the loop and try to store next number as value in hashmap.
                        Then just pick a random number in range 0 to N-1 and if the obtained random number is blacklisted, then give out the value for blacklisted number from hashmap.
                        So number of calls to random become 1 call only - to get a random number. And no collission.

            Approach 2: Divide 0 - N-1 numbers in ranges. To do this store the range start and range end in the form of tuples.
                        Then simply call random to pick any range of tuple and then pick a random number between the range.
                        To pick random number in the range, pick a random number and add offset. So you will get corresponding random number in the range.
                        This works because we have a range of numbers.
                        Formula to pick a random number from a chosen random range = random(rangeEnd - rangeStart) + rangeStart. (Here rangeStart is the offset being added.)

 */


//Approach 1
 /**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
    this.N = N;
    this.blacklistMap = {};
    var iter = 0;
    //Prepare a hashmap with blacklisted numbers as key. 
    for(var i=0; i<blacklist.length; i++){
        this.blacklistMap[blacklist[i]] = -1;
    }
    console.log("Blacklist keys map initialized: " + JSON.stringify(this.blacklistMap));

    //fill it. Iterate through the numbers starting from 0 or 1 and start setting the values of hashmap so that whenever a blacklist key is picked, then return the value instead.
    for(var key in this.blacklistMap){
        while(iter in this.blacklistMap){
          iter = (iter+1)%N;
        } 
        this.blacklistMap[key] = iter;
        iter = (iter+1)%N;
    }
    console.log("Blacklist keys map after filling reference values to be returned in case the number picked randomly is a blacklist key: " + JSON.stringify(this.blacklistMap));
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    var randomAns = Math.floor(Math.random() * (this.N));
    console.log("Random pick: " + randomAns);
    if(this.blacklistMap[randomAns]>=0)
        return this.blacklistMap[randomAns];
    else
        return randomAns;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(N, blacklist)
 * var param_1 = obj.pick()
 */


 var main = function(){
     var N = 10;
     var blacklist = [2,5];
     var obj = new Solution(N, blacklist);
     console.log(obj.pick() + ' ' + obj.pick() + ' ' + obj.pick());
     
 };

 main();