/*
https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/description/
    Design a data structure that supports all following operations in average O(1) time.

    Note: Duplicate elements are allowed.
    insert(val): Inserts an item val to the collection.
    remove(val): Removes an item val from the collection if present.
    getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
    Example:

    // Init an empty collection.
    RandomizedCollection collection = new RandomizedCollection();

    // Inserts 1 to the collection. Returns true as the collection did not contain 1.
    collection.insert(1);

    // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
    collection.insert(1);

    // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
    collection.insert(2);

    // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
    collection.getRandom();

    // Removes 1 from the collection, returns true. Collection now contains [1,2].
    collection.remove(1);

    // getRandom should return 1 and 2 both equally likely.
    collection.getRandom();
*/

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
    this.itemArray = [];
    this.map = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the
 * specified element.
 * 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    var returnVal = true;
    if (!this.map[val]) {
        this.map[val] = [];
        this.map[val].push(val);
        returnVal = true;
    } else {
        this.map[val].push(val);
        returnVal = false;
    }
    this.itemArray.push(val);
    return returnVal;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified
 * element.
 * 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (!this.map[val]) {
        return false;
    } else {
        this.map[val].pop();
        if (this.map[val].length == 0) {
            delete this.map[val];
        }
        return true;
    }
};

/**
 * Get a random element from the collection.
 * 
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {

};

/**
 * Your RandomizedCollection object will be instantiated and called as such: var obj =
 * Object.create(RandomizedCollection).createNew() var param_1 = obj.insert(val) var param_2 =
 * obj.remove(val) var param_3 = obj.getRandom()
 */

var main = function () {
    // var obj = Object.create(RandomizedCollection).createNew();
    var obj = new RandomizedCollection();
    var param_1 = obj.insert(1);
    param_1 = obj.insert(2);
    // var param_2 = obj.remove(val);
    // var param_3 = obj.getRandom();
    console.log(param_1);
    console.log(obj.itemArray);
    console.log(obj.map);
    // console.log(param_2);
    // console.log(param_3);
};

main();