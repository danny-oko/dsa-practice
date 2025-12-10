let heights = [1, 1, 4, 2, 1, 3];
let n = heights.length;

for (let i = 0; i < n - 1; i++) {
  let swapped = false;

  for (let j = 0; j < n - 1 - i; j++) {
    if (heights[j] > heights[j + 1]) {
      [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
      swapped = true;
    }
  }

  console.log("after pass", i, ":", heights);

  if (!swapped) {
    break; // array already sorted
  }
}

console.log("final:", heights);
