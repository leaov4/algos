//1.5 ONE AWAY - Solved

//There are three types of edits to be performed on a string- insert a character,
//remove a character, or replace a character. Given two strings, write a function 
//to check if they are one edit, or zero edits away

//approach:
//if they are the same length, the difference is in replacing. 
//if they are different lengths, the one edit is in adding one char to the shorter one. 
//(or deleting one from the longer)

function oneEdit(str1, str2){
    let val;
    if(str1.length === str2.length){
        val = replace(str1, str2)
    } else if (str1.length < str2.length) {
        val = insert(str1, str2)
    } else if (str1.length > str2.length) {
        val = insert(str2, str1)
    }
}

function replace(str1, str2){
    let foundDiff = 0; 
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i]){
            foundDiff++; 
        }
    }
    if(foundDiff <= 1){
        return true
    } 
    return false;
}

//check if str1 can have one value inserted to become true 
function insert(str1, str2){
    let i = 0, j = 0;
    let found = 0;
    while (i <= str1.length && j <= str2.length){
        if(str1[i] === str2[j]){
            i++;
            j++;
        } else {
            //this can only happen once 
            found++;
            if( str1[i] === str2[j+1]){
                j++;
            }
        }
    }
    if (found <= 1){
        return true
    }
    return false
}

oneEdit("abab", "aba"); //true
oneEdit("pale", "ple"); //true 
oneEdit("pales", "pale"); //true
oneEdit("pale", "bale");  //true 
oneEdit("pale", "bake"); //false