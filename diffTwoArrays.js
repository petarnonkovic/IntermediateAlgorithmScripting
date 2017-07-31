function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.filter(function(el, i, arr1) {
    return arr2.indexOf(el) < 0;
  }).concat(arr2.filter(function(el, i, arr2) {
    return arr1.indexOf(el) < 0;
  }));


  return newArr;
}