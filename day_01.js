var createHelloWorld = function() {
    return function() {
         return "Hello World";
    }
};

console.log(createHelloWorld()());

        