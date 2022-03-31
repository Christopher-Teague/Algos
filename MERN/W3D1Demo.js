// { OBJECTS }

//              0         1           2         3
var animals = ["lion", "zebra", "elephant", "giraffe"];

console.log(typeof animals);
// 1
// for (let i=0; i< animals.length; i++) {
//     console.log(animals[i]);
// }

// 2
// animals.map( (animal) =>console.log(animal))

// 3
for (someElement of animals) {
    console.log(someElement);
}

var message = "hello";

// console.log(message[0]);
// message[0] = "H";
// console.log(message[0]);

// for (someChar of message) {
//     console.log(someChar);
// }

var doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}

console.log(Object.keys(doggo)); // returns an array with all the keys in the Obj
const objValsArray = Object.values(doggo); //returns an array with all the values in the Obj
console.log(objValsArray);
console.log(Object.entries(doggo)); // returns a 2d array of key-values[]

// check if a key exists         O(1)
console.log(doggo.hasOwnProperty("asdsads")); // returns T/F

for (someKey in doggo) {
    console.log(someKey, doggo[someKey]);
}
