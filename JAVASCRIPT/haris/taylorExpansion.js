function taylorExpansion(x,numOfTerms){
    var i, fact=1;
    var sum=0.0;
    
    for(var i=1; i<numOfTerms; i++){
        fact = fact*i;
        sum = sum+(Math.pow(x,i)/fact);
    }

    sum = sum+1;
    return sum
    

}
