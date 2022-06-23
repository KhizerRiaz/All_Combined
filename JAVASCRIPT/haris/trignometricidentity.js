function trignometricidentity(x){
    a=Math.sin(x);
    b=Math.cos(x);
    c=Math.tan(x);
    ex = parseInt(x)
    if(ex.value != ''){
        document.querySelector(".output-div1").textContent = a;
        document.querySelector(".output-div2").textContent = b;
        document.querySelector(".output-div3").textContent = c;
        document.querySelector(".error-message").textContent=""
    }
    else{
        document.querySelector(".output-div1").textContent = "";
        document.querySelector(".output-div2").textContent = "";
        document.querySelector(".output-div3").textContent = "";
        document.querySelector(".error-message").textContent = "Enter the values of x to compute trignometric identities"
    }
}





