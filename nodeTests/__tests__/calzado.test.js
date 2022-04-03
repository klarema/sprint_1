
test('Instanciate objects from an Abstract class. ', () => {
  const myMock = jest.fn();
  const Botas1 = new myMock()
  const Zapato1 = new myMock()
  const Another = new myMock()
  expect(myMock).toHaveBeenCalledTimes(3);
  // how to test this?
  console.log(Botas1)

  });

  // test('Instantiate Abstract class contructor will error . ', () => {
  //   const myMock = jest.fn();
  //   const Calzado = myMock()
  //   expect(myMock).toHaveBeenCalledTimes(1);
  //   expect - returns error
  //   });