//1.4 PALINDROME PERMUTATION - Solved

//Given a string, write a function to check if its a permutation of a palindromw
//A palindrome is the same word forwards/backwards, a permutation is rearragement of letters. 

//approach: if there is an even count of each letter, except for one allowed
// odd count (abbba, aba) its a permutation of a palindrome. 

function isPermPal(str1){

    let letters = {};
    let str = str1.toLowerCase()

    //map count of each letter onto letters object
    for(let i=0; i<str.length; i++){
        if(str[i] !== ' '){
            if(letters[str[i]]){
                letters[str[i]]++;
            } else {
                letters[str[i]] = 1;
            }
        }
    }

    let vals = Object.values(letters);
    let foundOdd = 0; 
    //only returns true if there is one or less odd count for a letter
    vals.forEach(element => {
        if (element % 2 === 1 ){
            foundOdd++;
        }
    });
    if (foundOdd <= 1){
        return true
    } 
    return false
}

console.log(isPermPal("Tact Coa")); //true, "Taco cat"
console.log(isPermPal("Tavo Coaa")); //false
console.log(isPermPal("Lea aLe")); //true
console.log(isPermPal("LeaaaLe")); //true
console.log(isPermPal("Lea alL")); //false