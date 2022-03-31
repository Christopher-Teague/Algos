/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */

 const str1 = "abcABC";
 const expected1 = "abcABC";
 
 const str2 = "helloo";
 const expected2 = "helo";
 
 const str21 = "heloloo";
 const expected21 = "helo";
 
 // bonus
 const str3 = "hellool";
 const expected3 = "heol";
 

function stringDedupe(str) {
    var newStr = ""
    for (var i = str.length-1; i>=0 ; i--) {
        if (newStr.includes(str[i])) {
            continue
        } else {
        newStr = str[i] + newStr;
        }
    }
    return newStr;
    
}    
console.log(stringDedupe(str21))