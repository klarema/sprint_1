module.exports = {};

function Calzado() {
  this.material = "material";
  this.tacon = "tacon";
  throw new Error("Calzado is an Abstract Class. Cannot be instantiated. ");
}
Calzado.prototype.madeOf = function () {
  return "Made of: " + this.material;
};
Calzado.prototype.taconType = function () {
  return "Tacon type: " + this.tacon;
};

function createCalzado(material, tacon) {
  this.material = material;
  this.tacon = tacon;
}
createCalzado.prototype = Object.create(Calzado.prototype);

// var botas = new createCalzado("leather", "alto");
// console.log("botas - " + botas.madeOf() + ", " + botas.taconType());
// var sneakers = new createCalzado("synthetic", "bajo");
// console.log("sneakers - " + sneakers.madeOf() + ", " + sneakers.taconType());
