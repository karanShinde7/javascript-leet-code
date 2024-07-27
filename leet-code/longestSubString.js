//https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} inputString
 * @return {number}
 */
const lengthOfLongestSubstring = (inputString) => {
  if (inputString.length <= 1) return inputString.length;

  let current_string = "";
  let max = 0;

  for (let i = 0; i < inputString.length; i++) {
    // get character from input string
    let char = inputString.charAt(i);
    let pos = current_string.indexOf(char);
    // if it present returns index of char
    if (pos !== -1) {
      // pos + 1 will reset it to 0;
      current_string = current_string.substring(pos + 1);
    }
    // if it returns -1 the character is not present
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
};

console.log(
  "Length of longest sub string: ",
  lengthOfLongestSubstring("pwwkew")
);
