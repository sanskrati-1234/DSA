const allConstructTable = (target, words) => {
  let table = new Array(target.length + 1).fill().map(() => []);
  table[0] = [[]];
  for (let i = 0; i < target.length; i++) {
    if (table[i]) {
      for (let word of words) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = [
            ...table[i + word.length],
            ...table[i].map((tItem) => [...tItem, word]),
          ];
        }
      }
    }
  }

  return table[target.length];
};

console.log(allConstructTable("abc", ["aa", "ab", "a", "b", "c"]));
