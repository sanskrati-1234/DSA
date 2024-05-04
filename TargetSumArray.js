function targetSumArray(numbers, target, memo = {}) {
  if (memo[target]) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let rem = target - num;
    let remArr = targetSumArray(numbers, rem);
    if (remArr) {
      memo[rem] = [num, ...remArr];
      return [num, ...remArr];
    }
  }
  memo[target] = null;
  return memo[target];
}

console.log("targetSumArray", targetSumArray([3, 4, 7], 7));
