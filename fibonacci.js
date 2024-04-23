function fib(n, obj = {}) {
  if (obj[n]) return obj[n];
  if (n < 3) return 1;
  obj[n] = fib(n - 1, obj) + fib(n - 2, obj);

  return obj[n];
}

console.log(fib(6));
