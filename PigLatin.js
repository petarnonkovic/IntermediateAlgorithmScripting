function translatePigLatin(str) {
  var vovelSuffix = 'way';
  var consonantSuffix = 'ay';
  var vowels = ["a", "e", "i", "o","u"];

  if (vowels.indexOf(str.charAt(0)) != -1) {
    // in vovel array add 'way'
    str += vovelSuffix;
    return str;
  } else {

    do {
      var first = str.substr(0, 1);
      str = str.substr(1) + first;
    }
    while(vowels.indexOf(str.charAt(0)) == -1);
    str += consonantSuffix;
  }

  return str;
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));