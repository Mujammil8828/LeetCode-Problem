const expect = (val) => ({
    toBe: (expected) => {
        if (val !== expected) throw new Error("Not Equal");
        return true;
    },
    notToBe: (expected) => {
        if (val === expected) throw new Error("Equal");
        return true;
}
});

try {
expect(5).toBe(5);
expect(5).toBe(6);
} catch (error) {
console.error(error.message)
}

try {
expect(5).notToBe(5);
expect(5).notToBe(6);
} catch (error) {
console.error(error.message)
}