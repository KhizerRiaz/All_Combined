const math = require('mathjs')
    
const functions = {
    fibonacci: function Fib(n) {
        if (n <= 1) {
            return n;
        } else {
            return (Fib(n - 1) + Fib(n - 2));
        }
    },

    euler: function(x, y, b){
        var n = 5;
        
        x = parseFloat(x);
        y = parseFloat(y);
        b = parseFloat(b);
        
        var h = (b - x) / n;
        
        var arrX = [x];
        var arrY = [y];
        
        while (arrX[arrX.length - 1] < b) {
            arrX.push(arrX[arrX.length - 1] + h);
        }
        
        for (var i = 0; i < arrX.length - 1; ++i) {
            arrY.push(arrY[arrY.length - 1] + (arrX[i], arrY[i]) * h);
        }

        return arrY;
    },

    euler_formula: function(){
        var e = math.e;
        var pi = math.pi;
        var i = math.i;
    
        var eulerIdentity = eval(e^(pi*i) + 1);
        return eulerIdentity;
    },

    StandardDeviation: function (x){
        let sum = 0
        for (let i = 0; i < x.length; i++) {
            sum = sum + x[i]
        }
        mean = sum/x.length
        for (let i =0 ;i<x.length;i++){
            sumsquared = Math.pow(x[i]-mean, 2);
        }
        return (sumsquared/x.length)
    },

    relativity: function (M,v) {
        const c = 299792458; // m/s
        var generalRelativity = M * Math.pow(c,2);
        var LF_sub = 1-(v/Math.pow(c,2));
        var lorentzFactor = Math.pow(LF_sub,(1/2));
        var r = generalRelativity / lorentzFactor;
        return r;
    },

    quard: function (a,b,c){
        var result = []
        let x1 = (-b + Math.pow(b*b - 4*a*c , 0.5) ) / (2*a)
        let x2 = (-b - Math.pow(b*b - 4*a*c , 0.5) ) / (2*a)
        result.push (x1)
        result.push (x2)
        return result
    },

    quadratic_equation: function (a,b,c){
        let root1, root2;    
        let discriminant = b * b - 4 * a * c;
    
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        }
    
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);
            return [root1, root2];
        }
    
        else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            return [realPart, imagPart, realPart - imagPart]
        }
    },    
}

module.exports = functions;