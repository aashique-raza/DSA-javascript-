
// !  power set 


 function AllPossibleStrings(s) {
        let result = [];
       

        const solve = (i, temp) => {
            if (i >= s.length) {
                if (temp.length > 0) {
                    result.push(temp);
                }
                return;
            }

            // include current char
            solve(i + 1, temp + s[i]);
            // exclude current char
            solve(i + 1, temp);
        };

        solve(0, "");
        result.sort(); // lexicographical order
        return result;
    }