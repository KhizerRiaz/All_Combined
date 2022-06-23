function prime_number(x){
    x = parseInt(x);
    let isPrime = true;
    if (x == 1) {
        document.querySelector('.output-div').textContent = x + " is neither prime nor composite";
      }
      else if (x > 1) {
        for (let i = 2; i < x; i++) {
          if (x % i == 0) {
            isPrime = false;
            break;}}
        if (isPrime) {
            document.querySelector('.output-div').textContent = x + " is a prime number";
            console.log(`${x} is a prime number`);
        } else {
          console.log(`${x} is not a prime number`);
          document.querySelector('.output-div').textContent = x + " is not a prime number";
        }
      }
      else {
        document.querySelector('.output-div').textContent = x + " is not a prime number";
      }
  
    }