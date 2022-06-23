const functions = {

    // distance(zain)
    distance: function(x1,y1,x2,y2)
{
    const distan=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    console.log("The distance between the two points is :",distan.toFixed(4));
    return distan.toFixed(4)
},

// prime_number(taha)
 prime_number:function(number){
    // const number = parseInt(prompt("Enter a positive number: "));
      let isPrime = true;
    
      // check if number is equal to 1
      if (number === 1) {
        return "1 is neither prime nor composite number.";
        //console.log("<h2></h2>");
      }
    
      // check if number is greater than 1
      else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }
    
        if (isPrime) {
          return "Is a prime number";
        } else {
          return "Is not a prime number";
        }
      }
    
      // check if number is less than 1
      else {
        return "The number is not a prime number.";
      }
    },

// quadratic(neha)
 findRoots: function(a, b, c)
{
if (a == 0) {
return "Invalid";
}

let d = b * b - 4 * a * c;
let sqrt_val = Math.sqrt(Math.abs(d));

if (d > 0) {

return ((-b + sqrt_val) / (2 * a) + + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
return (-b / (2 * a) + -b / (2 * a)) ;
}
else 
{

return (-b / (2 * a) + " + i"+ sqrt_val / (2 * a) + "\n"+ -b / (2 * a)+ " - i" + sqrt_val) / (2 * a) ;
}
},

// sum(mohsin)
sum: function(a,b)
{
const sum = a + b;
return sum;
}

}

module.exports = functions;