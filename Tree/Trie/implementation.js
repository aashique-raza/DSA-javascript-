

// ! implementaion---

class TrieNode{
    constructor(){
        
        this.children={}
        this.isEndOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        
        let curr=this.root
        for(let i =0; i<word.length; i++){
            if(!curr.children[word[i]]){
                curr.children[word[i]]=new TrieNode()
            }
            curr=curr.children[word[i]]
        }
        curr.isEndOfWord=true;
        return this.root
    }
   
}


const myTrie = new Trie();
console.log('root',myTrie.insert('cat'))
// console.log("Trie initialized:", myTrie);