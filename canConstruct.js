const canConstruct = (target, arr, ans) => {
  if (target.length === 0) return ans;
  for (let s of arr) {
    if (target.startsWith(s)) {
      let subfix = target.slice(s.length);

      let an1 = canConstruct(subfix, arr, ans);
      //if (an1) {
      return ans.push([...an1, subfix]);
      // }
      // ans.push(...temp);
    }

    return ans;
  }
};
console.log(canConstruct("abc", ["a", "b", "c", "bc"], []));

//

// tree
// base condition
// via recursion
// init memo
// return
