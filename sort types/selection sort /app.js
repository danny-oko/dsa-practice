// 1. An array with values to sort.
// 2. An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
// 3. An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n−1 times.

let arr = [64, 34, 25, 5, 22, 11, 90, 12];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log(arr);
}

console.log(arr);
