function convertHTML(str) {
  // &colon;&rpar;
  var escapeChars = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };

  for(var key in escapeChars) {
    if (str.indexOf(key) !== -1) {
      var rg = new RegExp(key, 'g');
      var str = str.replace(rg, escapeChars[key]);
    }
  }

  return str;

}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
//convertHTML("Hamburgers < Pizza < Tacos")

//console.log('takos'.indexOf('s'));