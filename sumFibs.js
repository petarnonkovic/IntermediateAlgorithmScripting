function sumFibs(num) {
  var fibNums = [];
  var sumOdds = 0;
  var i = 0;
  var f;
  if (num < 0 || typeof num !== 'number') {
    return false;
  }

  while (num >= i) {
    if (i == 0 || i == 1) {
      f = 1;
      i++;
    } else {
        f = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
        i = f;
    }
    if (num >= f) {
      fibNums.push(f);
    }
  }

  var odds = fibNums.filter(function(el) {
    return el % 2 !== 0;
  });

  sumOdds = odds.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  return sumOdds;
}

console.log(sumFibs(1000));// 1785
console.log(sumFibs(75025));// 135721

