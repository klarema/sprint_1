var myAsyncTest = require('../app/async_await_func');

test('el nom de l empleat i el seu salari ', () => {
  expect(myAsyncTest.findingNameAndSalary(2)).toBe(1000);
});

test('resolve message després de 2 segons', () => {
    expect(myAsyncTest.asyFunc2()).toBe('resolved after 2 seconds');
  });

