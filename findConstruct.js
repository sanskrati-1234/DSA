const findConstruct = (target, arr) => {
  let table = new Array(target.length + 1).fill(0);
  table[0] = [];
  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let j = 0; j < arr.length; j++) {
        if (target.slice(i, i + arr[j].length) === arr[j]) {
          table[i + arr[j].length] = [...table[i], arr[j]];
        }
      }
    }
  }
  return table[target.length];
};

console.log(findConstruct("abc", ["aa", "ab", "b", "c"]));
