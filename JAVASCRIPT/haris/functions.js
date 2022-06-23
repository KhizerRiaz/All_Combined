const functions = {
    
    LoanPayment: function(p,r,n){
        var a;
        // var p= prompt('Enter your loan amount : ');
        // var r = prompt('Enter nterest rate per period : ');
        // var n = prompt('Enter total number of periods :  ');
        a=p*(r*(1+r)^n) / ( (1+r)^n -1 );
        // alert("Payment amount per period : " + a);
        return a
        },
    
    taylorExpansion: function (x,numOfTerms){
        var i, fact=1;
        var sum=0.0;
        
        for(var i=1; i<numOfTerms; i++){
            fact = fact*i;
            sum = sum+(Math.pow(x,i)/fact);
        }
    
        sum = sum+1;
        return sum
        
    
    },

    trignometricidentity: function (name){
        var x = 3;
        
        a=Math.sin(name);
        b=Math.cos(name);
        c=Math.tan(name);
        return [a, b, c] 
    },
    binomial: function (n,k) {
        // var n = prompt("Enter first value: ");
        // var k = prompt("Enter second value: ");
        var coeff = 1;
        for (var x = n - k + 1; x <= n; x++) coeff *= x;
        for (x = 1; x <= k; x++) coeff /= x;
        return coeff;
    }







}
module.exports =functions