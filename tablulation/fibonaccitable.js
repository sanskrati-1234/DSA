// 1 visualize the problem as table [array]
// 2 size the table based on inputs
// 3 seed ur table (optional)
// 4 main give some default values to table
// 5 iterate through table
// 6 fill further positions based on current position

function fbTabulation(n) {
  const table = new Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
}

console.log(fbTabulation(10));
