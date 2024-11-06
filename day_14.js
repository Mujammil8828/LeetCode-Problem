var cancellable = function (fn, args, t) {
    const cancelFn = function () {
        clearTimeout(timer)
    }
    const timer = setTimeout(() => {
        fn(...args)
    }, t)
    return cancelFn
};


/// MY UNDERSTAND

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

const cancelHello = cancellable(sayHello, ["Alice"], 3000); // 3-second delay

// Cancel the function after 1 second
setTimeout(() => {
    cancelHello(); // Cancels the `sayHello` function from executing
    console.log("Function cancelled");
}, 1000);

// THEORY
/* 1.. cancellable(sayHello, ["Alice"], 3000) call karta hai, jo sayHello("Alice") ko 3 seconds ke
 baad execute karne ka plan banata hai.

2 ..Lekin, cancelHello() ko 1 second ke baad setTimeout ke through call karte hain.

3 ..cancelHello() timer ko cancel kar deta hai, toh sayHello("Alice") execute nahi hota.

4 ..Console output mein bas "Function cancelled" print hoga, lekin "Hello, Alice!" print nahi hoga 
kyunki function cancel ho gaya.*/