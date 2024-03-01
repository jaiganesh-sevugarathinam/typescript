let ourTuple : [number, boolean, string];

//readonly tuple
//let ourTuple : readonly [number, boolean, string];
ourTuple = [1, true, 'Jaiganesh'];
//Error
//ourTuple = [true, 2, 'Jaiganesh'];


// this will throw error when we use readyonly tuple
ourTuple.push('Singampunari');
console.log(ourTuple);

// Named Tuples

const namedTuple : [a: number, b: number] = [1,2]

console.log(namedTuple);

// Tuple destructuring

const tupleDestructure : [number,number] = [2,3];
const [x,y] = tupleDestructure;
console.log(x,y);