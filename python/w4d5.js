/* 
recursively find the lowest common multiple between two numbers
"A common multiple is a number that is a multiple of two or more integers. 
The common multiples of 3 and 4 are 0, 12, 24, .... 
The least common multiple (LCM) of two numbers is the smallest number (not zero) 
that is a multiple of both."

Try writing two columns of multiples as a starting point:
starting with 15 and 25 and keep writing their multiples until you find the lowest common one
then turn this in to a step by step instruction
15 25
30 50
45 75
60
75
75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

function lowestCommonMult(a, b) {
    if (a == b){
        return a;
    }
    var num1 = a
    var num2 = b
    for ( var i = 1; i < 10; i++){
        num1 = num1 * i ;
        for (var j = 1 ; i < 10; j++) {
            num2 = num2 * j;
            if (num1 == num2){
                return num1;
            }
        }
    }
}
console.log(lowestCommonMult(num3A,num3B))

/*****************************************************************************/
/* 
Binary String Expansion
You are given a STRING containing chars "0", "1", and "?"
For every "?" character, either "0" or "1" can be substituted.
Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
// const expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

function binaryStringExpansion(str) {}


/*****************************************************************************/