// was came up with two solutions

function myReplace(str, before, after) {

  // if before is capitalize
  if (/[A-Z]/.test(before.charAt(0))) {
    // capitalize replacement (after)
    var capitalize = after[0].toUpperCase();
    after = capitalize + after.slice(1);
  }

  //console.log(after);
  return str.replace(before, after);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//===================================================

function myReplace(str, before, after) {

  // if before is capitalize
  if (/[A-Z]/.test(before.charAt(0))) {
    // capitalize replacement (after)
    after = after.split('');
    var capitalize = after[0].toUpperCase();
    after.splice(0, 1, capitalize);
    after = after.join('');
  }

  return str.replace(before, after);

}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");