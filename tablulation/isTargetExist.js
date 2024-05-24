const isTargetExist = (target, arr) => {
  let table = new Array(target + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i < target; i++) {
    if (table[i]) {
      for (let j = 0; j < arr.length; j++) {
        table[i + arr[j]] = 1;
        if (table[target]) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(isTargetExist(7, [2, 2, 2, 2, 2]));
