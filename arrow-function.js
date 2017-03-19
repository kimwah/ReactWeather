var names=['Kimwah','David','Martin'];

names.forEach(function(name){
	console.log('forEach: ', name);
});

names.map(function(name){
	console.log('map: ', name);
});


//map return the array, wherelse forEach not
var arr = [1, 3, 2];

console.log(
  // This one works:
  arr
  .map(function (i) {
    return i + i;
  })
  // Chaining!
  .sort()
);

var ascii = {
    a: 97,
    b: 98,
    c: 99
};

var {c, f, g} = ascii;
console.log('c, f, g  are:', c, f,g);

