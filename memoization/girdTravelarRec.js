/*You are traveller on a 2d grid, you begin in the top left corner and your goal is to travel to the bottom-right.
 You may only more clacon or night*/
// recursion
const gridTraveller = (m, n) => {
  if (m === 0 || n == 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// memoization
const gridTravellerMemo = (m, n, memo = {}) => {
  let key = m > n ? m + "," + n : n + "," + m;
  if (memo[key]) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] =
    gridTravellerMemo(m - 1, n, memo) + gridTravellerMemo(m, n - 1, memo);
  return memo[key];
};

//console.log(gridTraveller(15, 15));

console.log(gridTravellerMemo(15, 15));
