/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  console.log(s);
  const chars = new Set();
  let leftIdx = 0;
  let rightIdx = 0;
  let longestSubstring = 0;

  while (rightIdx < s.length) {
    console.log(rightIdx, s.length);

    while (chars.has(s.charAt(rightIdx))) {
      console.log("while ", chars, s, rightIdx);

      chars.delete(s.charAt(leftIdx));
      console.log("delete ", chars, s, rightIdx);

      leftIdx++;
      console.log("leftIdx", leftIdx);
    }

    longestSubstring = Math.max(longestSubstring, rightIdx - leftIdx + 1);
    console.log("longestSubstring",longestSubstring)
    chars.add(s.charAt(rightIdx));
    console.log("chars ", chars, s, rightIdx);
    rightIdx++;
    console.log("rightIdx", rightIdx);

  }

  return longestSubstring;
};

lengthOfLongestSubstring("abcabcbb")
