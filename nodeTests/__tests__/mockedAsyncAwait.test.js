// var myAsyncTest = require('../app/async_Await');
// jest.mock('./employee')
// console.log(employee)
// // salary = jest.mock('./salary')

describe.only('my suite', () => {
  test.only('one of my .only test', () => {
    expect(1 + 1).toEqual(2);
  });

// test('Employee id found - resolved', () => {
//   return expect(myAsyncTest.getEmployee(employee[1].id)).resolves.toStrictEqual({"id": 2, "name": "Bill Gates"});
// });

// test('Employee Salary is returned - resolved', () => {
//   return expect(myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"})).resolves.toBe(1000);
// });

// test('Invoca funció getEmployee, returns a promise', () => {
//   return myAsyncTest.getEmployee(2).then(employeeDetails => {
//     expect(employeeDetails).toStrictEqual({"id": 2, "name": "Bill Gates"});
//   });
// });

// test('Invoca funció getSalary, returns a promise', () => {
//   return myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"}).then(salaryDetails => {
//     expect(salaryDetails).toBe(1000);
//   });

});