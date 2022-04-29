/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 *
 * https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (34.92%)
 * Likes:    1579
 * Dislikes: 80
 * Total Accepted:    172.4K
 * Total Submissions: 484K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) can search a literal word or a regular expression string
 * containing only letters a-z or .. A . means it can represent any one
 * letter.
 * 
 * Example:
 * 
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 */

let Trie = require("../Utilities/Trie");

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.trie = new Trie();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.match(word, this.trie.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

let main = () => {
    let obj = new WordDictionary();
    obj.addWord("app");
    console.log(obj.search("app"));
    console.log(obj.search("apple"));
    console.log(obj.search(".."));
    console.log(obj.search("..p"));
    console.log(obj.search("a.p"));
    console.log(obj.search(".p."));
    console.log(obj.search("..."));
};

main();
