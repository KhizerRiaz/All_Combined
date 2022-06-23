function distance(x,num,num2,num3){
    var dist=0.0;
    dist=Math.sqrt(Math.pow(num2-x,2)+Math.pow(num3-num,2));
    ex = parseInt(x)
    num = parseInt(num)
    num2 = parseInt(num2)
    num3 = parseInt(num3)
    if(ex.value != '' && num.value !='' && num2.value !='' && num3.value !=''){
        document.querySelector(".output-div").textContent = dist;
        document.querySelector(".error-message").textContent=""
    }
        else{document.querySelector(".output-div").textContent = "";
        document.querySelector(".error-message").textContent = "Enter the values of x's and y's to compute distance"
    }
}