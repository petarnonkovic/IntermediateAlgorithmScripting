function pairElement(str) {
  var sec1 = "ATCGATTGAGCTCTAGCG";
  var sec2 = "TAGCTAACTCGAGATCGC";
  var secArr = str.split('');
  var resSec = [];

  secArr.forEach(function(secEl) {
    var temp = [secEl];
    temp.push(sec2[sec1.indexOf(secEl)]);
    resSec.push(temp);
    temp = [];
  });

  return resSec;

}

console.log(pairElement("GCG"));