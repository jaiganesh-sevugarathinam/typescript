var MyDirections;
(function (MyDirections) {
    MyDirections[MyDirections["North"] = 5] = "North";
    MyDirections[MyDirections["East"] = 6] = "East";
    MyDirections[MyDirections["West"] = 7] = "West";
    MyDirections[MyDirections["South"] = 8] = "South";
})(MyDirections || (MyDirections = {}));
var southDirection = MyDirections.South;
console.log(southDirection);
