const functions =  require ('./functions.js')

test ('test1:LoanPayment',()=>{
    expect(functions.LoanPayment(1000,2,12)).toBe(1250);
});
test ('test2:LoanPayment',()=>{
    expect(functions.LoanPayment(10000,0,0)).toBe(0);
});
test ('test3:LoanPayment',()=>{
    expect(functions.LoanPayment(1234,3,0)).toBe(925);
});
test ('test4:LoanPayment',()=>{
    expect(functions.LoanPayment(13456,0,4)).toBe(26912);
});

test ('test1:taylorExpansion',()=>{
    expect(functions.taylorExpansion(2,10)).toBe(7.3887125220458545);
});

test ('test2:taylorExpansion',()=>{
    expect(functions.taylorExpansion(-10, 10)).toBe(-27.70631023742594);
});
test ('test3:taylorExpansion',()=>{
    expect(functions.taylorExpansion(0,10)).toBe(7.3887125220458545);
});
test ('test4:taylorExpansion',()=>{
    expect(functions.taylorExpansion(2, -2)).not.toBe(0);
});

test('test1:trignometricidentity',()=>{
    expect(functions.trignometricidentity(23)).toEqual([-0.8462204041751706,-0.5328330203333975,1.5881530833912738
    ]);
});

test ('test1:binomial',()=>{
    expect(functions.binomial(8,3)).toBe(56);
});

test ('test2:binomial',()=>{
    expect(functions.binomial(-9,9)).toBe(0);
});

test ('test3:binomial',()=>{
    expect(functions.binomial(999,999)).toBe(1);
});
test ('test3:binomial',()=>{
    expect(functions.binomial(10,100)).toBe(0);
});





// 100000, 2, 12