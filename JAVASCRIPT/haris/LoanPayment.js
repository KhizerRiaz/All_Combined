function loanPayment(x,num,num2){
    var a=0.0;
    a=x*(num*(1+num)^num2) / ( (1+num)^num2 -1 );
    ex = parseInt(x)
    num = parseInt(num)
    num2 = parseInt(num2)
   if(ex.value != '' && num.value !='' && num2.value !=''){
    document.querySelector(".output-div").textContent = a;
    document.querySelector(".error-message").textContent=""
}
    else{document.querySelector(".output-div").textContent = "";
    document.querySelector(".error-message").textContent = "Enter the values of x and num to compute taylor series"
}
}
