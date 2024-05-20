const bestSum = (target, nums) => {
  const table = new Array(target + 1).fill([]);

  table[0] = [[]];
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let num of nums) {
        if (Array.isArray(table[i + num]))
          table[i + num] = [
            ...table[i + num],
            ...table[i].map((item) => [...item, num]),
          ];
      }
    }
  }
  return multiDimensionalUnique(table[target]);
};

function multiDimensionalUnique(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

console.log(bestSum(7, [3, 4, 1, 3, 4]));
