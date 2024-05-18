function gridTravelarTable(m, n) {
  let tab = new Array(m);
  for (let i = 0; i < m; i++) {
    tab[i] = new Array(n).fill(0);
  }
  tab[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m) {
        tab[i + 1][j] += tab[i][j];
      }
      if (j + 1 < n) {
        tab[i][j + 1] += tab[i][j];
        
      }
    }
  }

  return tab[m - 1][n - 1];
}

console.log(gridTravelarTable(3, 3));
