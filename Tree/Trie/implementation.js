

// ! implementaion---

class TrieNode{
    constructor(){
        this.children={}
        this.isWordComplete=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
}