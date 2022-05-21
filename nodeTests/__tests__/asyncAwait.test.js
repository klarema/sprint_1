var myAsyncTest = require('../app/asyncAwait');

describe('Nivell 1: tests for Async/Await, Promises and Callback functions ', () => {

  test('Employee id found - promise resolved', () => {
    return expect(myAsyncTest.getEmployee(2)).resolves.toStrictEqual({"id": 2, "name": "Bill Gates"});
  });

  test('No Employee id found - promise  rejected', () => {
    return expect(myAsyncTest.getEmployee(5)).rejects.toStrictEqual("Employee not found. ");
  });

  test('Employee Salary is returned - promise  resolved', () => {
    return expect(myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"})).resolves.toBe(1000);
  });

  test('Employee Salary is returned - promise rejected', () => {
    return expect(myAsyncTest.getSalary({"id": 5, "name": "Bill Gates"})).rejects.toThrow();
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

});

describe('Verifica Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers. ', () => {
  test('Resolve message després de 2 segons - using Jest Fake Timer', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    myAsyncTest.myDelayFunc()
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});

