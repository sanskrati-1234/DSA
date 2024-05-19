const ansTargetExist = (target, arr) => {
  let table = new Array(target + 1).fill(0);
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i]) {
      for (let j = 0; j < arr.length; j++) {
        table[i + arr[j]] = [...table[i], arr[j]];
        if (table[target]) {
          return table[target];
        }
      }
    }
  }
  return [];
};

console.log(ansTargetExist(7, [2, 2, 2, 3, 5]));
