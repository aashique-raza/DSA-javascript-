

console.log("hashmap start");


// ! hashmap start here

class HashMap {

    constructor(size){

        this.data = new Array(size);
    }

    hash(key){
        let hash=0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) ) % this.data.length;
        }
        return hash;
    }

    set(key , value){

        let add= this.hash(key);
        this.data[add] = [key, value];
    }

    get(key){
        let add = this.hash(key);
        return this.data[add][1];
    }

    
}

let myHashMap = new HashMap(50);
console.log('myhashmap',myHashMap);
console.log(417%50);
console.log('hash for name',myHashMap.hash('name'));

myHashMap.set('name', 'john');
myHashMap.set('age', 23);
console.log('myhashmap after set',myHashMap);
console.log('get name',myHashMap.get('name'));
 myHashMap.set('mean', 'doe');
 console.log('get mean',myHashMap.get('mean'));

