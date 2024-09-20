const longestSeq = (arr, element) => {
    return Math.max(...arr.join('').split(new RegExp(`[^${element}]`)).map(group => group.length));
}

console.log(longestSeq([1, 2, 3, 7, 8, 9, 4, 5, 6], 1));