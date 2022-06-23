// const prompt = require("prompt-sync")({
//     fake_val: "OPTIONAL CONFIG VALUES HERE",
// });

function Fib(n) {
    // n=parseInt(n);
    if (n <= 1) {
        // document.querySelector('.output-div').textContent = n;
        return n;
    } else {
        var f = (Fib(n - 1) + Fib(n - 2));
        
        return f;
        
    }

    

    
}

function fibonacci(n){
    let fib = Fib(n);
    document.querySelector('.output-div').textContent = fib;
}
// var n = 0;
// var n = prompt("Enter number: ")
// console.log(Fib(3));
