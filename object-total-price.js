const products = [
    { name: 'laptop', price: 3000 },
    { name: 'phone', price: 3000 },
    { name: 'shirt', price: 3000 },
    { name: 'watch', price: 3000 },
];
let totalprice = 0;
for (const product of products) {
    totalprice = totalprice + product.price;
}
console.log(totalprice);

