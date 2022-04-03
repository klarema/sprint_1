// var PersonaA = require('../app/person');

test('Person class constructor works correctly. ', () => {
  const myMock = jest.fn();
  const mockPerson1 = new myMock("John")
  const mockPerson2 = new myMock("Laia")
  expect(myMock).toHaveBeenCalledTimes(2);
  expect(myMock.mock.instances[1] === "Laia");
  // expect(myMock.mock.instances[1] === "ThisShouldFail?");
  // console.log(myMock.mock.instances[1])
  });
  

  // test('Person method works correctly. ', () => {
  //   const myMock = jest.fn();
  //   const mockPerson3 = new myMock("Tony")
  //   mockPerson3.dirNom()
  //   myMock.dirNom()
  //   // expect something
  //   });

