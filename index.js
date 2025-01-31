// const counter = () => {
//     let currentValue = 0;
//     return (value) => {
//         currentValue += value
//         return currentValue;
//     }
// }

// const incrementBy = counter();

// console.log(incrementBy(12));
// console.log(incrementBy(3));
// console.log(incrementBy(1));


// const counter = () => {
//     let value = 0;
//     return (amount) => {
//         value += amount;
//         return value;
//     }
// }

// const incrementBy = counter();

// console.log(incrementBy(14));
// console.log(incrementBy(21));

const debounce = (fn, t) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t)
    }
}

const greet = debounce((msg) => console.log(msg), 100);

greet('wasup');
greet('wasup');
greet('wasup');
greet('wasup');