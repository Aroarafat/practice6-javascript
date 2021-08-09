const cart = [
    { name: 'laptop', price: 3000, quantity: 1 },
    { name: 'phone', price: 3000, quantity: 6 },
    { name: 'shirt', price: 3000, quantity: 8 },
    { name: 'watch', price: 3000, quantity: 2 },
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const producttotal = product.price * product.quantity;
    cartTotal = cartTotal + producttotal;

}
console.log(cartTotal);