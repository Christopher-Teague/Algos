/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

const humpDay = "🦄"
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
        /// set variable arrays \\\
        let shorterArry = [];
        let longerArry = [];
        let intersection = [];
        /// determine and assign shorter and longer array \\\
        if (sortedA.length < sortedB.length) {
            shorterArry = sortedA;
            longerArry = sortedB;
        } else {
            shorterArry = sortedB;
            longerArry = sortedA;
        }
        /// iterate over shorter array and see if value at i is in the longer array \\\
        for (let i = 0; i < shorterArry.length; i++) {
            if (longerArry.includes(shorterArry[i])) {
                /// if the value at i is != last value of new array, push \\\ 
                if (shorterArry[i] !== intersection[intersection.length - 1]) {
                    intersection.push(shorterArry[i]);
                } else {
                    /// if not above, continue to next iteration \\\
                    continue;
                }
            }
        }
        return intersection;    /// return new array \\\
    }

console.log(orderedIntersection(arrA1, arrB1));
console.log(orderedIntersection(arrA2, arrB2));
console.log(orderedIntersection(arrA3, arrB3));
