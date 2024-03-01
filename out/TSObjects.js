var car = {
    make: "BMW",
    model: 'X5',
    year: 2024
};
console.log(car);
//Type Ingerence
var names1 = {
    myName: 'Jaiganesh',
};
names1.myName = 'Jaiganesh S';
//error
//names1.myName = 2;
console.log(names1);
// object - optional property //  ?
var car2 = {
    type: "Hyundai"
};
car2.mileage = 20000;
console.log(car2);
