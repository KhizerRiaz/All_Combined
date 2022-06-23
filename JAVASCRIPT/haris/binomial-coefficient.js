function binomial(x,num) {
    var coeff = 1;
    for (var y = x - num + 1; y <= x; y++)
    coeff *= y;
    for (y = 1; y <= num; y++)
    coeff /= y;
    ex = parseInt(x)
    num = parseInt(num)
    if(ex.value != '' && num.value !=''){
        document.querySelector(".output-div").textContent = coeff;
        document.querySelector(".error-message").textContent=""
    }
    else{
        document.querySelector(".output-div").textContent = "";
        document.querySelector(".error-message").textContent = "Enter the values of x and num to compute Binomial Coefficient"
    }
    
}