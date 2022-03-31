/**
 * @param {string} s
 * @return {number}
 */
//sorry got disconnected my comp is slow today like my brain >< I think I need to restart and i have a career services mtg. I'll be back. hopefully I'll stil be able to catch you guys later.
//s'ok my brain is always slow
const lengthOfLongestSubstring = (s) => {
    let string = "";
    let arrOfStrings = [];
    longest = 0;
    for (letter of s) {
        // console.log(letter)

        if (s.length === 1) {
            return 1;
        }
        if (!string.includes(letter)) {
            string += letter;
            console.log(string)
        } else {
            arrOfStrings.push(string)
            //s.indexOf(letter)
            //            substringWithNoRepeat = substringWithNoRepeat.slice(substringWithNoRepeat.indexOf(s[x])+1)+s[x];
            string = string.slice(string.indexOf(letter) + 1) + letter;
            console.log("new string:", string);
            console.log(arrOfStrings)
        }
    }
    if (string.length != 0) {
        arrOfStrings.push(string)
    }

    for (subStr of arrOfStrings) {
        if (subStr.length > longest) {
            longest = subStr.length;
        }
    }
    return longest;
};

const string1 = "abcabcbb";
const string2 = "dvdf"
const string3 = "pwwkew";

console.log(`lengthOfLongestSubstring ${string1}`, lengthOfLongestSubstring(string1));
console.log(`lengthOfLongestSubstring ${string2}`, lengthOfLongestSubstring(string2));
console.log(`lengthOfLongestSubstring ${string3}`, lengthOfLongestSubstring(string3));