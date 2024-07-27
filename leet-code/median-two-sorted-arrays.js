// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  console.log("Array 1 => ", nums1);
  console.log("Array 2 => ", nums2);
  const mergedArray = [...nums1, ...nums2];
  console.log("Merged array => ", mergedArray);

  const median = Math.floor(mergedArray.length/2);
  console.log(mergedArray.length%2 ? mergedArray[median] : (mergedArray[median-1] + mergedArray[median]) /2)
};

findMedianSortedArrays([1, 2], [3, 4]);
