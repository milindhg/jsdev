/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (44.86%)
 * Likes:    2860
 * Dislikes: 46
 * Total Accepted:    291.2K
 * Total Submissions: 619.2K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 * 
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");   
 * trie.search("app");     // returns true
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/342405854/
 *              beats 74.92% JS Submissions.
 * 

The base is the code for TrieNode in this problem. No matter whether you use
array or map in the TrieNode implementation, the implementation of the Trie does
not change.
 * 
 * 
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let ch of word) {
        if (!node.containsKey(ch)) {
            node.put(ch, new TrieNode());
        }
        node = node.get(ch);
    }
    node.setEnd();
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchPrefix(word);
    return node != null && node.isEnd();
};

Trie.prototype.searchPrefix = function(word) {
    let node = this.root;
    for(let ch of word){
        if(node.containsKey(ch))
            node = node.get(ch);
        else
            return null;
    }
    return node;
};
/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) != null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var TrieNode = function(ch) {
    this.links = new Map();
    this.val = ch || null;
};

TrieNode.prototype.containsKey = function(ch) {
    return this.links.has(ch);
};

TrieNode.prototype.get = function(ch) {
    return this.links.get(ch);
};

TrieNode.prototype.put = function(ch, trieNode) {
    trieNode.setVal(ch);
    return this.links.set(ch, trieNode);
};

TrieNode.prototype.setEnd = function() {
    this.end = true;
};

TrieNode.prototype.isEnd = function() {
    return this.end == true;
};

TrieNode.prototype.setVal = function(ch) {
    this.val = ch;
}

TrieNode.prototype.getVal = function() {
    return this.val;
}
// @lc code=end

let main = () => {
    let trie = new Trie();
    trie.insert("apple");
    console.log(trie.search("apple"));   // returns true
    console.log(trie.search("app"));     // returns false
    console.log(trie.startsWith("app")); // returns true
    trie.insert("app");
    console.log(trie.search("app"));     // returns true
};

main();