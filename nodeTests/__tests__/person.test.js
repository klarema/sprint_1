var PersonaA = require("../app/person");

beforeEach(() => {
  const myMock = jest.fn();
  //   PersonaA.mockClear();
});

afterEach(() => {});

describe("N2 Jest Mocks: test the calls to the Person class constructor. (Classes & Arrow Functions - Nivell 2 Exercici 2))", () => {
  it("Creates a new person instance. ", () => {
    const myMock = jest.fn();
    const mockPerson1 = new myMock("John");
    expect(myMock.mock.instances[0] === "John");
  });
  it("Has been called 2 times. ", () => {
    const myMock = jest.fn();
    const mockPerson1 = new myMock("John");
    const mockPerson2 = new myMock("Laia");
    expect(myMock).toHaveBeenCalledTimes(2);
  });
  it("Gets last instance property. ", () => {
    const myMock = jest.fn();
    const mockPerson1 = new myMock("Laia");
    const mockPerson2 = new myMock("Tony");
    expect(myMock.mock.instances[2] === "Tony");
  });
  //   it("Spies on the constructor ", () => {
  //     jest.mock("../app/person", () => {
  //       // Works and lets you check for constructor calls:
  //       return jest.fn().mockImplementation(() => {
  //         let nom = "Tony";
  //         return {
  //           PersonaA: () => {
  //             // dirNom(() => {
  //             //   console.log(this.nom);
  //             // });
  //           },
  //         };
  //       });
  //     });
  //     // expect(PersonaA.mock.dirNom.length).toEqual(1);
  //   });
});

describe("N2 Jest Mocks: test the calls to the Person class method dirNom(). (Classes & Arrow Functions - Nivell 2 Exercici 2))", () => {
  //   const getterMethodMock = jest
  //     .spyOn(PersonaA.prototype, "dirNom")
  //     .mockImplementation(() => "some-mocked-result");
  //   it("Spies on the method - custom methods are called", () => {
  //     const person = new PersonaA();
  //     const dirNom = person.dirNom;
  //     expect(getterMethodMock).toHaveBeenCalled();
  //   });
});
