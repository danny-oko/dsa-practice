// def countingSort(arr):
//     if not arr:
//         return arr
//     max_val = max(arr)
//     count = [0] * (max_val + 1)
//     for num in arr:
//         count[num] += 1
//     arr[:] = []
//     for num, freq in enumerate(count):
//         arr.extend([num] * freq)
//     return arr
// unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
// sortedArr = countingSort(unsortedArr)
// print("Sorted array:", sortedArr)

function countingSort(arr) {
  if (!arr || arr.length === 0) return arr;
  const maxVal = Math.max(...arr);
  const count = new Array(maxVal + 1).fill(0);
  for (const num of arr) {
    count[num] += 1;
  }
  arr.length = 0;
  for (let num = 0; num < count.length; num++) {
    const freq = count[num];
    for (let i = 0; i < freq; i++) {
      arr.push(num);
    }
  }
  return arr;
}
const unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
const sortedArr = countingSort(unsortedArr);
console.log("sorted array: ", sortedArr);
