// variables
let nom = "John";
let cognom = "Wayne";

// Nivell 1 - Exercici 1: el nom d'usuari al invocar-la passant-li el nom com a paràmetre 
console.log("N1Ex1 - Nom: ",  nom)


// Nivell 2 - Exercici 1:  el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge
console.log(`N2Ex1 - Nom i cognom (template literal): ${nom} ${cognom}`)


// Nivell 2 - Exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal. S'ha de cridar una funció des de dins d'un template literal
const myFunctionInTemplateLiteral = `N2Ex2 - Nom i cognom (function in template literal): ${nom + " " + cognom}`;
console.log(myFunctionInTemplateLiteral)


// Nivell 3 - Exercici 1: has de tenir només una definició de funció i dos loops: un que la escrigui 10 vegades dins un array i un altre que executi cada element de l'array 
console.log("N3Ex1 - ")
function myLoopsFunction(){
    myArray = [];
    for(let x = 1; x <= 10; x++){
        myArray.push(x)
    }
    for(let y in myArray){
        console.log(myArray[y])
    }
}
myLoopsFunction();


// Nivell 3 - Exercici 2: funció anònima, autoinvocada = igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre
const displayName = function () {
    return console.log(
        `N3Ex2 - 
        funció anònima, autoinvocada: ${nom}`);
}();   