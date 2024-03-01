function myUnionFunction (code: string | number){
    console.log(`My code is ${code}`)
}

myUnionFunction(404);
myUnionFunction('404');

//error
//myUnionFunction(true);