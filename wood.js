function woodQuanter(chairwood, tablewood, bedwood) {
    const perchairwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;
    const perchairquantity = perchairwood * chairwood;
    const pertablequantity = pertablewood * tablewood;
    const perbedquantity = perbedwood * bedwood;
    const totalwood = perchairquantity + pertablequantity + perbedquantity;
    return totalwood;
}
const total = woodQuanter(1, 1, 1);
console.log(total);