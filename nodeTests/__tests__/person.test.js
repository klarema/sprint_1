var PersonaA = require("../app/person");

const mockPersonA = jest.fn();
jest.mock("../app/person", () => {
  return jest.fn().mockImplementation(() => {
    return { PersonaA: mockPersonA };
  });
});

const mockDirNom = jest.fn();
jest.mock("../app/person", () => {
  return jest.fn().mockImplementation(() => {
    return { dirNom: mockDirNom };
  });
});

describe("N2 Jest Mocks: test the calls to the Person class constructor and method. (Classes & Arrow Functions - Nivell 2 Exercici 2))", () => {
  beforeEach(() => {
    PersonaA.mockClear();
    mockDirNom.mockClear();
  });

  it("Creates a new person instance. ", () => {
    const PersonA1 = new PersonaA("John");
    expect(PersonA1).toBeTruthy();
  });

  it("Has been called 2 times. ", () => {
    const PersonA1 = new PersonaA("John");
    const PersonA2 = new PersonaA("Laia");
    expect(PersonaA.mock.calls.length).toEqual(2);
  });

  it("Gets last instance property. ", () => {
    const PersonA1 = new PersonaA("John");
    const PersonA2 = new PersonaA("Laia");
    expect(PersonaA.mock.lastCall[0]).toBe("Laia");
  });

  it("calls method dirNom. ", () => {
    const PersonA2 = new PersonaA("Laia");
    PersonA2.dirNom();
    expect(mockDirNom.mock.calls.length).toEqual(1);
  });
});
