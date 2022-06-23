function quadEquationSolver(a,b,c) {
    // var a = 2.3, b = 4, c = 5.6;
    var root1, root2;
    var determinant = b * b - 4 * a * c;
  
    if (determinant > 0) {
      root1 = (-b + Math.sqrt(determinant)) / (2 * a);
      root2 = (-b - Math.sqrt(determinant)) / (2 * a);

      document.querySelector(".root1").textContent = root1;
      document.querySelector(".root2").textContent = root2
    }

    else if (determinant == 0) {
      root1 = root2 = -b / (2 * a);
      // alert("root1 = root2 = %.2f;", root1);
      document.querySelector(".root1").textContent = "root 1 = root 2 = " + root1;
    }

    else {
      var real = -b / (2 * a);
      var imaginary = Math.sqrt(-determinant) / (2 * a);
      console.log("root1 = %.2f+%.2fi", real, imaginary);
      console.log("\nroot2 = %.2f-%.2fi", real, imaginary);

      document.querySelector(".root1").textContent = real + "," + imaginary;
      document.querySelector(".root2").textContent = real + "," + imaginary;
    }
  
};
