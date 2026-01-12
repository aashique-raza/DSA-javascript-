
// ! Frog Jump 


function canCross(stones){

    let map = new Map();
   for(let i=0;i<stones.length;i++){
         map.set(stones[i], i);
   }

   function dfs(idx, jump){
         if(idx === stones.length - 1) return true;
         let result = false;
            for(let step = jump - 1; step <= jump + 1; step++){
                    if(step > 0){
                            let nextPos = stones[idx] + step;
                            if(map.has(nextPos)){
                                      let nextIdx = map.get(nextPos);
                                        result = result || dfs(nextIdx, step);
                            }
                    }
            }
         return result;
   }

   return dfs(0, 0);
}