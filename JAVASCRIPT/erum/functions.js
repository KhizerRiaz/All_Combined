const functions = {

    // laplace


    // FourierSeries
    FourierSeries: function(n = 5, x = 4, i = 1) {
    
        var arr = [];
    
        while (i <= n) {
            const a = Math.sin(n * x);
            const number = (1 / n) * a;
            arr.push(number)
            i++;
        }
        return arr;
    },
    


    // QuadraticFormula
    quadEquationSolver: function(a = 2.3, b = 4, c = 5.6) {
        // var a = 2.3, b = 4, c = 5.6;
        var root1, root2;
        var determinant = b * b - 4 * a * c;
      
        if (determinant > 0) {
          root1 = (-b + Math.sqrt(determinant)) / (2 * a);
          root2 = (-b - Math.sqrt(determinant)) / (2 * a);
    
          // console.log("root1 = %.2f and root2 = %.2f", root1, root2);
          return root1, root2;
        }
    
        else if (determinant == 0) {
          root1 = root2 = -b / (2 * a);
          // console.log("root1 = root2 = %.2f;", root1);
          return root1;
        }
    
        else {
          var real = -b / (2 * a);
          var imaginary = Math.sqrt(-determinant) / (2 * a);
          // console.log("root1 = %.2f+%.2fi", real, imaginary);
          // console.log("\nroot2 = %.2f-%.2fi", real, imaginary);
          return real, imaginary;
        }
      
    },
    

    // slopeformula01
    slope_formula: function(x11, x22, y11, y22) {
    let gradient = (y22 - y11) / (x22 - x11);
    return gradient;
    },

    // slopeformula02
     square: function(d = 10, e = 2) {
        let c = Math.pow(d + e, 2);
        return c;
    }

}
module.exports =functions
