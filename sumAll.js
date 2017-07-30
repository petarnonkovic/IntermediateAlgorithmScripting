function sumAll(arr) {

  var min, max, sum;
  var range = [];

  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }

  do {
    range.push(min);
    min += 1;
  }
  while (min <= max);

  return sum = range.reduce(function(total, current) {
    return total + current;
  }, 0);

}

  //sumAll([1, 4]);
  console.log(sumAll([1, 4]));