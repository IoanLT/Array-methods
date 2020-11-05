// const myArray = [12, 34, 54, 32, 54];
// console.log(myArray.every(element => element > 10));
// returns true

// Testing the every array method
// const teamOne = [
//     {name: "Bob", age: 19},
//     {name: "Pierre", age: 17},
//     {name: "Karl", age: 16},
//     {name: "Ryan", age: 21}
// ];

// const checkIfAdult = teamOne.every(player => player.age >= 18);
// console.log(checkIfAdult);

// Testing the filter method
// const animals = [
//     {name: "Oscar", species: "Dog"},
//     {name: "Max", species: "Cat"},
//     {name: "Tiger", species: "Cat"},
//     {name: "Sam", species: "Dog"},
//     {name: "Ginger", species: "Cat"},
//     {name: "Gizmo", species: "Dog"},
//     {name: "Billy", species: "Cat"}
// ];

// const onlyCats = animals.filter(pet => pet.species === 'Cat');
// console.log(onlyCats);


// Testing the reduce method
const cart = [
    { name: "eggs", price: 2 },
    { name: "milk", price: 1 },
    { name: "tomatoes", price: 1 },
    { name: "Cheese", price: 2 }
];
  
let result = cart.reduce((acc, current) => {    
    return acc.price + current.price; 
});
console.log(result);






















