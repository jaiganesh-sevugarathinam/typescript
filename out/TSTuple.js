var ourTuple;
//readonly tuple
//let ourTuple : readonly [number, boolean, string];
ourTuple = [1, true, 'Jaiganesh'];
//Error
//ourTuple = [true, 2, 'Jaiganesh'];
// this will throw error when we use readyonly tuple
ourTuple.push('Singampunari');
console.log(ourTuple);
// Named Tuples
var namedTuple = [1, 2];
console.log(namedTuple);
// Tuple destructuring
var tupleDestructure = [2, 3];
var x = tupleDestructure[0], y = tupleDestructure[1];
console.log(x, y);
