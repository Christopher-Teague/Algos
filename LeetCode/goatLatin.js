/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    // create a dictionary of vowels
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let newStr = ""
    // holder stores first letter of word
    let holder = ""
    // counter determines ho many "a"'s to add to end of word
    let counter = 1

    // loop through sentence (by idx)
    for (letter in sentence) {
        //determine if letter is a vowel - if true, add it to newStr 
        if (vowel.includes(sentence[letter])) {
            newStr += sentence[letter]
            // console.log(newStr)
        }

        // if char is a " " space, add the holder + "ma" to newStr
        if (sentence[letter] === " ") {
            newStr += holder + "ma"
            // reset holder
            holder = ""
            // Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
            // word index determined by counter and incremented at each " " space.
            for (let i = 0; i < counter; i++) {
                newStr += "a"
            }
            counter += 1
        }

        // if current char is not a vowel AND (the index before is a space OR it is the first idx of sentence) 
        // store char in holder variable
        if (!vowel.includes(sentence[letter]) && ((sentence[letter - 1] === " ") || (letter == 0))) {
            holder = sentence[letter]
            // otherwise concat to newStr
        } else if (!vowel.includes(sentence[letter])) {
            newStr += sentence[letter]
            // console.log(newStr)
        }
        
    }
    // adds holder + "ma" + "a"(for each counter) to end of newStr
    newStr += holder + "ma"
    for (let i = 0; i < counter; i++) {
        newStr += "a"
    }
    // console.log(newStr)
    // return the new string
    return newStr
};

let sentence1 = "I speak Goat Latin"
let sentence2 = "The quick brown fox jumped over the lazy dog"
toGoatLatin(sentence1)
toGoatLatin(sentence2)

console.log("----------")
console.log("sentence 1: ",sentence1);
console.log("converted: ", toGoatLatin(sentence1));
console.log("----------")
console.log("sentence 2: ",sentence2);
console.log("converted: ", toGoatLatin(sentence2));
console.log("----------")

/**The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
*/
/** Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
*/