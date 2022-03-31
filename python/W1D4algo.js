/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */
 
 
 
 const str1 = "aaaabbcddd";
 const expected1 = "a4b2c1d3";
 
 const str2 = "";
 const expected2 = "";
 
 const str3 = "a";
 const expected3 = "a";
 
 const str4 = "bbcc";
 const expected4 = "bbcc";
 
 const str5 = "aaaabbaaacddd";
 const expected5 = "a4b2a3c1d3";
 /**
  * Encodes the given string such that duplicate characters appear once followed
  * by a number representing how many times the char occurs only if the
  * character occurs more than two time.
  * - Time: O(?).
  * - Space: O(?).
  
  //      Create function that takes in a string     #
  //      create result variable    #
  //      create count variable     #
  //      iterate over string   #
  //      identify group of matching characters
  //      add character to result var
  //      add count to result var
  //      return result 
  
  * @param {string} str The string to encode.
  * @returns {string} The given string encoded.
  */
 
function encodeStr(str) {
    var result = "";
    var count = 1;
    
    for (var i = 0; i < str.length; i++){
        if (str[i] == str[i+1]) {
            count +=1;
        } else {
            result += str[i] + count;
            count = 1
        }
    }
    if (result.length < str.length){
        return result
    } else {
        return str
    }  
}

console.log(encodeStr(str1)) ;
  // ***********************************************

/* 
    String Decode  
  */



  const two_str1 = "a3b2c1d3";
  const two_expected1 = "aaabbcddd";
  
  const two_str2 = "a3b2c12d10";
  const two_expected2 = "aaabbccccccccccccdddddddddd";
  
  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
  */

//  create result string    *
//  create var for letter   *
//  create "count" string var   *
//  iterate over str    *
//  if char is a letter -> push to letter var
//  if char is a number, add to count string
//  convert string in count str to num
//  multiply letter var by converted num var
//  push to result string
//  return result string


function decodeStr(str) {
    var result = ""
    var letter = ""
    var count = ""
    for (var i = 0; i < str.length; i++) {
        if (number.isNum(str[i])) {
            count += str[i];
        } else {
            letter += str[i];
        }
        console.log(letter)
        console.log(count)
    }

}

decodeStr(two_str1)