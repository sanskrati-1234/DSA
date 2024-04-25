// Write a fenction cansum (targetsum, Numbers) that takes target sum and array of numbers as arguments
// Function chould return True ar false if it is bassible to generete the targetsum using cumbers numbers
//are non-negatine and number can be used multips times consum (7, 65, 3,4,7]) → Touc

function isTargetSun(arr, sum, target) {
  if (sum === target) return true;
  if (sum > target) {
    return false;
  }
  if (arr.length < 1) {
    return false;
  }
  if (
    isTargetSun(arr.slice(1), sum, target) ||
    isTargetSun(arr, sum + arr[0], target)
  ) {
    return true;
  }

  return false;
}

console.log(isTargetSun([3, 5, 5], 0, 7));
