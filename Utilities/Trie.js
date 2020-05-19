let TrieNode = require("./TrieNode");

class Trie {
    /**
 * Initialize your data structure here.
 */
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie. 
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.containsKey(ch)) {
                node.put(ch, new TrieNode());
            }
            node = node.get(ch);
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

    printAllWords(trieRoot, str) {
        //TODO If trieRoot is passed print all words in given trieRoot
        //TODO Else print all words in this.root

        let curr = trieRoot;
        curr.links.forEach( (node, index) => {
            if(node){
                str += String.fromCharCode(97 + index);
                if(node.isEnd())
                    console.log(str);
                this.printAllWords(node, str);
                str = str.substring(0, str.length-1);
            }
        });
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
    trie.insert("answer");
    trie.insert("any");
    trie.insert("bye");
    trie.insert("their");
    trie.insert("there");
    console.log(trie.search("app"));     // returns true
    Trie.prototype.printAllWords(trie.root, "");
};

main();