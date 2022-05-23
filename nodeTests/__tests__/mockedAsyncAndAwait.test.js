var myAsyncTest = require("../app/mockedAsyncAndAwait.js");

describe("Mocked employee and salary json files (Nivell 3)", () => {
  jest.mock(
    "../app/employee.json",
    () => [
      {
        id: 1,
        name: "Linux Torvalds",
      },
      {
        id: 2,
        name: "Bill Gates",
      },
      {
        id: 3,
        name: "Jeff Bezos",
      },
    ],
    {
      virtual: true,
    }
  );

  jest.mock(
    "../app/salary.json",
    () => [
      {
        id: 1,
        name: "Linux Torvalds",
      },
      {
        id: 2,
        name: "Bill Gates",
      },
      {
        id: 3,
        name: "Jeff Bezos",
      },
    ],
    {
      virtual: true,
    }
  );

  it("Employee id found - resolved", () => {
    expect(myAsyncTest.getEmployee(2)).resolves.toStrictEqual({
      id: 2,
      name: "Bill Gates",
    });
  });

  it("Employee Salary is returned - resolved", () => {
    expect(myAsyncTest.getSalary({ id: 2, name: "Bill Gates" })).resolves.toBe(
      1000
    );
  });

  it("Invoca funció getEmployee, returns a promise", () => {
    myAsyncTest.getEmployee(2).then((employeeDetails) => {
      expect(employeeDetails).toStrictEqual({ id: 2, name: "Bill Gates" });
    });
  });

  it("Invoca funció getSalary, returns a promise", () => {
    myAsyncTest
      .getSalary({ id: 2, name: "Bill Gates" })
      .then((salaryDetails) => {
        expect(salaryDetails).toBe(1000);
      });
  });
});
