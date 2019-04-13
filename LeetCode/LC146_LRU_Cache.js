/* https://leetcode.com/problems/lru-cache/description/

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity // );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

TYPE: HARD, TRICKY, GOOD, LinkedList, Queue, HashMap

Solution:   https://leetcode.com/submissions/detail/222082067/  beats 77.69% JS Submissions.
            Really good logical problem.
            Best trick to solve is to use a hashmap for quick access and DEQueue for easily maintaining the LRU elements and MRU elements.

 */


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.hm = {};
    this.queue = new DEQueue();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hm[key]){
        this.queue.bringToFront(this.hm[key]);
        return this.hm[key].val;
    }else
        return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //there is space left in cache so add the element to cache as MRU element.
    if(!this.hm[key]){
        if(this.count == this.capacity){
            //update cache and remove LRU element;
            var node = this.queue.dequeue();
            delete this.hm[node.key];
            this.count--;
        }
        this.hm[key] = new DEQueueNode(key,value);
        this.queue.enqueue(this.hm[key]);
        this.count++;
    }else{
        this.queue.bringToFront(this.hm[key]);
        this.hm[key].val = value;
    }
    return null;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var DEQueueNode = function(key,val){
    this.prev = null;
    this.next = null;
    this.val = val;
    this.key = key;
};

class DEQueue {
    constructor() {
        this.tail = new DEQueueNode('$','$');
        this.head = new DEQueueNode('$','$');
        this.tail.prev = this.head;
        this.head.next = this.tail;
    };

    enqueue(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    };

    dequeue() {
        if (this.tail.prev == this.head)
            return null;
        else {
            var node = this.tail.prev;
            this.tail.prev = node.prev;
            node.prev.next = this.tail;
            node.next = null;
            node.prev = null;
            return node;
        }
    };

    printQueue(){
        var trav = this.head.next;
        while(trav!=this.tail){
            console.log(trav.val);
            trav = trav.next;
        }
    };

    bringToFront(node){
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.next = null;
        node.prev = null;
        this.enqueue(node);
    };
};

var main = function(){
    // var queue = new DEQueue();
    // queue.enqueue(new DEQueueNode(1));
    // queue.enqueue(new DEQueueNode(2));
    // queue.enqueue(new DEQueueNode(3));
    // queue.printQueue();
    // // queue.dequeue();
    // // queue.printQueue();
    // // queue.dequeue();
    // // queue.printQueue();
    // queue.bringToFront(queue.tail.prev.prev);
    // queue.printQueue();

    var cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    console.log(cache.get(1));       // returns 1
    cache.put(3, 3);    // evicts key 2
    console.log(cache.get(2));       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    console.log(cache.get(1));       // returns -1 (not found)
    console.log(cache.get(3));       // returns 3
    console.log(cache.get(4));       // returns 4

    var input1 = ["LRUCache","put","get","put","get","get"];
    var input2 = [[1],[2,1],[2],[3,2],[2],[3]];
    var ans = executeCode(input1, input2);
    console.log(ans);

    input1 = ["LRUCache","put","put","get","put","put","get"];
    input2 = [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]];
    ans = executeCode(input1, input2);
    console.log(ans);

    input1 = ["LRUCache","put","put","put","put","get","get"];
    input2 = [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]];
    ans = executeCode(input1, input2);
    console.log(ans);
};

executeCode = function(input1, input2){
    var ans = [null];
    var cache = new LRUCache(input2[0][0]);
    var i = 1;
    while(i<input1.length){
        if(input1[i]=="put")
            ans.push(cache.put.call(cache, input2[i][0], input2[i][1]));
        else if(input1[i]=="get")
            ans.push(cache.get.call(cache, input2[i][0]));
        i++;
    }
    return ans;
};

main();