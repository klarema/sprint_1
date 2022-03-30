var PersonaA = require('../app/person');

test('Person class constructor and method work correctly. ', () => {
  const myMock = jest.fn();
  const mockPerson1 = myMock("John")
  const mockPerson2 = myMock("Laia")
  expect(myMock).toHaveBeenCalledTimes(2);
  expect(myMock.mock.instances[1] === "Laia");
  const person1 = new PersonaA(mockPerson1);
  const person2 = new PersonaA(mockPerson2);
  
  
  // const showName = person1.dirNom()
  // expect(showName).toContain("John");
  
  });

