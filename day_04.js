var createCounter = function(init) {
    let temp = init
    return{
        increment:() => ++temp,
        decrement:() => --temp,
        reset:() => temp = init,
    }
    
};
let counter = createCounter(10);

console.log(counter.increment()); // Output: 11
console.log(counter.increment()); // Output: 12
console.log(counter.decrement()); // Output: 11
console.log(counter.reset());     // Output: 10 (reset to initial value)
console.log(counter.decrement()); // Output: 9

