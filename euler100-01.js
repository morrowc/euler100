function multiplesOf3and5(number) {
  let three = 0;
  var x;
  for (x=0; x<= number; x++) {
    if ((x % 3 == 0) || (x % 5 == 0 )) {
      three += x;
    }
      }
  return three;
}

var r;
r = multiplesOf3and5(8456);
console.log("Result:")
console.log(r);

