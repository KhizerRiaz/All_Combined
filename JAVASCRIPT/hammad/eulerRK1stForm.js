//EULERS METHOD
// Yn+1 = Yn + h * f(x,y)

const prompt = require("prompt-sync")({
  fake_val: "OPTIONAL CONFIG VALUES HERE",
});

function f(x, y) {
  //   f(x,y) = x + y
  return x + y;
}

function eulerRK(x,y,b) {
  var x = 0.0,
    y = 0.0,
    b = 0.0,
    n = 5;

  // x = prompt("Enter the value of n");
  // y = prompt("Enter the value of y");
  // b = prompt("Enter step size (b)");

  x = parseFloat(x);
  y = parseFloat(y);
  b = parseFloat(b);

  var h = (b - x) / n;
  // console.log(x, b, h, y);

  var arrX = [x];
  var arrY = [y];

  while (arrX[arrX.length - 1] < b) {
    arrX.push(arrX[arrX.length - 1] + h);
  }

  // console.log(arrX[0], arrY[0]);
  // f = 1.0;
  for (var i = 0; i < arrX.length - 1; ++i) {
    //   console.log(f);
    arrY.push(arrY[arrY.length - 1] + f(arrX[i], arrY[i]) * h);
    //   console.log(arrY[arrY.length]);
  }
  return arrY;
};

console.log(euler());
