function multiplesOf3and5(number) {
  let r = 0;
  var x;
  for (x=0; x<= number; x++) {
    if ((x % 3 == 0) || (x % 5 == 0 )) {
      r += x;
    }
  }
  return r;
}

var r;
r = multiplesOf3and5(1000);
console.log(r);

