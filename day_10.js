/*Q:- Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.*/

var once = function(fn) {
    let called = false
    return function(...args){
        if(called){
            return undefined
        }
        called = true
        return fn(...args)
    }
};


// My understand  

let fn = (x) => x * 2;
let onceFn = once(fn);

console.log(onceFn(5));  // Output: 10 (pehli baar call hua)
console.log(onceFn(5));  // Output: undefined (doosri baar, toh undefined return karta hai)
console.log(onceFn(10)); // Output: undefined (koi bhi number pass karne par, yeh bas pehle call ke baad undefined return karega)
