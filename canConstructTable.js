const canConstructTable = (target, arr) => {
  const table = new Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let w of arr) {
        let nas = target.startsWith(w);
        if (nas) {
          table[i + w.length] = true;
        }
        if (table[target.length]) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(canConstructTable("abcdef", ["ab", "cd", "abc", "ef"]));
