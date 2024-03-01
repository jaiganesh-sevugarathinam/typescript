const car: {make: string, model: string, year: number} = {
     make: "BMW",
     model: 'X5',
     year: 2024
}

console.log(car);

//Type Ingerence

const names1 = {
    myName : 'Jaiganesh',
}

names1.myName = 'Jaiganesh S';
//error
//names1.myName = 2;

console.log(names1);

// object - optional property //  ?

const car2 : {type: string, mileage?:number} = {
    type : "Hyundai"
}

car2.mileage = 20000;

console.log(car2);

