let TrieNode = require("./TrieNode");

class Trie {
    /**
 * Initialize your data structure here.
 */
    constructor() {
        this.root = new TrieNode();
        this.maxDepth = 0;
    }

    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        let depth = 0;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                node.put(ch, new TrieNode());
            }
            node = node.get(ch);
            depth += 1;
            this.maxDepth = Math.max(this.maxDepth, depth);
        }
        node.setEnd();
    }

    /**
     * Returns if the word is in the trie. 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.searchPrefix(word);
        return node != null && node.isEnd();
    }

    searchPrefix(word) {
        let node = this.root;
        for (let ch of word) {
            if (node.containsKey(ch))
                node = node.get(ch);
            else
                return null;
        }
        return node;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.searchPrefix(prefix) != null;
    }

    match(regexWord, node) {
        if (regexWord.length > this.maxDepth)
            return false;
        if (regexWord == '' && [...node.links.keys].length == 0)
            return true;
        if (regexWord.length == 1) {
            if (regexWord == '.')
                return [...node.links.entries()].some(subNode => subNode[1].isEnd());
            else return node.links.has(regexWord) && node.links.get(regexWord).isEnd();
        }

        for (let i = 0; i < regexWord.length; i++) {
            let ch = regexWord.charAt(i);
            if (ch == '.') {
                for (let [character, trieNode] of node.links.entries()) {
                    if (this.match(regexWord.substring(1), trieNode))
                        return true;
                }
            } else {
                return node.links.has(ch) && this.match(regexWord.substring(1), node.links.get(ch));
            }
        }
        return false;
    }

    getMaxDepth() {
        return this.maxDepth;
    }

    printAllWords(trieRoot, str) {
        let curr = trieRoot || this.root;
        str = str || "";
        for (let [ch, node] of curr.links.entries()) {
            if (node) {
                str += node.getVal();
                if (node.isEnd())
                    console.log(str);
                this.printAllWords(node, str);
                str = str.substring(0, str.length - 1);
            }
        };
    }

};

module.exports = Trie;

let main = () => {
    let trie = new Trie();
    trie.insert("apple");
    console.log(trie.search("apple"));   // returns true
    console.log(trie.search("app"));     // returns false
    console.log(trie.startsWith("app")); // returns true
    trie.insert("app");
    trie.insert("apple");
    trie.insert("answer");
    trie.insert("any");
    trie.insert("bye");
    trie.insert("their");
    trie.insert("there");
    console.log(trie.search("app"));     // returns true
    Trie.prototype.printAllWords(trie.root, "");
    console.log(trie.getMaxDepth());
    trie.printAllWords();
    console.log(trie.match("app", trie.root));
    console.log(trie.match("app.", trie.root));
    console.log(trie.match("app", trie.root));
    console.log(trie.match("app.e", trie.root));
    console.log(trie.match("apple", trie.root));
};

// main();