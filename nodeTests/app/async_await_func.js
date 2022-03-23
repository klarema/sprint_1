module.exports = {};
// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari. 

let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];
// let employeeName = 'Bill Gates'; 
let employeeId = 2;
const getEmployee = (_param) => {
  return new Promise((resolve, reject) => {
      for(let x in employees){
          if(employees[x].id === _param){
              resolve(employees[x])
          }
      }
      reject(new Error("Employee not found. "))
  })
};

const getSalary = (employeeObj) => {
  let found = false;
  for(let x in salaries){
      if(salaries[x].id === employeeObj.id){
          found = true;
          return salaries[x].salary
      }
  }
  if(!found){
      return (console.log("Salary Id not found. "))
  }
};

const myDelayFunc = () => {
  return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved after 2 seconds');
      }, 2000);
  });
}

// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.
// https://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html
module.exports.findingNameAndSalary = async function findingNameAndSalary () {
  try{
      const printEmployeeName = await getEmployee(employeeId);
      // console.log(printEmployeeName.name);
      const printSalary = getSalary(printEmployeeName);
      console.log(printSalary); //to fix - undefined when not found 
  } catch (error) {
      console.log(error.message)
  }
}
// findingNameAndSalary(employeeId);

// N2 Ex1 Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
module.exports.asyFunc2 = async function asyFunc2 () {
      const messageAfterDelay = await myDelayFunc();
      console.log(messageAfterDelay)
}
// asyFunc2()
// N3 Ex1  Captura tots els errors possibles dels nivells 1 i 2.



// // Nivell 1 - Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres 
// console.log(
//   ( () => {
//     let num1 = 10;
//     let num2 = 5;
//     let sumDosNombres = num1 + num2
//     return sumDosNombres
// })()
// )


// // Nivell 2 - Exercici 1: una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut
// let myfunction = (arg1) => {
//     let object1 = {};
//     object1.name = arg1;
//     return object1
// };
// console.log(`N2 Ex1 - objecte.atribut valor: ${myfunction("Tomas").name}`)


// // Nivell 2 - Exercici 2: una classe Persona que rebi un paràmetre 'nom' al ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe
// class PersonaA {
//     constructor (nom) {
//       this.nom = nom;
//     }
//     dirNom() { console.log(this.nom)}
// }
// const persona1 = new PersonaA("Laura");
// persona1.dirNom()


// // Nivell 3 - Exercici 1: una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions
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

// function createCalzado(objId, ObjectType){
//   if(ObjectType === "zapato"){
//     console.log("Create zapato, ID: "+ objId)
//     var objId = new Zapato()
//     console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
//   }
//   else{
//     console.log("Create botas, ID: "+ objId)
//     var objId = new Botas()
//     console.log("Tacon: " + objId.tacon() + ", Style: " + objId.style() + ", " + objId.material())
//   }

// }
// createCalzado("Calzado_1", "zapato");
// createCalzado("Calzado_2", "botas");
// createCalzado("Calzado_3", "zapato");

