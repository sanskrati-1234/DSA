const canConstruct = (target, arr) => {
  if (target.length === 0) return true;
  for (let s of arr) {
    if (target.indexOf(s) === 0) {
      let subfix = target.slice(s.length);
      if (canConstruct(subfix, arr)) {
        return true;
      }
    }
  }
  return false;
};
// console.log(
//   canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", [
//     "a",
//     "aa",
//     "aaaa",
//     "aaaaaa",
//   ])
// );

//

// tree
// base condition
// via recursion
// init memo
// return

const canConstructMemoized = (target, words, memo = {}) => {
  if (target === "") return true;
  if (target in memo) return memo[target];

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      memo[target] = canConstructMemoized(
        target.slice(word.length),
        words,
        memo
      );
      if (memo[target]) {
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(
  canConstructMemoized(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a", "aa", "aaaa", "aaaaaa"]
  )
);
