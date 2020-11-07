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
// const cart = [
//     { name: "eggs", price: 2 },
//     { name: "milk", price: 1 },
//     { name: "tomatoes", price: 1 },
//     { name: "Cheese", price: 2 }
// ];
  
// let result = cart.reduce((acc, current) => {    
//     return acc.price + current.price; 
// });
// console.log(result);


// Exercise 1
const instructors = [
    {
      name: 'John',
      availabilty: 'all',
      specialities: ['Javascript', 'Python', 'C++']
    },
    {
      name: 'Mary',
      availabilty: 'weekend',
      specialities: ['Javascript', 'Ruby', 'C++']
    },
    {
      name: 'Chris',
      availabilty: 'evenings',
      specialities: ['Javascript']
    },
    {
      name: 'Anthony',
      availabilty: 'all',
      specialities: ['Python', 'Ruby']
    },
    {
      name: 'Pauline',
      availabilty: 'only Mondays',
      specialities: ['Javascript', 'Html', 'CSS']
    },
    {
      name: 'Mark',
      availabilty: 'all',
      specialities: ['C#', 'C++', 'Javascript']
    },
    {
      name: 'Helen',
      availabilty: 'evenings',
      specialities: ['Python', 'C++']
    },
    {
      name: 'Charles',
      availabilty: 'none',
      specialities: ['Python']
    }
  ];
  
  let codeInstructors = instructors.filter((instructor) => {  
    if(instructor.specialities.includes('Javascript') && (instructor.availabilty === 'all' || instructor.availabilty === 'weekend')) {
      return instructor.name;
    } 
  });
  console.log(codeInstructors);
  
  // PART 2
  // Iterate over that new array of instructors available and show a message per instructor saying:
  // Hi nameOfInstructor, we inform you that this weekend you will be doing the support class
  
  codeInstructors.forEach(instructor => {
    console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`);
  });
  
  // PART 3
  // Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
  // Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop
  
instructors.forEach(instructor => {
    if((instructor.specialities.includes('Python') && instructor.specialities.includes('Javascript')) 
    && (instructor.availabilty === 'all' || instructor.availabilty === 'weekend')) {
        console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`);
    }
});



















