function getVowels(str = "") {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let strNoVowel = "";
  const totalVowel = {};
  let totalVowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      strNoVowel += str[i]; // concat vowel less string
    } else {
      if (totalVowel.hasOwnProperty(str[i])) {
        totalVowel[str[i]]++; // increment after each occurance
      } else {
        totalVowel[str[i]] = 1; // first found
      }
      totalVowelCount++; // increment if vowel found
    }
  }
  console.log("String after removing vowels: ", strNoVowel);
  console.log("Count of each occurance: ", totalVowel);
  console.log("Total Vowel count: ", totalVowelCount);
}

const str = "Remove vowels from the given string using javascript";
console.log("Actual String: ", str);
getVowels(str);
