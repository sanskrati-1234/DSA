// without memo
var wordBreak = function (s, wordDict) {
  if (s === "") return true;

  for (let str of wordDict) {
    if (s.indexOf(str) === 0) {
      if (wordBreak(s.slice(str.length), wordDict)) {
        return true;
      }
    }
  }

  return false;
};

console.log(wordBreak("aaaaaaaac", ["a", "aaaa", "ab"]));
// with memo
var wordBreakMemo = function (s, wordDict, memo = {}) {
  if (s === "") return true;
  if (s in memo) return memo[s];

  for (let str of wordDict) {
    if (s.indexOf(str) === 0) {
      memo[s] = wordBreakMemo(s.slice(str.length), wordDict, memo);
      if (memo[s]) {
        return true;
      }
    }
  }

  memo[s] = false;

  return memo[s];
};
/**
 * 1. create tree
 * 2. find base condtion
 * 3. solve with recursion
 * 4. add memo
 * 5. return memo
 */
