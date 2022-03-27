
// Nivell 1 - Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres 
console.log(
  ( () => {
    let num1 = 10;
    let num2 = 5;
    let sumDosNombres = num1 + num2
    return sumDosNombres
})()
)


// Nivell 2 - Exercici 1: una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut
let myfunction = (arg1) => {
    let object1 = {};
    object1.name = arg1;
    return object1
};
console.log(`N2 Ex1 - objecte.atribut valor: ${myfunction("Tomas").name}`)


// Nivell 2 - Exercici 2: una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe
class PersonaA {
    constructor (nom) {
      this.nom = nom;
    }
    dirNom() { console.log(this.nom)}
}
const persona1 = new PersonaA("Laura");
persona1.dirNom()


// Nivell 3 - Exercici 1: una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions
// class Calzado{
//   constructor() {
//     if(this.constructor === Calzado){
//     throw new Error("Calzado is an Abstract Class. Cannot be instantiated. ");
//     }
//   }
//   material(){
//     return "Material: leather and synthetic mix"
//   }
//   tacon(){
//     throw new Error ("method must be implemented. ")
//   }
//   style(){
//     throw new Error ("method must be implemented. ")
//   }

// }
// class Botas extends Calzado {
//   tacon(){
//     return "bajo"
//   }
//   style(){
//     return "casual"
//   }

// }
// class Zapato extends Calzado {
//   tacon(){
//     return "alto"
//   }
//   style(){
//     return "formal"
//   }
// }

var Calzado = function () {
  if(this.constructor === Calzado){
  throw new Error("Calzado is an Abstract Class. Cannot be instantiated. ");
  }
};
Calzado.prototype.material = function () {
  return "leather and synthetic mix"
}
Calzado.prototype.tacon = function () {
throw new Error ("method must be implemented. ")
}
Calzado.prototype.style = function () {
throw new Error ("method must be implemented. ")
}

var Botas = function() {  
Calzado.apply(this, arguments);  
};  
Botas.prototype = Object.create(Calzado.prototype);  
Botas.prototype.constructor = Botas;  
Botas.prototype.tacon = function() {  
return "bajo";  
}  
Botas.prototype.style = function() {  
return "formal or casual" 
}  

var Zapato = function() {
Calzado.apply(this, arguments);  
}
Zapato.prototype = Object.create(Calzado.prototype);  
Zapato.prototype.constructor = Zapato;  
Zapato.prototype.tacon = function() {
  return "alto";
}
Zapato.prototype.style = function() {
  return "formal";
}

function createCalzado(objId, ObjectType){
  if(ObjectType === "zapato"){
    console.log("Create zapato, ID: "+ objId)
    var objId = new Zapato()
    console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
  }
  else{
    console.log("Create botas, ID: "+ objId)
    var objId = new Botas()
    console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
  }

}
createCalzado("Calzado_1", "zapato");
createCalzado("Calzado_2", "botas");
createCalzado("Calzado_3", "zapato");

