function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.filter(function(el, i, arr1) {
    return arr2.indexOf(el) < 0;
  }).concat(arr2.filter(function(el, i, arr2) {
    return arr1.indexOf(el) < 0;
  }));


  return newArr;
}

// or solution with for loops
function diffArray(arr1, arr2) {
  var newArr = [];
  var arr = arr1.concat(arr2);
  console.log(arr);

  for (var i in arr){
    var f = arr[i];
    var t = 0;
    for (j=0; j<arr.length; j++){
      if(arr[j] === f){
        t++;
        }
    }
    if (t === 1){
      newArr.push(f);
        }
  }
  return newArr;
}