function spinalCase(str) {
  var rg = /[\s_]/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  str = str.replace(rg, '-');

  return str.toLowerCase();
}

//spinalCase('This Is Spinal Tap'); // "this-is-spinal-tap"
//spinalCase("thisIsSpinalTap"); // "this-is-spinal-tap"
//spinalCase("The_Andy_Griffith_Show"); // "the-andy-griffith-show"
//spinalCase("Teletubbies say Eh-oh"); // "teletubbies-say-eh-oh"
//spinalCase("AllThe-small Things"); // "all-the-small-things"
console.log(spinalCase("thisIsSpinalTap"));
//console.log(spinalCase('This Is Spinal Tap'));