const functions = require('./functions')

    // distance(zain)

// test ('test1:distance',()=>{
//     expect(functions.distance(1,2,3,4)).toEqual("2.8284");
// });
// test ('test2:distance',()=>{
//     expect(functions.distance(1,2,-3,-4)).toEqual("7.2111");
// });
// test ('test3:distance',()=>{
//     expect(functions.distance(1,'w',-3,-4)).toEqual("NaN");
// });
// test ('test4:distance',()=>{
//     expect(functions.distance(0,1.99999,5.88999,100)).toEqual("98.1769");
// });

// prime_number(taha)

// test ('test1:prime_number',()=>{
//     expect(functions.prime_number(11)).toBe("Is a prime number");
// });
// test ('test2:prime_number',()=>{
//     expect(functions.prime_number(10)).toEqual("Is not a prime number");
// });
// test ('test3:prime_number',()=>{
//     expect(functions.prime_number('a')).toEqual("Wrong input type");
// });
// test ('test4:prime_number',()=>{
//     expect(functions.prime_number(-4)).toEqual("The number is not a prime number.");
// });


// sum(mohsin)

test ('test1:sum',()=>{
    expect(functions.sum(1,2)).toBe(3);
});
test ('test2:sum',()=>{
    expect(functions.sum(10,4)).toBe(14);
});
test ('test3:sum',()=>{
    expect(functions.sum(4,3)).toBe(7);
});
test ('test4:sum',()=>{
    expect(functions.sum(-4,+4)).toBe(0);
});