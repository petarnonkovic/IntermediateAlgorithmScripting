

function fearNotLetter(str) {
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length - 1);
  var fullRange = [];

  while (first <= last) {
    fullRange.push(String.fromCharCode(first));
    first++;
  }

  if (fullRange.length == str.length) {
    return undefined;
  }

  var missingLetters = fullRange.filter(function(letter) {
    return str.indexOf(letter) < 0;
  });

  return missingLetters.join('');

}

console.log(fearNotLetter("bcd"));