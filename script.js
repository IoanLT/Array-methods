// Filter method

// const scores = [10, 20, 15, 25, 50, 40, 5];

// const scoresFiltered = scores.filter(score => score > 20);
// console.log(scores);
// console.log(scoresFiltered);

// const users = [
//     {name: 'nelu', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'luigi', premium: true}
// ];

// const premiumUsers = users.filter(user => {
//     return user.premium;
// })

// console.log(users);
// console.log(premiumUsers);


// Map method

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);

// console.log(salePrices);

// const products = [
//     {name: 'star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'shells', price: 30},
//     {name: 'banana', price: 10},
//     {name: 'something', price: 50},
// ];

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     } else {
//         return product;
//     }
// });

// console.log(products);
// console.log(saleProducts);


// Reduce method






// Exercise 1 - Wild Code School
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


























