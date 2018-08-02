/* https: //leetcode.com/problems/shuffle-an-array/description/

    Shuffle a set of numbers without duplicates.

Example:

    // Init an array with set 1, 2, and 3.
    int[] nums = {
        1,
        2,
        3
    };
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();


Solution:   https://leetcode.com/submissions/detail/167103589/ beats 60.16 % JS Submissions.
            Simple array randomization problem. Also keep copy of input array in object so as to reset and return the original input array when asked.
            Array randomization is same as done for 52 cards shuffling. Pick a random index in array and swap it with the current last number. 
            Keep reducing the current last number so as to not get by mistake, last number in the randomization output. 
            Hence you will always get random value which can be used and avoid collision.

 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.origNums = nums.slice();
    this.processedNums = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.processedNums = this.origNums.slice();
    return this.processedNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    //shuffle logic.
    for (i = this.processedNums.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.processedNums[i];
        this.processedNums[i] = this.processedNums[j];
        this.processedNums[j] = temp;
    }
    return this.processedNums;
};

//Your Solution object will be instantiated and called as such:
var nums = [1, 2, 3];
var obj = new Solution(nums);
var param_1 = obj.reset();
console.log(param_1);
var param_2 = obj.shuffle();
console.log(param_2);
var param_3 = obj.reset();
console.log(param_3);
var param_4 = obj.reset();
console.log(param_4);