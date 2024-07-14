function rangeBetween(start, end) {
  if (start > end) {
    const arr = Array.from(
      { length: start - end + 1 },
      (_, index) => start - index
    );
    return arr;
  } else {
    const arr = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index
    );
    return arr;
  }
}

console.log(rangeBetween(4, 7));

console.log(rangeBetween(-4, 7));
