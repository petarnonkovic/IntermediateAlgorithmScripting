
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  }
  return false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
