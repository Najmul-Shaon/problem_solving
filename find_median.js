function findMedian(arr) {
  const newArr = arr.toSorted((a, b) => a - b);
  const length = newArr.length;

  let median;

  if (length % 2 === 0) {
    const mid1 = newArr[length / 2 - 1];
    const mid2 = newArr[length / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = newArr[Math.floor(length / 2)];
  }
  console.log(median);
  return median;
}

const arr = [3, 2, 5, 6, 8, 9, 1, 0];
findMedian(arr);
