//  Q :-Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    return args.length
};
//iska output 1 ayega 


// My undestans

console.log(argumentsLength(1, 2, 3));       // Output: 3
console.log(argumentsLength("hello", true)); // Output: 2
console.log(argumentsLength());              // Output: 0
