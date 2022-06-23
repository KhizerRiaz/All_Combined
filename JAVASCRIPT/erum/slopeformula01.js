<<<<<<< HEAD
const prompt=require("prompt-sync")({fake_val:"OPTIONAL CONFIG VALUES HERE",});
function slope_formula(x11,x22,y11,y22){
    let gradient= (y22-y11)/(x22-x11);
    return gradient;
}
function slp(x1,x2,y1,y2){
//  let x1=parseInt(prompt("Enter first xcoordinate:"));
//  let x2=parseInt(prompt("Enter the second xcoordinate:"));
//  let y1=parseInt(prompt("Enter the first ycoordinate:"));
// let y2=parseInt(prompt("Enter the second ycoordinate:"));
let output=slope_formula(x1,x2,y1,y2);
// console.log('The slope of the given coordinates is ',output );
document.querySelector('.output-div').textContent = output;
=======
// const prompt=require("prompt-sync")({fake_val:"OPTIONAL CONFIG VALUES HERE",});

function slope_formula(x11, x22, y11, y22) {
    let gradient = (y22 - y11) / (x22 - x11);
    return gradient;
}


function slp(x1=0, x2=0, y1=0, y2=0) {
    // let x1 = parseInt(prompt("Enter first xcoordinate:"));
    // let x2 = parseInt(prompt("Enter the second xcoordinate:"));
    // let y1 = parseInt(prompt("Enter the first ycoordinate:"));
    // let y2 = parseInt(prompt("Enter the second ycoordinate:"));
    let output = slope_formula(x1, x2, y1, y2);
    // console.log("The slope of the given coordinates is ", output);
    return output;
>>>>>>> b6d6148740d94d4063dce8d0399682a9ea55e255
}
