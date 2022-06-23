
// Euler's formula
function euler(){
    var e = Math.e;
    var pi = Math.pi;
    var i = Math.i;

    var eulerIdentity = eval(e^(pi*i) + 1);
// console.log(e);
// console.log(pi);
// console.log(i);

// console.log('Error due to numerical round off errors and has been fixed in python')
    document.querySelector('.output-div').textContent = eulerIdentity;
    
// console.log(eulerIdentity);
}

// euler();
