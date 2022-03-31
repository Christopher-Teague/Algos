// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let newArr = []
    let sum = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let solArr = []
        console.log("sum outside loop: "+sum)
        for (let j = i; j < arr.length - 1; j++) {
                while (sum < k) {
                solArr.push(arr[j]);
                sum += arr[j];
                console.log("sum: "+sum)
                if (sum === k) {
                    newArr.push(solArr)
                }
            }
        }
    }
    return (newArr)
}
// if(arr[i]+arr[j]==k){
//     solArr.push(arr[i]);
//     solArr.push(arr[j]);
// }
// if (arr[i] + arr[j]<k){
//     j++
//     sum + arr[j]
//         }
//     }
// }

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));