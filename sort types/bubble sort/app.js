// let heights = [1, 1, 4, 2, 1, 3];
// let n = heights.length;

// for (let i = 0; i < n - 1; i++) {
//   let swapped = false;

//   for (let j = 0; j < n - 1 - i; j++) {
//     if (heights[j] > heights[j + 1]) {
//       [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
//       swapped = true;
//     }
//   }

//   console.log("after pass", i, ":", heights);

//   if (!swapped) {
//     break; // array already sorted
//   }
// }

// console.log("final:", heights);


// var heightChecker = function (heights) {
//   const n = heights.length;

//   const expected = [...heights];

//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (expected[j] > expected[j + 1]) {
//         [expected[j], expected[j + 1]] = [expected[j + 1], expected[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }

//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (heights[i] !== expected[i]) count++;
//   }

//   return count;
// };

// let heights = [1, 1, 4, 2, 1, 3];
// console.log(heightChecker(heights)); // 3
