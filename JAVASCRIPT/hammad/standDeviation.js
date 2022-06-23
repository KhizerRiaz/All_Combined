
function StandardDeviation(arr){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum = sum + x[i]
    }
    mean = sum/x.length
    for (let i =0 ;i<x.length;i++){
        sumsquared = Math.pow(x[i]-mean, 2);
    }
    return(sumsquared/x.length)
}

const x = [1,2,3]

// var input = prompt("Enter Number of values")
var input = 3
// alert("Value is "+input)
// for(let i =0;i<input;i++){
//     x[i]=prompt("Enter Number ")
// }

console.log(StandardDeviation(x))
