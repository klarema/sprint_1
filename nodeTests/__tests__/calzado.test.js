var myAbstractClass = require("../app/calzado");

describe("tests abstract class instantiation using a mock", () => {
  test("Instanciate objects from an Abstract class. ", () => {
    jest.mock("../app/calzado");

    // createCalzado.mockImplementation((material, tacon) => {
    // this.material = material;
    // this.tacon = tacon;
    // });
  });
});
