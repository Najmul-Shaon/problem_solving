function countingSort(arr) {
    // Write your code here
 const freq = Array(100).fill(0); 
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++; 
    }
    console.log(freq)
    return freq;
}

countingSort([1, 1, 3, 2, 1])