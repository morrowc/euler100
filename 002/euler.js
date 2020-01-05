function fiboEvenSum(n) {
  let res = 2;
  let a = [1, 2];
  var x,t;
  for (x=2; x < n; x++) {
    a[x] = a[x-2] + a[x-1]
    if (a[x] % 2 == 0) {
      res += a[x]
    }
  }
  return res;
}

fiboEvenSum(10);
