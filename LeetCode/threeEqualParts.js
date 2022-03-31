/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function (arr) {
    let totalSum = 0;
    let sumModThree;
    let sumDivideByThree;
    // iterate through array to access each integer
    for (i = 0; i < arr.length; i++) {
        // sum all values in array
        totalSum += arr[i]
    }
    // if total sum equal 0 return true
    // if(totalSum === 0){
    //     return true
    // }
    // take sum and divide by 3 and assign that value to a variable
    sumModThree = totalSum % 3;
    // console.log({sumModThree})
    if(sumModThree === 0){
        sumDivideByThree = totalSum / 3;
        // console.log({sumDivideByThree})
    }
    // console.log(sumDivideByThree)
    let currentSum = 0;
    let count = 0;
    for (j = 0; j < arr.length; j++) {
        // sum each integer unti it reaches the variable
        // when it reaches the variable stop summing and move to the next index and start summing again
        currentSum += arr[j]
        // console.log({ currentSum })
        if (currentSum === sumDivideByThree) {
            // console.log("23", { currentSum })
            count++
            // console.log({count})
            currentSum = 0
            // return currentSum
        } else {
            // console.log("26", { currentSum })
            continue
        }
    }
    if(count >= 3 ) {
        return true
    } else {
        return false
    }
};

// Example 1:
arr1 = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:
arr2 = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:
arr3 = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
// Example 4:
arr4 = [0,0,0,0]
// Output: true
arr5 = [1,-1,1,-1]
// Output: false

console.log(canThreePartsEqualSum(arr1))
console.log(canThreePartsEqualSum(arr2))
console.log(canThreePartsEqualSum(arr3))
console.log(canThreePartsEqualSum(arr4))
console.log(canThreePartsEqualSum(arr5))