var myAsyncTest = require('../app/mockedAsyncAndAwait');

describe('Mocked employee and salary json files (Nivell 3)', () => {
    jest.mock('../app/employees.json', () => ([{
        id: 1,
        name: 'Linux Torvalds'
        }, {
        id: 2,
        name: 'Bill Gates'
        },{
        id: 3,
        name: 'Jeff Bezos'
        }]), {
            virtual: true
    });

    jest.mock('../app/salaries.json', () => ([{
        id: 1,
        name: 'Linux Torvalds'
        }, {
        id: 2,
        name: 'Bill Gates'
        },{
        id: 3,
        name: 'Jeff Bezos'
        }]), {
            virtual: true
    });


    test('Employee id found - resolved', () => {
        return expect(myAsyncTest.getEmployee(employees[1].id)).resolves.toStrictEqual({"id": 2, "name": "Bill Gates"});
    });

    test('Employee Salary is returned - resolved', () => {
        return expect(myAsyncTest.getSalary({"id": 2, "name": "Bill Gates"})).resolves.toBe(1000);
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