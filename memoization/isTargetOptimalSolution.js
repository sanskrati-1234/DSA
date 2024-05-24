// without memo

function targetSumArray(numbers, target, prev = null) {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let rem = target - num;
    let newArr = targetSumArray(numbers, rem, prev);

    if (newArr) {
      let ans = [...newArr, num];
      if (prev === null || prev.length > ans.length) {
        prev = [...ans];
      }
    }
  }
  return prev;
}

// with memo
function targetSumArrayMemo(numbers, target, prev = null, memo = {}) {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  for (let num of numbers) {
    let rem = target - num;
    memo[rem] = targetSumArrayMemo(numbers, rem, prev, memo);
    if (memo[rem]) {
      if (prev === null || prev?.length > [num, ...memo[rem]].length) {
        prev = [num, ...memo[rem]];
      }
    }
  }

  return prev;
}

console.log("targetSumArray", targetSumArray([1, 2, 3, 7], 7));
