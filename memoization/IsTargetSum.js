// Write a fenction cansum (targetsum, Numbers) that takes target sum and array of numbers as arguments
// Function chould return True ar false if it is bassible to generete the targetsum using cumbers numbers
//are non-negatine and number can be used multips times consum (7, 65, 3,4,7]) → Touc

// without memo

// function isTargetSun(arr, sum, target) {
//   if (sum === target) return true;
//   if (sum > target) {
//     return false;
//   }
//   if (arr.length < 1) {
//     return false;
//   }
//   if (
//     isTargetSun(arr.slice(1), sum, target) ||
//     isTargetSun(arr, sum + arr[0], target)
//   ) {
//     return true;
//   }

//   return false;
// }

//console.log(isTargetSun([3, 3, 3], 0, 10000));
// from top to bottom

// const isTargetSum = (arr, target) => {
//   if (target === 0) return true;
//   if (target < 0) return false;

//   for (let i = 0; i < arr.length; i++) {
//     if (isTargetSum(arr, target - arr[i])) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isTargetSum([2, 4, 5], 10000));

// memo

const isTargetSum = (arr, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i = 0; i < arr.length; i++) {
    memo[target - arr[i]] = isTargetSum(arr, target - arr[i]);
    if (memo[target - arr[i]]) {
      return true;
    }
  }
  return false;
};
console.log(isTargetSum([2, 4, 5], 11000));
