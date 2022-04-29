/* https://leetcode.com/problems/design-hashmap/description/

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

 */

var ListNode = function (key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
};

var addNodeToListHead = function (head, key, val) {
    var node = new ListNode(key, val);
    node.next = head.next;
    head.next = node;
}

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.buckets = [];
    this.bucketsCount = 100000;
    var i = 0;
    while (i < this.bucketsCount) {
        this.buckets.push(new ListNode(NaN, NaN));
        i++;
    }
};

MyHashMap.prototype.hash = function (key) {
    return key % this.bucketsCount;
};

MyHashMap.prototype.getBucketHead = function (key) {
    var bucketHeadIndex = this.hash(key);
    var bucketHead = this.buckets[bucketHeadIndex];
    return bucketHead;
};

MyHashMap.prototype.findInBucket = function (bucketHead, key) {
    var trav = bucketHead.next;
    while (trav != null) {
        if (trav.key === key) {
            return trav;
        }
        trav = trav.next;
    }
    return null;
}

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    var bucketHead = this.getBucketHead(key);
    var existingNode = this.findInBucket(bucketHead, key);
    if (existingNode) {
        existingNode.val = value;
    } else {
        addNodeToListHead(bucketHead, key, value);
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    var bucketHead = this.getBucketHead(key);
    var existingNode = this.findInBucket(bucketHead, key);
    return (existingNode ? existingNode.val : -1);
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    var bucketHead = this.getBucketHead(key);
    var existingNode = this.findInBucket(bucketHead, key);
    if (existingNode) {
        if (!existingNode.next) {     //If this is last node, then point head to null
            bucketHead.next = null;
        } else {
            var nextNode = existingNode.next;
            existingNode.key = nextNode.key;
            existingNode.val = nextNode.val;
            existingNode.next = nextNode.next;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var main = function () {
    var hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    hashMap.get(1);            // returns 1
    hashMap.get(3);            // returns -1 (not found)
    hashMap.put(2, 1);          // update the existing value
    hashMap.get(2);            // returns 1 
    hashMap.remove(2);          // remove the mapping for 2
    hashMap.get(2);            // returns -1 (not found) 
    console.log(prepareTest(["MyHashMap","put","put","get","get","put","get", "remove", "get"],[[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]));
};

var prepareTest = function(instructions,inputs){
    var output = [null];
    var obj = new MyHashMap();
    var i=1;
    while(i<inputs.length){
        var instruction = instructions[i];
        var input = inputs[i];
        switch(instruction){
            case "put": obj.put(input[0],input[1]);
            output.push(null);
            break;
            case "get": output.push(obj.get(input[0]));
            break;
            case "remove": obj.remove(input[0]);
            output.push(null);
            break;
        }
        i++;
    }
    return output;
};

main();