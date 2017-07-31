// with for in and while loops
function convertToRoman(num) {
  var numSizes = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  var romanNumStr = '';
  num = parseInt(num);

  if (num < 1 || !Number.isInteger(num)) {
    return false;
  }

  for(var roman in numSizes) {
    while(num >= numSizes[roman]) {
      //romanNumStr += roman.toString();
      romanNumStr += String(roman);
      num -= numSizes[roman];
    }
  }

  return romanNumStr;

}

// only with for in loop
function convertToRoman(num) {
  var numSizes = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  var romanNumStr = '';
  num = parseInt(num);

  if (num < 1 || !Number.isInteger(num)) {
    return false;
  }

  for(var i in numSizes) {
      var qnum = Math.floor(num / numSizes[i]);
      num -= qnum * numSizes[i];
      romanNumStr += i.repeat(String(qnum));
  }

  return romanNumStr;

}

//convertToRoman(36)
console.log(convertToRoman(4136));