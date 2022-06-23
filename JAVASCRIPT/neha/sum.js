function sum(x,num){
    var sum=0;
    x = parseInt(x);
    num = parseInt(num);
    sum = x + num;
    document.querySelector('.output-div').textContent = sum;
}


// sum(2,3);