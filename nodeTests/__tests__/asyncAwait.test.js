var myAsyncTest = require('../app/asyncAwait');

test('Employee id found - resolved', () => {
  return expect(myAsyncTest.getEmployee(2)).resolves.toStrictEqual({"id": 2, "name": "Bill Gates"});
});

test('Employee Salary is returned - resolved', () => {
  return expect(myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"})).resolves.toBe(1000);
});

test('Resolve message després de 2 segons.', () => {
  return expect(myAsyncTest.myDelayFunc()).resolves.toBe('resolved after 2 seconds');
});

test('Invoca funció getEmployee, returns a promise', () => {
  return myAsyncTest.getEmployee(2).then(employeeDetails => {
    expect(employeeDetails).toStrictEqual({"id": 2, "name": "Bill Gates"});
  });
});

test('Invoca funció getSalary, returns a promise', () => {
  return myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"}).then(salaryDetails => {
    expect(salaryDetails).toBe(1000);
  });
});

test('Resolve message després de 2 segons - using Jest Fake Timer', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  myAsyncTest.myDelayFunc()
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
