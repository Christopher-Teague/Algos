/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/


const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [7, 2, 4, 10, 3, 10];
const expected3 = 3;

const nums4 = [7, 2, 4, 10, 3, 13];
const expected4 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

function balanceIndex(nums) {
    var count1 = 0;
    for (var i = 0; i < nums.length; i++) {
        var count2 = 0;
        count1 += nums[i];
        for (var j = nums.length-1; j>=0; j--){
            count2 += nums[j] ;          
        }
        console.log(count1)
        console.log(count2)
        if (count1 === count2){
            return i+1;
            }     
    }
}
console.log(balanceIndex(nums1))