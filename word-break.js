var wordBreak = function (s, wordDict, memo = {}) {
  if (s === "") return true;
  if (s in memo) return memo[s];

  for (let str of wordDict) {
    if (s.indexOf(str) === 0) {
      memo[s] = wordBreak(s.slice(str.length), wordDict, memo);
      if (memo[s]) {
        return true;
      }
    }
  }

  memo[s] = false;

  return memo[s];
};
