
function isIsogram(str) {

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        for(let j = i+1; j<str.length; j++){
            if(str[i].toLowerCase() == str[j].toLowerCase()){
               return false; 
            }
        }
    }
    return true;
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.