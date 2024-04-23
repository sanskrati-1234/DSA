/*You are traveller on a 2d grid, you begin in the top left corner and your goal is to travel to the bottom-right.
 You may only more clacon or night*/ ß;
// recursion
const travel = (m, n) => {
  if (m === 0 || n == 0) return 0;
  if (m === 1 && n === 1) return 1;
  return travel(m - 1, n) + travel(m, n - 1);
};

// memoization
const memoTraval = (m, n, memo = {}) => {
  let key = m > n ? m + "," + n : n + "," + m;
  if (memo[key]) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = memoTraval(m - 1, n, memo) + memoTraval(m, n - 1, memo);
  return memo[key];
};

//console.log(travel(20, 20));
//console.log(travel(2, 3));

console.log(memoTraval(20, 30));
// console.log(memoTraval(2, 3));
