// const prompt = require("prompt-sync")({
//     fake_val: "OPTIONAL CONFIG VALUES HERE",
// });

function Fib(n) {
    if (n <= 1) {
        document.querySelector('.output-div').textContent = n;
    } else {
        var f = (Fib(n - 1) + Fib(n - 2));
        document.querySelector('.output-div').textContent = f;
    }

    
}
// var n = 0;
// var n = prompt("Enter number: ")
// console.log(Fib(n));