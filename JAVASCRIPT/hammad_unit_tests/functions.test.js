const functions = require('./functions');

// FIBONACCI TEST
test('FIBONACCI OF 10', () => {
    expect(functions.fibonacci(10)).toBe(5);
});

test('FIBONACCI OF 20', () => {
    expect(functions.fibonacci(20)).toBe(6765);
});

test('FIBONACCI OF 30', () => {
    expect(functions.fibonacci(30)).toBe(832040);
});

test('FIBONACCI OF 5', () => {
    expect(functions.fibonacci(5)).toBe(5);
});

// EULER TEST
test('EULER OF x = 0, y = 1, b = 0.1', () => {
    expect(functions.euler(0,1,0.1)).toEqual([1, 1.02, 1.0404, 1.061208, 1.08243216, 1.1040808032]);
});

// EULER FORMULA TEST
test('EULER FORMULA', () => {
    expect(functions.euler_formula()).toBe(2);
});

test('EULER FORMULA', () => {
    expect(functions.euler_formula()).toBe(0);
});

// STANDARD DEVIATION
test('STANDARD DEVIATION OF [1,1,1]', () => {
    expect(functions.StandardDeviation([1,1,1])).toBe(0);
});

test('STANDARD DEVIATION OF [1,2,3]', () => {
    expect(functions.StandardDeviation([1,2,3])).toBe(0.3333333333333333);
});

// RELATIVITY
test('RELATIVITY', () => {
    expect(functions.relativity(1,2)).toBe(0.3333333333333333);
});

// QUADRATIC
test('QUADRATIC', () => {
    expect(functions.quard(1,2,-15)).toEqual([3, -5]);
});
  
// QUADRATIC EQUATION
test('QUADRATIC', () => {
    expect(functions.quadratic_equation(1,2,-15)).toEqual([3, -5]);
});
