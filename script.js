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

const products = [
    {name: 'star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'shells', price: 30},
    {name: 'banana', price: 10},
    {name: 'something', price: 50},
];

const saleProducts = products.map(product => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(products);
console.log(saleProducts);



















