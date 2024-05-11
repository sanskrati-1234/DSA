const getAllValidConstruct = (target, words) => {
  if (target === "") return [[]];

  let all = [];
  let a = [];
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      let val = target.slice(word.length);
      let ans = getAllValidConstruct(val, words);
      if (ans) {
        let match = ans.map((m) => [word, ...m]);
        console.log(match);
        all.push(...match);
      }
    }
  }
  return all;
};

console.log(getAllValidConstruct("abcdef", ["ab", "cd", "abc", "ef", "def"]));
