
function uniteUnique(arr) {
  var res = [];
  //var args = Array.prototype.slice.call(arguments);
  var args  = Array.from(arguments);
  args = args.reduce(function(acc, curr, idx) {
    return acc.concat(curr);
  }, []);

  args.forEach(function(val) {
    if (res.indexOf(val) === -1) {
      res.push(val);
    }
  });

  return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // [1, 3, 2, [5], [4]]
