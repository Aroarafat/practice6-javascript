function smallestnumbers(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const numbers = [12, 13, 14, 15, 16, 17];
const smallest = smallestnumbers(numbers);
console.log(smallest);