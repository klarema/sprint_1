
// Nivell 1 - Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres 
let num1 = 10;
let num2 = 5;
(() => {
    console.log(num1 + num2);
  })();


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
    dirNom() { return this.nom}
}
const persona1 = new PersonaA("Laura");
console.log(`N2 Ex2 - una classe Persona: ${persona1.dirNom()}`); 


// Nivell 3 - Exercici 1: una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
function Person2() {
  this.name = '';
}
function Teacher() {
  Person2.call(this);
  this.subjects = [];
}
function Assistant() {
  Teacher.call(this);
  this.mentor = '';
}
Teacher.prototype = Object.create(Person2.prototype);
Teacher.prototype.constructor = Teacher;
var teacher_1 = new Teacher;
teacher_1.name = "John Ryan";
teacher_1.subjects = ["History", "Geography"];

Assistant.prototype = Object.create(Teacher.prototype);
Assistant.prototype.constructor = Assistant;
var assistant_1 = new Assistant;
assistant_1.name = "Tom Jones";
assistant_1.subjects = ["Geography"];
assistant_1.mentor = "John Ryan";

function Student() {
  Person2.call(this);
}
Student.prototype = Object.create(Person2.prototype);
Student.prototype.constructor = Student;
var student_1 = new Student;
student_1.name = "Mia Connors";
console.log(`N3 Ex1\nThis Person is a Teacher, name: ${teacher_1.name}, teaches: ${teacher_1.subjects}`)
console.log(`This Person is an Assistant, name: ${assistant_1.name}, mentored by: ${assistant_1.mentor}`)
console.log(`This Person is a Student, name: ${student_1.name} `)
