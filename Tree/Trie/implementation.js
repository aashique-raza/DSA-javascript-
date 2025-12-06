

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

    search(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }
            curr=curr.children[char]
        }
        return curr.isEndOfWord
    }
   
}


const myTrie = new Trie();
console.log('root',myTrie.insert('cat'))
console.log('search',myTrie.search('cat'))
// console.log("Trie initialized:", myTrie);