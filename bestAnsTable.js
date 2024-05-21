const bestAns = (target, arr) => {
  let table = new Array(target + 1).fill(false);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let j = 0; j < arr.length; j++) {
        if (
          !table[i + arr[j]] ||
          table[i + arr[j]].length > table[i].length + 1
        ) {
          table[i + arr[j]] = [...table[i], arr[j]];
        }
      }
    }
  }

  return table[target];
};

console.log(bestAns(7, [2, 3, 4, 5, 7]));
