/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//                     v
const arr1 = [1, 4 , 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


///// PSEUDO CODE \\\\\
// iterate over array
// if callback(arr[idx]) == false   -> arr.shift 
// if callback(arr[idx]) == true   -> return array 

function dropIt(arr, callback) {
    // iterate through arr
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        // if callback at idx evaluates to true, return the array
        if (callback(arr[i]) === true){
            return arr
        // otherwise, remove first element from array and 
        // decrement idx to bring back to begining of array
        } else arr.shift()
        i -= 1
    }
    return arr
}

// console.log(dropIt(arr1, callback1));
// console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));


