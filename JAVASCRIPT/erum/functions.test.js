const functions = require('./functions')

test("FourierSeries", () => {
    expect(functions.FourierSeries(5,4,1)).toEqual([0.18258905014552554, 0.18258905014552554, 0.18258905014552554, 0.18258905014552554, 0.18258905014552554])
});

test("quadEquationSolver", () => {
    expect(functions.quadEquationSolver(2.3,4,5.6)).toBe(1.2956229935435948)
});

test("slopeformula01", () => {
    expect(functions.slope_formula(10,2,10,2)).toBe(1)
});

test("slopeformula02 ", () => {
    expect(functions.square(10,2)).toBe(144)
});

