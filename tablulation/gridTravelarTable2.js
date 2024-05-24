function gridTravelarTable2(m, n) {
  let tb = new Array(m).fill().map(() => new Array(n).fill(0));
  tb[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m) {
        tb[i + 1][j] += tb[i][j];
      }
      if (j + 1 < n) {
        tb[i][j + 1] += tb[i][j];
      }
    }
  }
  return tb[m - 1][n - 1];
}

console.log(gridTravelarTable2(4, 4));
