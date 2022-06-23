function fourierSeries(x,n){
  // const n = 5;
  // const x = 4
  ex = document.getElementById('x')
  num = document.getElementById('num')
  for (var i=1;i<n;i++){
      const a  = Math.sin(n*x)
      const number = 1/n*a;
      // return number;

     
      if(ex.value != '' && num.value !=''){
          document.querySelector(".output-div").textContent = number;
          document.querySelector(".error-message").textContent=""
      }
      else{
          document.querySelector(".output-div").textContent = "";
          document.querySelector(".error-message").textContent = "Enter the values of x and num to compute taylor series"
      }
   
  }

   
    
}

