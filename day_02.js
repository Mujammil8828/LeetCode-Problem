function createCounter(n) {
    return function() {
        return n++;
    }
}

const counter = createCounter(10);  // Yeh 10 se shuru karega

console.log(counter());  // 10
console.log(counter());  // 11
console.log(counter());  // 12
