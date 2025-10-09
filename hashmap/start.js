

console.log("hashmap start");


// ! hashmap start here with collision

// class HashMap {

//     constructor(size){

//         this.data = new Array(size);
//     }

//     hash(key){
//         let hash=0;
//         for(let i=0; i<key.length; i++){
//             hash = (hash + key.charCodeAt(i) ) % this.data.length;
//         }
//         return hash;
//     }

//     set(key , value){

//         let add= this.hash(key);
//         this.data[add] = [key, value];
//     }

//     get(key){
//         let add = this.hash(key);
//         return this.data[add][1];
//     }

    
// }

// let myHashMap = new HashMap(50);
// console.log('myhashmap',myHashMap);
// console.log(417%50);
// console.log('hash for name',myHashMap.hash('name'));

// myHashMap.set('name', 'john');
// myHashMap.set('age', 23);
// console.log('myhashmap after set',myHashMap);
// console.log('get name',myHashMap.get('name'));
//  myHashMap.set('mean', 'doe');
//  console.log('get mean',myHashMap.get('mean'));

// ! hashmap without collision
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

        let existingBucket = this.data[add];

        if(existingBucket){
            this.data[add].push([key, value]);
        }else{
            this.data[add] = [];
            this.data[add].push([key, value]);
        }
       
    }

    get(key){
        let add = this.hash(key);
       let items= this.data[add];
       if(items){
        for(let i=0; i<items.length; i++){
           let [k, v] = items[i];
           if(k === key){
            return v;
           }
        }
       }
         return undefined;
    }

    
}

let myHashMap = new HashMap(50);
console.log('myhashmap',myHashMap);
console.log(417%50);
console.log('hash for name',myHashMap.hash('name'));

myHashMap.set('name', 'john');
myHashMap.set('age', 23);
console.log('myhashmap after set',myHashMap);

// check collision
    myHashMap.set('mean', 'doe');
    console.log('get mean',myHashMap.get('mean'));
