/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  let leftIdx = 0;
  let rightIdx = 0;
  let longestSubstring = 0;

  // check strings leength should be greather than 0
  while (rightIdx < s.length) {
    // if the character is already present
    while (chars.has(s.charAt(rightIdx))) {
      // delete first entry: so that we can test for remaining characters
      chars.delete(s.charAt(leftIdx));
      leftIdx++;
    }
    // this code will go if the same character did not get
    longestSubstring = Math.max(longestSubstring, rightIdx - leftIdx + 1);
    chars.add(s.charAt(rightIdx));
    rightIdx++;
  }
  return longestSubstring;
};

lengthOfLongestSubstring("abcabcbb");
