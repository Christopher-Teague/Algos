/**
ZigZag Conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // create empty arry
    // loop through string 
    // numRow determines the number of array
    let arr = []
    let strIndex = 0
    // for amt of rows array.push array into empty array
    for (let i = 0; i < numRows; i++) {
        arr.push("")
    }
    console.log(arr)
    while (strIndex < s.length) {
        // loop through string using numRows and push index of string into array
        for (let i = 0; i < numRows; i++) {
            if(s[strIndex] != undefined){
                arr[i] = arr[i] + s[strIndex]
            }
            strIndex++;
        }
        console.log(arr)
        // loop through string from the numRow-1 (2nd to the last row)
        for (let i = (numRows - 2); i > 0; i--) {
            if(s[strIndex] != undefined){
                arr[i] = arr[i] + s[strIndex]
            }
            strIndex++;
        }
        console.log(arr)
    }
    let str = ""
    for(let i=0; i<arr.length; i++) {
        str = str.concat(arr[i])
    }
    return str

};

// console.log(convert(s = "PAYPALISHIRING", numRows = 3))
console.log(convert(s = "PAYPALISHIRING", numRows = 4))


// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Input: s = "A", numRows = 1
// Output: "A"