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
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);
// console.log(result);

// const scores = [
//   {player: 'nelu', score: 50},
//   {player: 'yoshi', score: 30},
//   {player: 'nelu', score: 70},
//   {player: 'mario', score: 60}
// ];

// const neluTotal = scores.reduce((acc, curr) => {
//   if (curr.player === 'nelu'){
//     acc += curr.score;
//   }
//   return acc;
// }, 0);
// console.log(marioTotal);


// Find method

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const highScore = scores.find(score => score > 50); 
// console.log(highScore);


// Sort method
// Example 1
// const names = ['mario', 'luigi', 'nelu', 'yoshi', 'chun-li'];

// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);

// Example 2
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a, b) => a - b);
console.log(scores);
// scores.reverse();
// console.log(scores);

// Example 3
const players = [
  {player: 'nelu', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'luigi', score: 70},
  {player: 'mario', score: 60},
  {player: 'chun-li', score: 20},
];

// players.sort((a, b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if(b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(players);

players.sort((a, b) => b.score - a.score);
console.log(players);























