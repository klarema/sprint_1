const sum = require('./sum');
const restar = require('./sum');
const multiplicar = require('./sum');
const dividir = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract 1 from 2 to equal 1', () => {
    expect(restar(2, 1)).toBe(1);
});

test('multiple 3 by 2 to equal 6', () => {
    expect(multiplicar(3, 2)).toBe(6);
});

test('divide 10 by 5 to equal 2', () => {
    expect(dividir(10, 5)).toBe(2);
});