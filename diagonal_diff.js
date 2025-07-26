function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];              // Top-left to bottom-right
        secondarySum += arr[i][n - 1 - i];    // Top-right to bottom-left
    }

    return Math.abs(primarySum - secondarySum);
}


const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix));  // Output: 15
