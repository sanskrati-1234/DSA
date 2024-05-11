/**
 * create fxn canConstruct(target,wordBank)
 * target = target string
 * wordbank = array of strs
 * function should return number of possible ways we can create target string by concatenating strs of wordbank
 *
 * canConstruct("abcdef",["ab" , "cd" , "abc" , "ef"]) => true
 *
 **/

const countCanConstruct = (target, words) => {
  if (target === "") return true;

  let count = 0;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      if (countCanConstruct(target.slice(word.length), words)) {
        count++;
      }
    }
  }
  return count;
};

console.log(countCanConstruct("abcdef", ["ab", "cd", "abc", "ef", "def"]));
