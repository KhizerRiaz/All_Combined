function FourierSeries(n = 5, x = 4, i = 1) {
    // const n = 5;
    // const x = 4
    // var i = 1;

    var arr = [];

    while (i <= n) {
        const a = Math.sin(n * x);
        const number = (1 / n) * a;
        console.log(number);
        i++;
    }
    return arr;
}
