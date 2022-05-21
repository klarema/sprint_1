var myMath = require('../app/math');

describe(' Nivel 1: tests for basic Math functions', () => {

    test('adds 1 + 2 not to equal 4', () => {
    expect(myMath.sum(1, 2)).not.toBe(4);
    });

    test('adds 1 + missing param to equal NaN', () => {
        expect(myMath.sum(1)).toBeNaN();
    });

    test('adds decimal values correctly', () => {
        expect(myMath.sum(2.2, 1.1)).toBeCloseTo(3.3, 4);
    });

    test('subtract 1 from 2 to equal 1', () => {
        expect(myMath.restar(2, 1)).toBe(1);
    });

    test('subtract 3 from 2 to equal 1', () => {
        expect(myMath.restar(2, 3)).toBe(-1);
    });

    test('multiple 3 by 2 to equal 6', () => {
        expect(myMath.multiplicar(3, 2)).toBe(6);
    });

    test('multiple 3 by a string 6 to equal 18', () => {
        expect(myMath.multiplicar(3, "6")).toBe(18);
    });

    test('multiple 3 by a string six to return NaN', () => {
        expect(myMath.multiplicar(3, "six")).toBeNaN();
    });

    test('mutiple with no params returns ', () => {
        expect(myMath.multiplicar()).toBeNaN();
    });

    test('divide 10 by 5 to equal 2', () => {
        expect(myMath.dividir(10, 5)).toBe(2);
    });

    test('extra param to return division of first 2 params passed', () => {
        expect(myMath.dividir(10, 5, 2)).toBe(2);
    });

});

