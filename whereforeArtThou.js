
function whatIsInAName(collection, source) {
  // empty array, to hold returned objects
  var arr = [];
  // needle prop names for check
  var sourceKeys = Object.keys(source);

  // callback function for Array.every()
  var check = function(cur, index, array) {
    //console.log(this);
    return (this.hasOwnProperty(cur) && source[cur] === this[cur]);
  };

  /*
  * Loop thru array and run
  * 'check' callback on every object
  */
  collection.forEach(function(el, index, array) {
    /*
    * check is every source property in collection
    * @return true | false;
    */
    var isContainOrops = sourceKeys.every(check, el);

    // on true push whole object to resulting array
    if (isContainOrops) {
      arr.push(el);
    }

  });

  // return result for display
  return arr;

}


console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));

