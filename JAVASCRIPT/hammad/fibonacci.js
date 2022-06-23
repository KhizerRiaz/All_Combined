const prompt = require("prompt-sync")({
    fake_val: "OPTIONAL CONFIG VALUES HERE",
});

function Fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return (Fib(n - 1) + Fib(n - 2));
    }
}
var n = 0;
var n = prompt("Enter number: ")
console.log(Fib(n));