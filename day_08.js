var compose = function (functions) {

    return function (x) {

        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }
        return x;
    }
}
//my understand

let functions = [
    (x) => x + 1,    // Sabse pehle apply hoga
    (x) => x * 2,    // Uske baad apply hoga
    (x) => x - 3     // Sabse aakhri mein apply hoga
];

let composedFunction = compose(functions);
console.log(composedFunction(5)); 

// Output: 5 - 3 = 2, 2 * 2 = 4, 4 + 1 = 5
