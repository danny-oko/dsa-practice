// 1. An array with non negative integers that needs to be sorted.
// 2. A two dimensional array with index 0 to 9 to hold values with the current radix in focus.
// 3. A loop that takes values from the unsorted array and places them in the correct position in the two dimensional radix array.
// 4. A loop that puts values back into the initial array from the radix array.
// 5. An outer loop that runs as many times as there are digits in the highest value.

let array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("original array:", array);

let maxValue = Math.max(...array);
console.log("max value:", maxValue);

let radixArray = Array.from({ length: 10 }, () => []);

let exp = 1;

while (Math.floor(maxValue / exp) > 0) {
  while (array.length > 0) {
    const val = array.pop();
    const radixIndex = Math.floor(val / exp) % 10;
    radixArray[radixIndex].push(val);
  }

  for (const bucket of radixArray) {
    while (bucket.length > 0) {
      const val = bucket.pop();
      array.push(val);
    }
  }
  exp *= 10;
  console.log("array is being sorted:", array);
}
console.log("sorted array:", array);
