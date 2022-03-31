/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
// const expected1 = "hello world";

const str2 = "    hello  world my friend is tyler     ";
// const expected2 = "hello  world my friend is tyler";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    var newStr = ""
    var i = 0;

    while (str[i] = " ") {
        i++
    } 

    for (var j = str.length-1; j >=0 ; j--){
        if (str[str.length -1] == " ") {
            newStr = str.slice(0, -1);
        }        
            
    }
    console.log(newStr)
        // for (var i = 0 ; i<str.length; i++){
            
        //     if (str[i] != " " )
        //     // && str[i+1] == " " ) {
        //         continue
        //     }
        //     return newStr
        }
}
console.log(trim(str2))




        // } else {
        //     newStr += str[i]
        // }   
    // ******************************************************************


/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

// const strA1 = "yes";
// const strB1 = "eys";
// const expected1 = true;

// const strA2 = "yes";
// const strB2 = "eYs";
// const expected2 = true;

// const strA3 = "no";
// const strB3 = "noo";
// const expected3 = false;

// const strA4 = "silent";
// const strB4 = "listen";
// const expected4 = true;

// /**
//  * Determines whether s1 and s2 are anagrams of each other.
//  * Anagrams have all the same letters but in different orders.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} s1
//  * @param {string} s2
//  * @returns {boolean} Whether s1 and s2 are anagrams.
//  */
// function isAnagram(s1, s2) {}